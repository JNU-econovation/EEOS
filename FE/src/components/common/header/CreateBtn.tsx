import Image from "next/image";
import Link from "../Link";
import ROUTES from "@/constants/ROUTES";

const CREATE = "행사 추가";

const CreateBtn = () => {
  return (
    <Link href={ROUTES.CREATE} color="primary" size="md">
      <Image
        src="/icons/plus.svg"
        alt="행사 추가"
        width={20}
        height={20}
        className="hidden sm:block sm:h-[20px] sm:w-[20px]"
      />
      {CREATE}
    </Link>
  );
};
export default CreateBtn;
