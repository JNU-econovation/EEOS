"use client";

import useModal from "@/hooks/useModal";
import useOutsideRef from "@/hooks/useOutsideRef";
import classNames from "classnames";
import Image from "next/image";
import { ErrorBoundary } from "react-error-boundary";
import UserAttendModal from "./UserAttendModal";
import ErrorFallbackNoIcon from "@/components/common/ErrorFallbackNoIcon";

interface UserAttendModalProps {
  programId: number;
}

const UserAttendModalContainer = ({ programId }: UserAttendModalProps) => {
  const { isOpen, openModal, closeModal } = useModal();
  const modalRef = useOutsideRef(closeModal);

  const modalStyle = classNames(
    "z-1 fixed left-0 flex h-60 w-full flex-col items-center gap-5 rounded-t-3xl border-t-2 bg-background px-6 pt-2 shadow-2xl transition-all duration-500",
    {
      "bottom-0": isOpen,
      "-bottom-[9rem]": !isOpen,
    },
  );

  return (
    <div ref={modalRef} className={modalStyle} onClick={() => openModal()}>
      <Image
        src="/icons/line.svg"
        alt="line"
        width={38}
        height={6}
        style={{ width: 38, height: 6 }}
      />
      <ErrorBoundary FallbackComponent={ErrorFallbackNoIcon}>
        <UserAttendModal programId={programId} />
      </ErrorBoundary>
    </div>
  );
};
export default UserAttendModalContainer;
