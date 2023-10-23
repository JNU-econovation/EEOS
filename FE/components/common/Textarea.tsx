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
        className="min-h-[16rem] w-full resize-none rounded-md border-2 border-gray-300 p-2 shadow-sm focus:border-tertiary focus:outline-none"
      />
    </div>
  );
};

export default Textarea;
