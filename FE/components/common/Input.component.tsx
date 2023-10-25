interface InputProps extends React.HTMLProps<HTMLInputElement> {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  id,
  label,
  value,
  onChange,
  placeholder,
  type,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <input
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        autoComplete="off"
        className="w-full rounded-md border-2 border-gray-300 px-3 py-2 shadow-sm focus:border-tertiary focus:outline-none"
      />
    </div>
  );
};

export default Input;
