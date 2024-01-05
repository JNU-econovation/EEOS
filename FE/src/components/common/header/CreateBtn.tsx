import ROUTES from "@/constants/ROUTES";
import Image from "next/image";
import Link from "../Link";

const CREATE = "행사 추가";

const CreateBtn = () => {
  return (
    <Link href={ROUTES.CREATE} color="primary" size="md">
      <Image
        src="/icons/plus.svg"
        alt="행사 추가"
        width={20}
        height={20}
        className="h-[20px] w-[20px]"
      />
      {CREATE}
    </Link>
  );
};
export default CreateBtn;
