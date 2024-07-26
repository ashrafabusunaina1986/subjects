"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LuMoreVertical } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import { delSubjecAction } from "@/action";

export default function ViewSubjects({ subjects }: any) {
  const [del, setDel] = useState({
    f: false,
    i: "",
    url: "",
  });

  async function handleDelSubject() {
    const d = await delSubjecAction(del.url, del.i, "/");
    console.log(d);
  }
  return (
    <div className="w-[100%] flex flex-row items-center justify-center px-1 py-2 ">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-2 ">
        {subjects && subjects.length > 0 ? (
          subjects.map((subject: any) => (
            <div
              key={subject?._id}
              className="w-[200px] h-[150px]  mx-auto relative cursor-pointer hover:scale-[1.05] hover:shadow-lg hover:shadow-blue-600 transition duration-300"
            >
              <LuMoreVertical 
                className=" absolute top-0 -left-4 "
                onClick={() =>
                  setDel({
                    ...del,
                    f: !del?.f,
                    i: subject?._id,
                    url: subject?.image?.url,
                  })
                }
              />
              <form action={handleDelSubject}>
                <button
                  className={
                    del.f && del.i === subject?._id
                      ? "flex justify-around rounded-md items-center bg-red-200 text-red-600 w-[100px] absolute top-2 left-14 z-50"
                      : " hidden"
                  }
                >
                  Delete
                  <MdDeleteOutline />
                </button>
              </form>
              <Link
                href={`/${subject?._id}`}
                className="w-full h-full  mx-auto relative cursor-pointer hover:scale-[1.05] hover:shadow-lg hover:shadow-blue-600 transition duration-300"
              >
                <Image
                  src={subject?.image?.url}
                  width={800}
                  height={800}
                  alt={subject?.title}
                  className="w-full h-full rounded-lg"
                />
                <div className="w-full border-2 border-gray-700 flex items-center justify-center absolute bottom-1 bg-slate-100  rounded-lg">
                  <h1 className="text-xs text-gray-800 font-abold ">
                    {subject?.title}
                  </h1>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="md:absolute md:left-[20%] lg:absolute lg:left-[20%] md:w-[500px] lg:w-[700px] flex items-center justify-center">
            <h1 className="text-2xl font-extrabold text-gray-400">
              Subjects not found
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}
