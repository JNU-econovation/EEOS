import Image from "next/image";

const LogoAndIntro = () => {
  return (
    <div className="flex flex-col">
      <Image
        src="/black_logo.svg"
        alt="eeos 블랙 버전 로고"
        width={81}
        height={36}
      />
      <p className="text-xs font-light">에코노베이션 행사 관리 시스템</p>
    </div>
  );
};
export default LogoAndIntro;
