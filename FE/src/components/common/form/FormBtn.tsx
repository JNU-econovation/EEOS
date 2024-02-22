import Button from "../Button";

interface FormBtnProps {
  submitText: string;
  formReset: () => void;
  size?: "sm" | "md" | "lg";
}

const FormBtn = ({
  submitText,
  size = "md",
  formReset = () => {},
}: FormBtnProps) => {
  return (
    <div className="mt-6 flex w-full justify-end gap-2">
      <Button type="submit" size={size}>
        {submitText}
      </Button>
      <Button color="gray" onClick={formReset} size={size}>
        취소
      </Button>
    </div>
  );
};
export default FormBtn;
