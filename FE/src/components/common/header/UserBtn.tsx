"use client";

import useModal from "@/hooks/useModal";
import useOutsideRef from "@/hooks/useOutsideRef";
import Image from "next/image";
import UserInfoModal from "./UserInfoModal";
import { Suspense } from "react";
import UserInfoModalSkeleton from "./UserInfoModal.loader";

const UserBtn = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const modalRef = useOutsideRef(closeModal);

  return (
    <div
      ref={modalRef}
      className="relative cursor-pointer"
      onClick={() => openModal()}
    >
      <Image
        src="/icons/user.svg"
        alt="사용자 정보 확인"
        width={28}
        height={28}
      />
      {isOpen && (
        <Suspense fallback={<UserInfoModalSkeleton />}>
          <UserInfoModal />
        </Suspense>
      )}
    </div>
  );
};

export default UserBtn;
