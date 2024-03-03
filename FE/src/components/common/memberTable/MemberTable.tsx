"use client";

import { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../ErrorFallback";
import Tab from "../tabs/Tab";
import MemberTableHeader from "./MemberTableHeader";
import CreateMemberTableItemContainer from "@/components/common/memberTable/create/CreateMemberTableItemContainer";
import EditMemberTableItemContainer from "@/components/programEdit/EditMemberTableItemContainer";
import { Members } from "@/components/programEdit/ProgramEditForm";
import ACTIVE_STATUS from "@/constants/ACTIVE_STATUS";
import { FormType } from "@/types/form";
import { ActiveStatusWithAll, AttendStatus } from "@/types/member";

interface MemberTableProps {
  formType: FormType;
  members: Set<number> | Map<number, Members>;
  setMembers:
    | ((memberId: number) => void)
    | ((memberId: number, before: AttendStatus, after: AttendStatus) => void);
  onClickHeaderCheckBox?: (selected: boolean) => void;
  programId?: number;
  isEditable?: boolean;
}

const MemberTable = ({
  formType,
  members,
  setMembers,
  onClickHeaderCheckBox = () => {},
  programId,
  isEditable = true,
}: MemberTableProps) => {
  const [selectedActive, setSelectedActive] =
    useState<ActiveStatusWithAll>("all");

  return (
    <div className="space-y-6 pt-10">
      <Tab<ActiveStatusWithAll>
        options={Object.values(ACTIVE_STATUS.TAB_WITH_ALL)}
        selected={selectedActive}
        onItemClick={(v) => setSelectedActive(v)}
        size="lg"
        baseColor="gray"
        pointColor="teal"
        align="line"
      />
      <div className="overflow-x-scroll scrollbar-hide">
        <MemberTableHeader
          formType={formType}
          onClickCheckBox={onClickHeaderCheckBox}
        />
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          {formType === "create" ? (
            <CreateMemberTableItemContainer
              members={members as Set<number>}
              setMembers={setMembers as (memberId: number) => void}
              status={selectedActive}
            />
          ) : (
            <EditMemberTableItemContainer
              setMembers={
                setMembers as (
                  memberId: number,
                  before: AttendStatus,
                  after: AttendStatus,
                ) => void
              }
              status={selectedActive}
              programId={programId || 0}
              isEditable={isEditable}
            />
          )}
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default MemberTable;
