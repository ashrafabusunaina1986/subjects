import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function DetatilsSubject({ s }: any) {
  // console.log(s);
  return (
    <div className=" flex flex-col items-center justify-center w-11/12 px-3 py-2 relative top-60 md:to-32 lg:top-32 left-[4%]">
      <div className="flex w-full  ">
      <Link  className="text-xs  md:text-sm lg:text-sm hover:bg-slate-400 hover:text-white px-3 py-2 hover:rounded-full" href={'/'}>Subjects</Link>
      </div>
      
      <div className=" px-3 py-1 w-full grid grid-cols-1">
        <div className="w-full  flex flex-col md:flex-row lg:flex-row px-5 py-3">
          <div className="w-full flex flex-col md:flex-row lg:flex-row md:gap-10 lg:gap-10">
            <Image
              src={s?.image?.url}
              alt="alt"
              width={1400}
              height={1000}
              className="w-full md:w-2/4 h-[150px] md:h-[300px] lg:h-[300px] lg:w-2/4 rounded-md object-cover shadow shadow-purple-500"
            />
            <div className="flex flex-col mt-5 md:mt-0 lg:mt-0">
              <h1 className="text-sm md:text-xl lg:text-xl font-bold text-gray-800">
                Title : {s?.title}
              </h1>
              <div className="flex gap-8 py-5 px-0">
                <h3 className="text-xs md:text-xl lg:text-xl font-semibold text-gray-500">
                  Country: {s?.country}
                </h3>
                <h3 className="text-xs md:text-xl lg:text-xl font-semibold text-gray-500">
                  City: {s?.city}
                </h3>
              </div>
              <div>
                <h4 className="text-xs md:text-2xl lg:text-2xl font-semibold text-gray-400">
                  Region: {s?.region}
                </h4>
              </div>
              <div className="mt-5">
                <p className="text-xs md:text-sm lg:text-sm font-semibold text-gray-800">
                  {s?.description}
                </p>
              </div>
              <h6 className="text-xs font-semibold text-gray-500 mt-10">
                Date: {s?.endDate}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
