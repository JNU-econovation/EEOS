"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import ROUTES from "@/constants/ROUTES";

const INIT_CATEGORY = "all";
const INIT_STATUS = "active";
const INIT_PAGE = "1";

const Logo = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname === ROUTES.MAIN) {
      window.location.href = `${ROUTES.MAIN}?category=${INIT_CATEGORY}&status=${INIT_STATUS}&page=${INIT_PAGE}`;
      return;
    }
    router.push(ROUTES.MAIN);
  };

  return (
    <button type="button" onClick={handleClick}>
      <Image
        src="/eeos_logo.svg"
        alt="logo"
        width={80}
        height={36}
        className="h-[36px] w-[80px]"
        priority
      />
    </button>
  );
};

export default Logo;
