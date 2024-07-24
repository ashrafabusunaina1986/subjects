import { fCs } from "@/app/utils";
import Image from "next/image";
import React from "react";

function Cf({
  loading,
  selectImg,
  setSelectImg,
  data,
  setData,
  handleChangeImg,
  handleAction,
  btnDisabled,
}: any) {
  const ie = (item: any) => {
    let content = null;
    switch (item.ct) {
      case "input":
        if (item.t === "text") {
          content = (
            <div className="flex flex-col gap-0 p-3 mt-4 font-bold text-sm">
              <label htmlFor={item.name}>{item.label}</label>
              <input
                value={data[item.name]}
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.value })
                }
                className="bg-gray-300 px-3 py-2 border-[1px] border-gray-950 rounded-md"
                type={item.t}
                id={item.name}
                name={item.name}
                placeholder={item.placeholder}
              />
            </div>
          );
        }
        if (item.t === "file") {
          content = (
            <div className="flex flex-col gap-0 p-3 mt-4 font-bold text-sm">
              <label
                htmlFor={item.name}
                className="border-2 border-gray-500 border-dashed aspect-video items-center justify-center flex  w-full h-[150px] rounded-xl"
              >
                <input
                  onChange={handleChangeImg}
                  type={item.t}
                  id={item.name}
                  name={item.name}
                  hidden
                />
                {selectImg ? (
                  <Image
                    src={selectImg}
                    width={1500}
                    height={1500}
                    alt=""
                    className="w-full h-full rounded-xl"
                  />
                ) : (
                  <p>{item.label}</p>
                )}
              </label>
            </div>
          );
        }
        break;
      case "textarea":
        content = (
          <div className="flex flex-col gap-0 p-3 mt-4 font-bold text-sm">
            <label htmlFor={item.name}>{item.label}</label>
            <textarea
              value={data[item.name]}
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
              className="bg-gray-300 px-3 py-2 border-[1px] border-gray-950 rounded-md min-h-[150px] resize-none"
              id={item.name}
              name={item.name}
              placeholder={item.placeholder}
            ></textarea>
          </div>
        );
        break;

        break;
      default:
        content = (
          <div className="flex flex-col gap-0 p-3 mt-4 font-bold text-sm">
            <label htmlFor={item.name}>{item.label}</label>
            <input
              value={data[item.name]}
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
              className="bg-gray-300 px-3 py-2 border-[1px] border-gray-950 rounded-md"
              type={item.t}
              id={item.name}
              name={item.name}
              placeholder={item.placeholder}
            />
          </div>
        );
        break;
    }
    return content;
  };

  return (
    <form action={handleAction}>
      {fCs.map((item) => ie(item))}
      <div className="flex flex-row gap-0 p-3 mt-4 font-bold text-sm w-full">
        <button
          disabled={!btnDisabled}
          className={
            loading
              ? "flex bg-black text-white items-center disabled:opacity-50 justify-center px-4 py-3 rounded-3xl w-10/12"
              : "flex bg-black text-white items-center disabled:opacity-50 justify-center px-4 py-3 rounded-3xl w-full"
          }
        >
          Add
        </button>
        {loading ? (
          <div className="mx-auto w-5 h-5 border-4 border-purple-500 rounded-full animate-spin border-t-transparent"></div>
        ) : null}
      </div>
    </form>
  );
}

export default Cf;
