import ROUTES from "@/constants/ROUTES";
import { useDeleteProgram } from "@/hooks/query/useProgramQuery";
import Image from "next/image";
import Link from "next/link";

const EditAndDeleteButton = ({ programId }) => {
  const { mutate: deleteProgram } = useDeleteProgram(programId);
  const handleClickDelete = () => {
    if (confirm("정말로 삭제하시겠습니까?")) {
      deleteProgram();
    }
  };
  return (
    <div className="flex items-end gap-6">
      <Link href={ROUTES.EDIT(programId)}>
        <Image
          src="/icons/pencil.svg"
          alt="프로그램 수정"
          width={22}
          height={22}
          className="h-[22px] w-[22px] hover:cursor-pointer"
        />
      </Link>
      <Image
        src="/icons/trash.svg"
        alt="프로그램 삭제"
        width={22}
        height={22}
        style={{ width: 22, height: 22 }}
        className="h-[22px] w-[22px] hover:cursor-pointer"
        onClick={handleClickDelete}
      />
    </div>
  );
};
export default EditAndDeleteButton;
