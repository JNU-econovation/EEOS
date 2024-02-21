interface InputProps extends React.HTMLProps<HTMLInputElement> {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  prefix?: string;
}

const LabeledInput = ({
  id,
  label,
  value,
  onChange = () => {},
  placeholder,
  type,
  prefix,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="truncate text-sm">
        {label}
      </label>
      <div className="flex w-full gap-1 rounded-md border-[1.5px] border-gray-300 px-3 py-2 focus:border-tertiary-10">
        {prefix && <span className="whitespace-nowrap">{prefix}</span>}
        <input
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          autoComplete="off"
          className="w-full bg-transparent focus:outline-none"
        />
      </div>
    </div>
  );
};

export default LabeledInput;
