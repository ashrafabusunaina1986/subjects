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

    if (file && count === 5) {
      const url: Url = URL.createObjectURL(file);
      setSelectImg(url);
      setLoading(true);
    
        const res = await fetch(`/api/avatar/upload?filename=${file.name}`, {
          method: "POST",
          body: file,
        });

        if (!res.ok) console.log(await res.json());
        const b = await res.json();
        console.log(b);
        setDataForm({
          ...dataForm,
          image: file.name,
          pathname: b.pathname,
          url: b.url,
        });
      

      setLoading(false);
    }
  };
  async function handleAddSubjectAction(formData: FormData) {
    const file: File = formData.get("image") as File;
    if (file) {
      await AddSubjectAction(dataForm, "/");
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
