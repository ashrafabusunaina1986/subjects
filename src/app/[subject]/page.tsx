import { FetchSubjectDetailsAction } from "@/action";
import DetatilsSubject from "@/components/view-subject";
import React, { ReactNode } from "react";

async function SubjectDetailsPage({ params }: any) {
  const s_details = await FetchSubjectDetailsAction(params?.subject);
  

  return <DetatilsSubject s={s_details[0]} />;
}

export default SubjectDetailsPage;
