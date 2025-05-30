import { FormikHelpers } from 'formik';
import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';
import { ValuesCheckoutFormType } from '../components/forms/checkoutForm/CheckoutForm';
import { generateOrderNumber } from './generateOrderNumber';
import { fetchSanityData } from './fetchSanityData';
import { productsByIds, promocodeByCode } from '../lib/queries';
import { useCartStore } from '../store/cartStore';
import { CartItem } from '@/types/cartItem';
import { Product } from '@/types/product';
import { useRouter } from '@/i18n/navigation';
import { BasketOrder } from '../hooks/useMonopayBasketOrder';

export const handleSubmitForm = async <T>(
  { resetForm }: FormikHelpers<T>,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setIsError: Dispatch<SetStateAction<boolean>>,
  setIsUnavailable: Dispatch<SetStateAction<boolean>>,
  setIsNotificationShown: Dispatch<SetStateAction<boolean>>,
  values: ValuesCheckoutFormType,
  router: ReturnType<typeof useRouter>,
  basketOrder: BasketOrder
) => {
  const {
    clearCart,
    clearAdditionalItems,
    cartItems,
    additionalItems,
    promocode,
    discount,
    applyPromocode,
    removePromocode,
    getTotalAmount,
    clearTips,
  } = useCartStore.getState();

  setIsLoading(true);

  //Формуємо номер замовлення
  const orderNumber = generateOrderNumber();

  // Формуємо дату та час замовлення
  const now = new Date();

  // Форматуємо дату
  const formattedDate = now.toLocaleDateString('uk-UA');

  // Форматуємо час
  const formattedTime = now.toLocaleTimeString('uk-UA');

  // Об'єднуємо дату та час
  const orderDate = `${formattedDate} ${formattedTime}`;

  //Запитуємо з cms актуальні ціни на товари в кошику
  const productsIds = cartItems.map((cartItem: CartItem) => cartItem.cmsId);
  const resProducts = await fetchSanityData(productsByIds, {
    ids: productsIds,
  });

  //Запитуємо з cms актуальний промокод
  const resPromo = promocode
    ? await fetchSanityData(promocodeByCode, { code: promocode })
    : null;
  const updatedDiscount = resPromo ? resPromo.discount : 0;
  const updatedPromocode = resPromo ? resPromo.code : null;

  //Оновлюємо в cartStore промокод та знижку на актуальні
  if (updatedPromocode) {
    applyPromocode(updatedPromocode, updatedDiscount);
  } else {
    removePromocode();
  }

  // Оновлюємо cartItems і перевіряємо наявність товарів
  const updatedCartItems: CartItem[] = [];
  const unavailableProducts: string[] = [];

  cartItems.forEach(cartItem => {
    const productFromCms = resProducts.find(
      (product: Product) => product.id === cartItem.cmsId
    );

    if (!productFromCms || productFromCms.inStock === 'out_of_stock') {
      unavailableProducts.push(cartItem.title);
      return;
    }

    updatedCartItems.push({
      ...cartItem,
      price: productFromCms.price,
      discountedPrice: productFromCms.discountedPrice,
    });
  });

  useCartStore.setState({ cartItems: updatedCartItems });

  // Якщо знайдено недоступні товари — показати помилку і припинити процес замовлення
  if (unavailableProducts.length > 0) {
    setIsLoading(false);
    setIsError(true);
    setIsUnavailable(true);
    setIsNotificationShown(true);
    return;
  }

  const totalOrderSum = getTotalAmount();

  const collectedOrderData = {
    orderDate,
    orderNumber,
    name: values.name.trim(),
    surname: values.surname.trim(),
    email: values.email.trim(),
    phone: values.phone.trim(),
    deliveryService: values.deliveryService.trim(),
    deliveryType: values.deliveryType.trim(),
    city: values.city.trim(),
    branchNumber: values.branchNumber.trim(),
    address: values.address.trim(),
    country: values.country.trim(),
    payment: values.payment.trim(),
    recipientOption: values.recipientOption.trim(),
    recipientName: values.recipientName.trim(),
    recipientSurname: values.recipientSurname.trim(),
    recipientPhone: values.recipientPhone.trim(),
    message: values.message.trim(),
    postcard: values.postcard.trim(),
    tips: values.tips.trim(),
    cartItems,
    promocode,
    discount,
    totalOrderSum,
  };

  // Формуємо список товарів з переносами на новий рядок для Telegram
  const orderedListProducts = cartItems
    .map(cartItem => {
      const quantityLine = ` - ${cartItem.quantity} шт.`;
      const colorLine = cartItem.color?.title
        ? `, колір: ${cartItem.color.title.toLowerCase()}`
        : '';

      const checkedAddons = cartItem.addons?.filter(addon => addon.checked);
      const addons = checkedAddons?.length
        ? checkedAddons.map(addon => `    - ${addon.title} - 1 шт.`).join('\n')
        : null;

      return (
        `- ${cartItem.title}${colorLine}${quantityLine}` +
        (addons ? `\n  додаткові товари:\n${addons} ` : '')
      );
    })
    .join('\n');

  // Формуємо список додаткового упакування з переносами на новий рядок для Telegram
  const additionalItemsList = additionalItems.length
    ? additionalItems.map(item => `- ${item.title} - 1 шт.`).join('\n') + '\n'
    : '';

  // Формуємо дані для telegram
  const dataTelegram =
    `<b>Замовлення #${orderNumber}</b>\n` +
    `<b>Дата замовлення:</b> ${orderDate}\n` +
    `<b>Ім'я:</b> ${values.name.trim()}\n` +
    `<b>Прізвище:</b> ${values.surname.trim()}\n` +
    `<b>Телефон:</b> ${values.phone.replace(/[^\d+]/g, '')}\n` +
    `<b>Email:</b> ${values.email.trim()}\n` +
    `<b>Сервіс доставки:</b> ${values.deliveryService.trim()}\n` +
    `<b>Тип доставки:</b> ${values.deliveryType.trim()}\n` +
    `<b>Насeлений пункт:</b> ${values.city.trim()}\n` +
    `<b>Номер відділення або поштомату:</b> ${values.branchNumber?.trim() || ''}\n` +
    `<b>Адреса:</b> ${values.address?.trim() || ''}\n` +
    `<b>Оплата:</b> ${values.payment.trim()}\n` +
    `<b>Одержувач:</b> ${values.recipientOption.trim()}\n` +
    `<b>Ім'я одержувача:</b> ${values.recipientName?.trim()}\n` +
    `<b>Прізвище одержувача:</b> ${values.recipientSurname?.trim()}\n` +
    `<b>Телефон одержувача:</b> ${values.recipientPhone?.replace(/[^\d+]/g, '')}\n` +
    `<b>Повідомлення:</b> ${values.message?.trim()}\n` +
    `<b>Чайові:</b> ${values.tips?.trim() ? `${values.tips?.trim()}%` : ''}\n` +
    `<b>Промокод:</b> ${values.promocode?.trim() ? values.promocode?.trim() : ''}\n` +
    `<b>Розмір знижки за промокодом:</b> ${discount}%\n` +
    `<b>Список товарів в замовленні:</b>\n${orderedListProducts}\n` +
    `<b>Додаткове пакування:</b>\n${additionalItemsList}` +
    `<b>Текст вітальної листівки:</b> ${values.postcard?.trim()}\n` +
    `<b>Сума замовлення:</b> ${totalOrderSum} грн\n`;

  if (collectedOrderData.payment === 'Картою на сайті') {
    try {
      const res = await axios.post('/api/monopay/invoice', {
        amount: totalOrderSum * 100, // сума в копійках
        orderNumber,
        basketOrder,
      });

      const { pageUrl } = res.data;

      //Очищаємо форму
      resetForm();
      //Очищаємо кошик
      clearCart();
      //Очищаємо додаткове пакування
      clearAdditionalItems();
      //Очищаємо чайові
      clearTips();
      //Видаляємо промокод
      removePromocode();

      if (pageUrl) {
        window.location.href = pageUrl; // переадресація на оплату
      } else {
        console.error('Payment error: немає pageUrl', res.data);
      }
    } catch (error) {
      setIsError(true);
      setIsNotificationShown(true);
      setIsLoading(false);
      console.error(error);
      return error;
    }
  }

  try {
    await axios({
      method: 'post',
      url: '/api/telegram',
      data: dataTelegram,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    //Очищаємо форму
    resetForm();
    //Очищаємо кошик
    clearCart();
    //Очищаємо додаткове пакування
    clearAdditionalItems();
    //Очищаємо чайові
    clearTips();
    //Видаляємо промокод
    removePromocode();
    //Редірект на сторінку підтвердження замовлення
    router.push('/confirmation');
  } catch (error) {
    setIsError(true);
    setIsNotificationShown(true);
    console.error(error);
    return error;
  }
  setIsLoading(false);
};
