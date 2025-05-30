interface TabMenuItemProps {
  menuItem: { title: string; value: string };
  activeTab: string;
  handleTabClick: () => void;
}

export default function TabMenuItem({
  menuItem,
  activeTab,
  handleTabClick,
}: TabMenuItemProps) {
  const { title, value } = menuItem;
  return (
    <li className="w-full sm:w-[calc(50%-8px)] lg:w-fit leading-none">
      <button
        onClick={handleTabClick}
        className={`cursor-pointer flex items-center justify-center w-full lg:min-w-[200px] h-[41px] xl:h-[55px] px-5 py-[2.5] border rounded-[8px] xl:rounded-[12px]
            text-[12px] font-medium leading-none uppercase xl:hover:bg-orange
             xl:hover:border-orange xl:hover:text-white focus-visible:bg-orange focus-visible:order-orange 
             focus-visible:hover:text-white active:scale-[99%] transition duration-300 ease-in-out ${
               value === activeTab
                 ? 'bg-orange border-orange text-white'
                 : 'bg-white border-gray-light text-dark'
             }`}
      >
        {title}
      </button>
    </li>
  );
}
