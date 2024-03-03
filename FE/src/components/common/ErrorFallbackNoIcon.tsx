import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import Button from "./Button";
import Title from "./Title";

const ERROR_TITLE = "ERROR";
const RETRY_BUTTON_TEXT = "Try again";

type FallbackProps = {
  error: any;
  resetErrorBoundary?: (...args: any[]) => void;
};

const ErrorFallbackNoIcon = ({
  error,
  resetErrorBoundary = () => {},
}: FallbackProps) => {
  const { reset } = useQueryErrorResetBoundary();
  const handleReset = () => {
    reset();
    resetErrorBoundary();
  };
  return (
    <div className="flex h-fit w-full min-w-[15rem] flex-col items-center justify-center gap-5 bg-background py-6">
      <Title text={ERROR_TITLE} textColor="error" />
      {error?.message && <p className="text-sm font-normal">{error.message}</p>}
      <Button color="error" size="lg" type="button" onClick={handleReset}>
        {RETRY_BUTTON_TEXT}
      </Button>
    </div>
  );
};
export default ErrorFallbackNoIcon;
