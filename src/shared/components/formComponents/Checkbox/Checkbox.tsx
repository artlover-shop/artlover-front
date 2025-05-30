interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  return (
    <div>
      <label className="group inline-flex items-center cursor-pointer space-x-2">
        <input
          type="checkbox"
          checked={checked}
          onChange={e => onChange(e.target.checked)}
          className="hidden peer"
        />
        <div className="w-5 h-5 mr-[16px] rounded border border-dark peer-checked:bg-orange flex items-center justify-center xl:group-hover:border-orange group-focus-visible:border-orange transition duration-300 ease-in-out">
          <svg
            className="w-3 h-3 text-white hidden peer-checked:block"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <span className="text-[14px] font-light color-black xl:group-hover:text-orange group-focus-visible:text-orange transition duration-300 ease-in-out">
          {label}
        </span>
      </label>
    </div>
  );
};

export default Checkbox;
