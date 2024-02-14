import { TeamBuildingFormData } from "@/hooks/useTeamBuildingFormData";
import { FormType } from "@/types/form";
import { PropsWithChildren } from "react";
import { useRouter } from "next/navigation";
import FormBtn from "../FormBtn";
import FORM_INFO from "@/constants/FORM_INFO";
import TeamBuildingTitle from "./TeamBuildingTitle";
import MarkdownEditor from "../../markdown/MarkdownEditor";
import TeamBuildingMinTeamSize from "./TeamBuildingMinTeamSize";
import TeamBuildingMaxTeamSize from "./TeamBuildingMaxTeamSize";

interface TeamBuildingFormProps extends TeamBuildingFormData {
  formType: FormType;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const TeamBuildingForm = ({
  children,
  formType,
  title,
  setTitle,
  content,
  setContent,
  minTeamSize,
  setMinTeamSize,
  maxTeamSize,
  setMaxTeamSize,
  reset,
  onSubmit,
}: PropsWithChildren<TeamBuildingFormProps>) => {
  const router = useRouter();

  const handleReset = () => {
    reset();
    router.back();
  };

  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      <div className="grid grid-cols-[1fr_3.5rem_3.5rem] gap-4 sm:grid-cols-[1fr_5rem_5rem]">
        <TeamBuildingTitle title={title} setTitle={setTitle} />
        <TeamBuildingMinTeamSize
          minTeamSize={minTeamSize}
          setMinTeamSize={setMinTeamSize}
        />
        <TeamBuildingMaxTeamSize
          maxTeamSize={maxTeamSize}
          setMaxTeamSize={setMaxTeamSize}
        />
      </div>
      <MarkdownEditor
        id={FORM_INFO.TEAM_BUILDING.CONTENT.id}
        label={FORM_INFO.TEAM_BUILDING.CONTENT.label}
        placeholder={FORM_INFO.TEAM_BUILDING.CONTENT.placeholder}
        value={content}
        onChange={(v) => setContent(v)}
      />
      {children}
      <FormBtn
        submitText={FORM_INFO.SUBMIT_TEXT[formType]}
        formReset={handleReset}
      />
    </form>
  );
};

export default TeamBuildingForm;
