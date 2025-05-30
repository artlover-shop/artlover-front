import BurgerIcon from '@/shared/components/icons/BurgerIcon';

interface NavbarBurgerMenuButtonProps {
  onOpen: () => void;
}

const NavbarBurgerMenuButton = ({ onOpen }: NavbarBurgerMenuButtonProps) => {
  return (
    <button
      aria-label="open menu button"
      type="button"
      onClick={onOpen}
      className="cursor-pointer group size-5 xl:size-10 outline-none xl:hover:text-orange focus-visible:text-orange active:scale-95 transition duration-300 ease-in-out"
    >
      <BurgerIcon className="w-full h-auto" />
    </button>
  );
};

export default NavbarBurgerMenuButton;
