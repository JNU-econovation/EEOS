"use client";

import { ActiveStatusWithAll } from "@/types/member";
import ACTIVE_STATUS from "@/constants/ACTIVE_STATUS";
import { FormType } from "@/types/form";
import Tab from "../tabs/Tab";
import MemberTableHeader from "./MemberTableHeader";
import CreateMemberTableItemContainer from "@/components/programCreate/CreateMemberTableItemContainer";
import EditMemberTableItemContainer from "@/components/programEdit/EditMemberTableItemContainer";
import { Suspense, useState } from "react";

interface MemberTableProps {
  formType: FormType;
  members: Set<number>;
  setMembers: (members: Set<number>) => void;
}

const MemberTable = ({ formType, members, setMembers }: MemberTableProps) => {
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
              members={members}
              setMembers={setMembers}
              status={selectedActive}
            />
          ) : (
            <EditMemberTableItemContainer />
          )}
        </Suspense>
      </div>
    </div>
  );
};

export default MemberTable;
