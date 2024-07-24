"use client";
import React, { useContext, useState } from "react";
import { initialFcs } from "@/app/utils";
import { Url } from "next/dist/shared/lib/router/router";
import AddSubject from "../add-subject";
import { AddSubjectAction } from "@/action";
import { BtnContext } from "@/context";
import { useRouter } from "next/navigation";
import { PutBlobResult } from "@vercel/blob";

function Subject() {
  const router = useRouter();
  const [dataForm, setDataForm] = useState(initialFcs);
  const [selectImg, setSelectImg] = useState<Url>("");
  const [loading, setLoading] = useState(false);
  const { val, setVal } = useContext(BtnContext);

  const handleChangeImg = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    let count = 0;
    Object.values(dataForm).map((i) => i.trim() !== "" && (count += 1));

    if (file) {
      const url: Url = URL.createObjectURL(file);
      setSelectImg(url);
    }
  };

  async function handleAddSubjectAction(formData: FormData) {
    const file: File = formData.get("image") as File;
    if (file) {
      let res=await fetch(`/api/avatar/upload?filename=${file.name}`,{
        method:'POST',
        body:file
      })
      const b=(await res.json())as PutBlobResult
      const b1 = await AddSubjectAction(b, dataForm, "/");
      console.log(b1);

      setDataForm(initialFcs);
      setSelectImg("");
      setVal({ stateDialog: false });
      router.push("/");
    }
  }
  return (
    <AddSubject
      loading={loading}
      handleAddSubjectAction={handleAddSubjectAction}
      setLoading={setLoading}
      handleChangeImg={handleChangeImg}
      dataForm={dataForm}
      setDataForm={setDataForm}
      selectImg={selectImg}
      setSelectImg={setSelectImg}
    />
  );
}

export default Subject;
