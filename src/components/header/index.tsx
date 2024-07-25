"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { Button } from "../ui/button";
import { BtnContext } from "@/context";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const { setVal } = useContext(BtnContext);
  return (
    <div className="left-[4%] fixed mt-20 sm:mt-0 lg:mt-0 md:mt-0 top-4 sm:shadow-md sm:shadow-purple-600  sm:rounded-b-lg sm:fixed  sm:px-8 sm:py-5  sm:w-11/12 md:shadow-md md:shadow-purple-600  md:rounded-b-lg md:fixed  md:px-8 md:py-5  md:w-11/12 lg:shadow-md lg:shadow-purple-600  lg:rounded-b-lg lg:fixed  lg:px-8 lg:py-5  lg:w-11/12 w-full flex flex-col items-center justify-center gap-10 sm:flex-row md:flex-row lg:flex-row sm:justify-between md:justify-between lg:justify-between bg-white z-40">
      <Image
        src="next.svg"
        alt="Nextjs"
        width={100}
        height={100}
        className="w-[250px] h-[50px] object-cover"
      />
      <Button
        onClick={() => {
          setVal({ stateDialog: true });
          router.push("/");
        }}
        className=" px-3 py-1 shadow-md shadow-purple-300 hover:shadow-purple-600"
      >
        Add new subject
      </Button>
    </div>
  );
}
