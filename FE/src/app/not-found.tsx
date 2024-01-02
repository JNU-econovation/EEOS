import { ERROR } from "@/constants/ERROR";
import ROUTES from "@/constants/ROUTES";
import Image from "next/image";
import Link from "@/components/common/Link";

const NotFound = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-16">
      <h1 className="text-5xl font-bold text-black">{ERROR.TITLE}</h1>
      <div className="mb-10 flex flex-col items-center gap-2">
        {ERROR.DESCRIPTION.map((description) => (
          <span className="text-lg font-normal">{description}</span>
        ))}
      </div>
      <Image
        src={ERROR.IMAGE_URL}
        alt="error"
        width={270}
        height={210.7}
        className="h-[210.7px] w-[270px]"
      />
      <Link
        href={ROUTES.MAIN}
        className="border-b-[3px] border-stroke-30 text-lg font-extrabold"
      >
        {ERROR.BUTTON_TEXT}
      </Link>
    </div>
  );
};
export default NotFound;
