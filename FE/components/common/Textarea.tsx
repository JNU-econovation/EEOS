interface TextareaProps extends React.HTMLProps<HTMLTextAreaElement> {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = ({
  id,
  label,
  value,
  onChange,
  placeholder,
}: TextareaProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border-2 border-gray-300 rounded-md p-2 shadow-sm focus:outline-none focus:border-tertiary w-full min-h-[16rem] resize-none"
      />
    </div>
  );
};

export default Textarea;
