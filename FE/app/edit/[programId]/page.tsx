"use client";

import Title from "@/components/common/Title";
import EditMemberList from "@/components/edit/EditMemberList.component";
import ProgramEditForm from "@/components/edit/ProgramEditForm";
import SubLayout from "@/components/layout/SubLayout";
import { useState } from "react";

interface EditPageProps {
  params: {
    programId: string;
  };
}

const EditPage = ({ params }: EditPageProps) => {
  const { programId } = params;
  return (
    <SubLayout right="none">
      <Title>행사 정보 수정</Title>
      <ProgramEditForm programId={programId} />
      <EditMemberList programId={programId} />
    </SubLayout>
  );
};

export default EditPage;
