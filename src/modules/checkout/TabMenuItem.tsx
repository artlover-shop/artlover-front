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
    <li className="w-full sm:w-[calc(50%-15px)]">
      <button
        onClick={handleTabClick}
        className={`flex items-center justify-center w-full h-[35px] xl:h-[75px] px-5 py-[2.5] border rounded-[8px] xl:rounded-[12px]
            text-[12px] xl:text-[18px] font-medium leading-none uppercase transition duration-300 ease-in-out ${
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
