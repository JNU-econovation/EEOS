"use client";

import { ActiveStatusWithAll, AttendStatus } from "@/types/member";
import ACTIVE_STATUS from "@/constants/ACTIVE_STATUS";
import { FormType } from "@/types/form";
import Tab from "../tabs/Tab";
import MemberTableHeader from "./MemberTableHeader";
import CreateMemberTableItemContainer from "@/components/programCreate/CreateMemberTableItemContainer";
import EditMemberTableItemContainer from "@/components/programEdit/EditMemberTableItemContainer";
import { Suspense, useState } from "react";
import { Members } from "@/components/programEdit/ProgramEditForm";

interface MemberTableProps {
  formType: FormType;
  members: Set<number> | Map<number, Members>;
  setMembers:
    | ((memberId: number) => void)
    | ((memberId: number, before: AttendStatus, after: AttendStatus) => void);
  programId?: number;
}

const MemberTable = ({
  formType,
  members,
  setMembers,
  programId,
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
      <div>
        <MemberTableHeader
          formType={formType}
          checked={false}
          onClickCheckBox={() => {}}
        />
        <Suspense fallback={<div>로딩중...</div>}>
          {formType === "create" ? (
            <CreateMemberTableItemContainer
              members={members as Set<number>}
              setMembers={setMembers as (memberId: number) => void}
              status={selectedActive}
            />
          ) : (
            <EditMemberTableItemContainer
              members={members as Map<number, Members>}
              setMembers={
                setMembers as (
                  memberId: number,
                  before: AttendStatus,
                  after: AttendStatus,
                ) => void
              }
              status={selectedActive}
              programId={programId || 0}
            />
          )}
        </Suspense>
      </div>
    </div>
  );
};

export default MemberTable;
