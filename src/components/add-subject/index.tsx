"use client";
import React, { useContext } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { BtnContext } from "@/context";
import Cf from "../cf";
import { initialFcs, v } from "@/app/utils";

function AddSubject({
  selectImg,
  setSelectImg,
  dataForm,
  setDataForm,
  handleChangeImg,
  loading,
  setLoading,
  handleAddSubjectAction,
}: any) {
  const { val, setVal } = useContext(BtnContext);

  return (
    <Dialog
      open={val.stateDialog}
      onOpenChange={() => {
        setVal({ stateDialog: false });
        setDataForm(initialFcs);
        setSelectImg("");
      }}
    >
      <DialogContent className=" overflow-y-auto h-[500px]">
        <DialogHeader className="">
          <DialogTitle>Add Subject</DialogTitle>
        </DialogHeader>
        <Cf
          loading={loading}
          handleAction={handleAddSubjectAction}
          data={dataForm}
          setData={setDataForm}
          setSelectImg={setSelectImg}
          selectImg={selectImg}
          handleChangeImg={handleChangeImg}
          btnDisabled={v(dataForm)}
        />
      </DialogContent>
    </Dialog>
  );
}

export default AddSubject;
