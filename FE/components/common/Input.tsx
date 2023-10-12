interface InputProps extends React.HTMLProps<HTMLInputElement> {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ id, label, value, onChange, placeholder }: InputProps) => {
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
        className="border-2 border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:border-tertiary w-full"
      />
    </div>
  );
};

export default Input;
