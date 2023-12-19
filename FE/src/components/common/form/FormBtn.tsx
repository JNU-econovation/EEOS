import Button from "../Button";

interface FormBtnProps {
  submitText: string;
  formReset: () => void;
}

const FormBtn = ({ submitText, formReset = () => {} }: FormBtnProps) => {
  return (
    <div className="mt-6 flex w-full justify-end gap-2">
      <Button type="submit">{submitText}</Button>
      <Button color="gray" onClick={formReset}>
        취소
      </Button>
    </div>
  );
};
export default FormBtn;
