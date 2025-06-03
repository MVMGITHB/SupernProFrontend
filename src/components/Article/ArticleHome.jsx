import React from "react";
import { SideBar } from "./SideBar";
import { RightSideBar } from "./RightSideBar";
import { base_url } from "../Helper/helper";
export const ArticleHome = ({ data }) => {
  return (
    <div className=" mx-auto p-4 flex flex-col md:flex-row gap-6">
      <div className=" w-full md:w-1/5 order-2 md:order-1 sticky top-0 ">
        <SideBar />
      </div>

      <div className=" w-full md:w-3/5 shadow-md p-4 order-1 md:order-2   overflow-y-auto scrollbar-hide">


        <h1 className="text-2xl text-gray-600  font-bold text-center mb-4">{data.title}</h1>
          <img src={`${base_url}${data.image}`} alt="8th Pay Commission" className="w-full h-auto rounded-md" />

        {data ? (
          <>
            <div
              id="artice-main"
              dangerouslySetInnerHTML={{ __html: data?.content }}
            />
          </>
        ) : (
          <></>
        )}
      </div>

      <div className=" w-full md:w-1/5  order-3 md:order-3 sticky top-8">
        <RightSideBar />
      </div>
    </div>
  );
};
