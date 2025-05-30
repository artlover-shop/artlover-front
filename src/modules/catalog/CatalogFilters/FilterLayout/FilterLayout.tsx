import { ReactNode } from 'react';

interface FilterLayoutProps {
  title?: string;
  children: ReactNode;
}

const FilterLayout = ({ title, children }: FilterLayoutProps) => {
  return (
    <div className="mb-4">
      {title && (
        <p className="text-[14px] font-bold mb-[16px] text-center">{title}</p>
      )}
      {children}
    </div>
  );
};

export default FilterLayout;
