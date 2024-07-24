"use server";

import db from "@/db";
import Subject from "@/models/subject";
import { del } from "@vercel/blob";
import { revalidatePath } from "next/cache";

//add subject
export async function AddSubjectAction(fd:FormData, dataForm: any, revalidUrl: string) {
  const file:File=fd.get('image') as File
  const res = await fetch(`https://subjects-s.vercel.app/api/avatar/upload?filename=${file.name}`, {
    method: "POST",
    body: file,
  });

  if (!res.ok) console.log(await res.json());
  const b = await res.json();
  
  db();
  // const s = {
  //   title: dataForm.title,
  //   description: dataForm.description,
  //   country: dataForm.country,
  //   city: dataForm.city,
  //   region: dataForm.region,
  //   image: {
  //     filename: dataForm.pathname,
  //     url: dataForm.url,
  //   },
  //   endDate: new Date().toDateString(),
  // };
  // await Subject.create(s);

  revalidatePath(revalidUrl);
  return { success: true,b };
}
//fetch subjects
export async function FetchSubjectsAction() {
  db();
  return await Subject.find({});
}
//fetch subject details
export async function FetchSubjectDetailsAction(id: string) {
  db();
  return await Subject.find({ _id: id });
}

export async function delSubjecAction(url: string, id: string, p: string) {
  await del(url);
  db();
  await Subject.deleteOne({ _id: id });
  revalidatePath(p);
  return;
}
