import Image from "next/image";
import Link from "@/components/common/Link";
import { NOT_FOUND } from "@/constants/NOT_FOUND";
import ROUTES from "@/constants/ROUTES";

const NotFound = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center gap-32">
      <Image
        src={NOT_FOUND.IMAGE_URL}
        alt="not-found"
        width={270}
        height={375}
      />
      <div className="flex flex-col items-center justify-center gap-24">
        <h1 className="text-5xl font-bold text-black">{NOT_FOUND.TITLE}</h1>
        <div className="mb-10 flex flex-col items-center justify-center gap-2">
          {NOT_FOUND.DESCRIPTION.map((description) => (
            <p className="text-lg font-normal">{description}</p>
          ))}
        </div>
        <Link
          href={ROUTES.MAIN}
          className="w-fit border-b-[3px] border-stroke-30 text-lg font-extrabold"
        >
          <p>{NOT_FOUND.BUTTON_TEXT}</p>
        </Link>
      </div>
    </div>
  );
};
export default NotFound;
