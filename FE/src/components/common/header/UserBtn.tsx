"use client";

import useModal from "@/hooks/useModal";
import useOutsideRef from "@/hooks/useOutsideRef";
import Image from "next/image";
import UserActiveModal from "./Modal/UserActiveModal";

const UserBtn = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const modalRef = useOutsideRef(closeModal);

  const handleClick = () => {
    isOpen ? closeModal() : openModal();
  };

  return (
    <button
      ref={modalRef}
      className="relative cursor-pointer"
      onClick={handleClick}
    >
      <Image
        src="/icons/user.svg"
        alt="사용자 정보 확인"
        width={28}
        height={28}
        className="h-[28px] w-[28px]"
      />
      {isOpen && <UserActiveModal />}
    </button>
  );
};

export default UserBtn;
