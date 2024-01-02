import ROUTES from "@/constants/ROUTES";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={ROUTES.MAIN}>
      <Image src="/eeos_logo.svg" alt="logo" width={80} height={36} />
    </Link>
  );
};

export default Logo;
