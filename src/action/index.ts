"use server";

import db from "@/db";
import Subject from "@/models/subject";
import { del, put, PutBlobResult } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import Joi from "joi";

const validSubject = Joi.object({
  title: Joi.string().regex(
    /^(^(([\u0621-\u064A]{3,5})?\s?[\u0621-\u064A]{3,10}\s*)$)|(^(([a-zA-Z]{2,8})?\s?[a-zA-Z]{2,10}\s*)$)$/
  ),
  description: Joi.string().min(250).max(1000),
  country: Joi.string().regex(
    /^(^(([\u0621-\u064A]{3,10})\s*)$)|(^(([a-zA-Z]{2,20})\s*)$)$/
  ),
  city: Joi.string().regex(
    /^(^(([\u0621-\u064A]{3,10})\s*)$)|(^(([a-zA-Z]{2,20})\s*)$)$/
  ),
  region: Joi.string().regex(
    /^((^(([\u0621-\u064A]{3,10}).\s*)$)|(^(([a-zA-Z]{2,20}).\s*)$))$/
  ),
});
//add subject
export async function AddSubjectAction(
  fd: FormData,
  dataForm: any,
  revalidUrl: string
) {
  // const file: File = fd.get("image") as File;
  // let res = await fetch(
  //   `https://subjects-ss.vercel.app/api/avatar/upload?filename=${file.name}`,
  //   {
  //     method: "POST",
  //     body: file,
  //   }
  // );
  // const b = (await res.json()) as PutBlobResult;
  const { error } = validSubject.validate({
    title: dataForm.title,
    description: dataForm.description,
    country: dataForm.country,
    city: dataForm.city,
    region: dataForm.region,
  });

  if (error) {
    if (error.details[0].path[0].toString() === "title") {
      return {
        m: "please enter title contain one word 3-5 letters or two words contains 3-10 letters , english 2-8 or 2-8, 2-10 if two words",
        success: false,
      };
    }
    if (error.details[0].path[0].toString() === "country") {
      return {
        m: "please enter country contain one word 3-10 , english 2-20 ",
        success: false,
      };
    }
    if (error.details[0].path[0].toString() === "city") {
      return {
        m: "please enter city contain one word 3-10 , english 2-20 ",
        success: false,
      };
    }
    if (error.details[0].path[0].toString() === "region") {
      return {
        m: "please enter region contain one word 3-10 , english 2-20 and any character",
        success: false,
      };
    }
    return {
      m: error.details[0].message,
      success: false,
    };
  }
  db();
  const s = {
    title: dataForm.title,
    description: dataForm.description,
    country: dataForm.country,
    city: dataForm.city,
    region: dataForm.region,
    image: {
      filename: dataForm.pathname,
      url: dataForm.url,
    },
    endDate: new Date().toDateString(),
  };
  await Subject.create(s);

  revalidatePath(revalidUrl);
  return { success: true };
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
