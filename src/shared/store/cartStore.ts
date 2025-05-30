import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem } from '@/types/cartItem';
import { Product } from '@/types/product';

interface CartState {
  cartItems: CartItem[];
  promocode: string | null;
  discount: number;
  additionalItems: {
    id: string;
    title: string;
    price: number;
    image: string;
    value: string;
  }[];
  addAdditionalItem: (item: {
    id: string;
    title: string;
    price: number;
    image: string;
    value: string;
  }) => void;
  tips: number;
  setTips: (amount: number) => void;
  clearTips: () => void;
  getTipsAmount: () => number;
  removeAdditionalItem: (id: string) => void;
  clearAdditionalItems: () => void;
  addToCart: (newItem: CartItem) => void;
  increaseQuantity: (itemId: string) => void;
  decreaseQuantity: (itemId: string) => void;
  removeFromCart: (itemId: string) => void;
  removeSingleItem: (itemId: string) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getTotalAmount: () => number;
  getItemFinalPrice: (item: Product | CartItem) => number;
  getAddonFinalPrice: (item: number) => number;
  applyPromocode: (code: string, discount: number) => void;
  removePromocode: () => void;
  toggleAddonChecked: (itemId: string, addonId: string) => void;
  isCartAnimating: boolean;
  cartAnimationKey: number;
  animatingImage: { url: string; alt: string } | null;
  setCartAnimation: (isAnimating: boolean) => void;
  setCartAnimationKey: () => void;
  setAnimatingImage: (image: { url: string; alt: string } | null) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cartItems: [],
      promocode: null,
      discount: 0,
      additionalItems: [],
      isCartAnimating: false,
      cartAnimationKey: Date.now(),
      animatingImage: null,
      tips: 0,

      getItemFinalPrice: item => {
        const discount = get().discount;
        const basePrice =
          'discountedPrice' in item &&
          item.discountedPrice &&
          item.discountedPrice < item.price
            ? item.discountedPrice
            : item.price;

        return Math.round(basePrice * (1 - discount / 100));
      },

      getAddonFinalPrice: (price: number) => {
        const discount = get().discount;
        return Math.round(price * (1 - discount / 100));
      },

      getTotalAmount: () => {
        const {
          cartItems,
          getItemFinalPrice,
          discount,
          additionalItems,
          tips,
        } = get();

        const cartTotal = cartItems.reduce((sum, item) => {
          const itemTotal = getItemFinalPrice(item) * item.quantity;
          const addonsTotal =
            item.addons?.reduce((addonSum, addon) => {
              if (!addon.checked) return addonSum;
              const discountedAddonPrice = Math.round(
                addon.price * (1 - discount / 100)
              );
              return addonSum + discountedAddonPrice;
            }, 0) || 0;

          return sum + itemTotal + addonsTotal;
        }, 0);

        const additionalTotal = additionalItems.reduce(
          (sum, item) => sum + Math.round(item.price * (1 - discount / 100)),
          0
        );

        return Math.round((cartTotal + additionalTotal) * ((100 + tips) / 100));
      },

      getCartTotal: () => {
        const { cartItems, getItemFinalPrice, discount } = get();

        const cartTotal = cartItems.reduce((sum, item) => {
          const itemTotal = getItemFinalPrice(item) * item.quantity;
          const addonsTotal =
            item.addons?.reduce((addonSum, addon) => {
              if (!addon.checked) return addonSum;
              const discountedAddonPrice = Math.round(
                addon.price * (1 - discount / 100)
              );
              return addonSum + discountedAddonPrice;
            }, 0) || 0;

          return sum + itemTotal + addonsTotal;
        }, 0);

        return cartTotal;
      },

      addToCart: newItem => {
        set(state => {
          const existingItemIndex = state.cartItems.findIndex(
            item => item.id === newItem.id
          );

          if (existingItemIndex !== -1) {
            const updatedCartItems = state.cartItems.map((item, index) => {
              if (index === existingItemIndex) {
                const mergedAddons =
                  item.addons?.map(addon => {
                    const matchingAddon = newItem.addons?.find(
                      a => a.id === addon.id
                    );
                    return matchingAddon
                      ? { ...addon, checked: matchingAddon.checked }
                      : addon;
                  }) || item.addons;

                return {
                  ...item,
                  quantity: item.quantity + newItem.quantity,
                  addons: mergedAddons,
                };
              }
              return item;
            });

            return { cartItems: updatedCartItems };
          } else {
            return {
              cartItems: [
                ...state.cartItems,
                { ...newItem, quantity: newItem.quantity ?? 1 },
              ],
            };
          }
        });
      },

      removeFromCart: itemId => {
        set(state => ({
          cartItems: state.cartItems.filter(item => item.id !== itemId),
        }));
      },

      removeSingleItem: id => {
        set(state => ({
          cartItems: state.cartItems.filter(cartItem => cartItem.id !== id),
        }));
      },

      clearCart: () => set({ cartItems: [] }),

      increaseQuantity: itemId => {
        set(state => ({
          cartItems: state.cartItems.map(item =>
            item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
          ),
        }));
      },

      decreaseQuantity: itemId => {
        set(state => {
          const existingItem = state.cartItems.find(item => item.id === itemId);

          if (existingItem) {
            if (existingItem.quantity > 1) {
              return {
                cartItems: state.cartItems.map(item =>
                  item.id === itemId
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
                ),
              };
            } else {
              return {
                cartItems: state.cartItems.filter(item => item.id !== itemId),
              };
            }
          }
          return state;
        });
      },

      toggleAddonChecked: (itemId, addonId) => {
        set(state => ({
          cartItems: state.cartItems.map(item => {
            if (item.id === itemId && item.addons) {
              return {
                ...item,
                addons: item.addons.map(addon =>
                  addon.id === addonId
                    ? { ...addon, checked: !addon.checked }
                    : addon
                ),
              };
            }
            return item;
          }),
        }));
      },

      applyPromocode: (code, discount) => {
        set({ promocode: code, discount });
      },

      removePromocode: () => {
        set({ promocode: null, discount: 0 });
      },

      addAdditionalItem: item => {
        set(state => {
          const exists = state.additionalItems.find(i => i.id === item.id);
          if (exists) return state;
          return { additionalItems: [...state.additionalItems, item] };
        });
      },

      removeAdditionalItem: id => {
        set(state => ({
          additionalItems: state.additionalItems.filter(item => item.id !== id),
        }));
      },

      clearAdditionalItems: () => {
        set({ additionalItems: [] });
      },

      setTips: (amount: number) => set({ tips: amount }),
      clearTips: () => set({ tips: 0 }),

      getTipsAmount: () => {
        const {
          tips,
          cartItems,
          getItemFinalPrice,
          discount,
          additionalItems,
        } = get();

        // Підрахунок суми товарів і додаткових позицій без чайових
        const cartTotal = cartItems.reduce((sum, item) => {
          const itemTotal = getItemFinalPrice(item) * item.quantity;
          const addonsTotal =
            item.addons?.reduce((addonSum, addon) => {
              if (!addon.checked) return addonSum;
              const discountedAddonPrice = Math.round(
                addon.price * (1 - discount / 100)
              );
              return addonSum + discountedAddonPrice;
            }, 0) || 0;
          return sum + itemTotal + addonsTotal;
        }, 0);

        const additionalTotal = additionalItems.reduce(
          (sum, item) => sum + Math.round(item.price * (1 - discount / 100)),
          0
        );

        const totalWithoutTips = cartTotal + additionalTotal;

        // Вираховуємо суму чайових у гривнях
        const tipsAmount = Math.round((totalWithoutTips * tips) / 100);

        return tipsAmount;
      },

      setCartAnimation: isAnimating => {
        set({ isCartAnimating: isAnimating });
      },

      setCartAnimationKey: () => {
        set({ cartAnimationKey: Date.now() });
      },

      setAnimatingImage: image => {
        set({ animatingImage: image });
      },
    }),
    {
      name: 'art-lover-cart-storage',
    }
  )
);
