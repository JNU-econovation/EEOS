"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "../common/Button.component";
import ROUTES from "@/src/constants/ROUTES";

// TODO: 사용자 정보 확인 모달 추가
const Header = () => {
  const router = useRouter();
  const openUserModal = () => {};

  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-between rounded-b-xl bg-background px-32 py-5 shadow-sm">
      <Image
        src="/eeos_logo.svg"
        alt="logo"
        width={80}
        height={36}
        onClick={() => router.push(ROUTES.HOME)}
      />
      <div className="flex items-center gap-8">
        <Image
          src="/icons/user.svg"
          alt="사용자 정보 확인"
          width={28}
          height={28}
          onClick={openUserModal}
        />
        <Button
          color="primary"
          sizeType="base"
          leftIcon={true}
          children="행사 추가"
          onClick={() => router.push(ROUTES.CREATE)}
        />
      </div>
    </header>
  );
};

export default Header;
