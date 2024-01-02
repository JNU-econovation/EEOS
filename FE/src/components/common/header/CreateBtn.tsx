import ROUTES from "@/constants/ROUTES";
import Link from "next/link";
import Image from "next/image";
import Button from "../Button";

const CREATE = "행사 추가";

const CreateBtn = () => {
  return (
    <Link href={ROUTES.CREATE}>
      <Button color="primary" size="md">
        <Image src="/icons/plus.svg" alt="행사 추가" width={20} height={20} />
        {CREATE}
      </Button>
    </Link>
  );
};
export default CreateBtn;
