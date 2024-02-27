"use client";

import classNames from "classnames";
import Image from "next/image";
import { ErrorBoundary } from "react-error-boundary";
import UserInputModal from "./UserInputModal";
import ErrorFallbackNoIcon from "@/components/common/ErrorFallbackNoIcon";
import useModal from "@/hooks/useModal";
import useOutsideRef from "@/hooks/useOutsideRef";

const UserInputModalContainer = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const modalRef = useOutsideRef(closeModal);

  const modalStyle = classNames(
    "z-1 fixed left-0 flex h-fit min-h-72 w-full flex-col items-center gap-6 rounded-t-3xl border-t-2 bg-background shadow-2xl transition-all duration-500",
    {
      "bottom-0": isOpen,
      "-bottom-[10rem]": !isOpen,
    },
  );

  const handleOpenModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("hi", isOpen);
    isOpen ? closeModal() : openModal();
  };

  return (
    <button
      ref={modalRef}
      className={modalStyle}
      onClick={openModal}
      type="button"
    >
      <div onClick={handleOpenModal} className="pb-1 pt-4">
        <Image
          src="/icons/line.svg"
          alt="line"
          width={38}
          height={6}
          style={{ width: 38, height: 6 }}
        />
      </div>
      <ErrorBoundary FallbackComponent={ErrorFallbackNoIcon}>
        <UserInputModal />
      </ErrorBoundary>
    </button>
  );
};
export default UserInputModalContainer;
