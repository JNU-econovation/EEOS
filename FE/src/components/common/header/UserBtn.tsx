"use client";

import useModal from "@/hooks/useModal";
import useOutsideRef from "@/hooks/useOutsideRef";
import Image from "next/image";
import UserActiveModal from "./Modal/UserActiveModal";
import { Suspense } from "react";
import UserActiveModalSkeleton from "./Modal/UserActiveModal.loader";

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
        className="h-[28px] w-[28px]"
      />
      {isOpen && (
        <Suspense fallback={<UserActiveModalSkeleton />}>
          <UserActiveModal />
        </Suspense>
      )}
    </div>
  );
};

export default UserBtn;
