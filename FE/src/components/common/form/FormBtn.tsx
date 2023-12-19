import Button from "../Button";

interface FormButtonProps {
  submitText: string;
  formReset: () => void;
}

const FormButton = ({ submitText, formReset = () => {} }: FormButtonProps) => {
  return (
    <div className="mt-6 flex w-full justify-end gap-2">
      <Button type="submit">{submitText}</Button>
      <Button color="gray" onClick={formReset}>
        취소
      </Button>
    </div>
  );
};
export default FormButton;
