import Image from "next/image";
import { FallbackProps } from "react-error-boundary";
import Title from "./Title";
import Button from "./Button";

const ERROR_TITLE = "ERROR";
const RETRY_BUTTON_TEXT = "Try again";

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div className="flex h-full w-full flex-col gap-6 bg-background px-28 py-12">
      <Image
        src="/icons/error.svg"
        alt="에러 바운더리"
        width={80}
        height={80}
      />
      <Title text={ERROR_TITLE} textColor="error" />
      <p className="text-sm font-normal">{error.messaeg}</p>
      <Button
        color="error"
        size="lg"
        type="button"
        onClick={() => resetErrorBoundary()}
      >
        {RETRY_BUTTON_TEXT}
      </Button>
    </div>
  );
};
export default ErrorFallback;
