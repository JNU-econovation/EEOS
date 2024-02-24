import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import Image from "next/image";
import Button from "./Button";
import Title from "./Title";

const ERROR_TITLE = "ERROR";
const RETRY_BUTTON_TEXT = "Try again";

type FallbackProps = {
  error: any;
  resetErrorBoundary?: (...args: any[]) => void;
  retryButton?: boolean;
};

const ErrorFallback = ({
  error,
  resetErrorBoundary = () => {},
  retryButton = true,
}: FallbackProps) => {
  const { reset } = useQueryErrorResetBoundary();
  const handleReset = () => {
    reset();
    resetErrorBoundary();
  };
  return (
    <div className="flex h-fit w-full min-w-[15rem] flex-col items-center justify-center gap-4 bg-background py-6">
      <Image
        src="/icons/error.svg"
        alt="에러 바운더리"
        width={60}
        height={60}
      />
      <Title text={ERROR_TITLE} textColor="error" />
      {error?.message && <p className="text-sm font-normal">{error.message}</p>}
      {retryButton && (
        <Button color="error" size="lg" type="button" onClick={handleReset}>
          {RETRY_BUTTON_TEXT}
        </Button>
      )}
    </div>
  );
};
export default ErrorFallback;
