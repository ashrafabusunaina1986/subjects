import { FetchSubjectsAction } from "@/action";
import Subject from "@/components/subject";
import ViewSubjects from "@/components/view-subjects";
import React from "react";

export default async function Home() {
  const subjects = await FetchSubjectsAction();
  console.log(subjects);
  return (
    <div className="w-11/12 flex flex-col items-center justify-center mx-auto py-32 px-0">
      <Subject />
      <ViewSubjects subjects={subjects} />
    </div>
  );
}
