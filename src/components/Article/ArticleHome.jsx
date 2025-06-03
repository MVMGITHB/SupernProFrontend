import React from "react";
import { SideBar } from "./SideBar";
import { RightSideBar } from "./RightSideBar";
import { base_url } from "../Helper/helper";
import Link from "next/link";
export const ArticleHome = ({ data }) => {
  return (
    <div className=" mx-auto p-4 flex flex-col md:flex-row gap-6">
      <div className=" w-full md:w-1/5 order-2 md:order-1">
        <SideBar />
      </div>

      <div className=" w-full md:w-3/5 shadow-md p-4 order-1 md:order-2 h-[150vh]  overflow-y-auto scrollbar-hide">


        <h1 className="text-2xl text-gray-600  font-bold text-center mb-4">{data.title}</h1>
          <img src={`${base_url}${data.image}`} alt="8th Pay Commission" className="w-full md:w-[800] h-auto md:h-[400] rounded-md" />
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-4">
  <div>
    <h3 className="text-lg text-gray-700">
      Author: <strong> <Link
                href={`/author/${data?.author?.slug}`}
                className="text-blue-600"
              >
                {data?.author?.name}
              </Link></strong>
    </h3>
    <h3 className="text-sm text-gray-600">
      Created At: <strong>{new Date(data?.author?.createdAt).toLocaleDateString()}</strong>
    </h3>
    <h3 className="text-sm text-gray-600">
      Updated At: <strong>{new Date(data?.author?.updatedAt).toLocaleDateString()}</strong>
    </h3>
  </div>

  <div>
    <img
      src={`${base_url}${data?.author?.image}`}
      alt={data?.author?.name || 'Author'}
      className="rounded-full w-24 h-24 object-cover border-2 border-gray-900 shadow-sm"
    />
  </div>
</div>


        {data ? (
          <>
            <div
              id="artice-main"
              dangerouslySetInnerHTML={{ __html: data?.content }}
              className="article"
            />
          </>
        ) : (
          <></>
        )}
     <div>
  {data?.faqs?.length > 0 && (
    <>
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      {data.faqs.map((item) => (
        <div key={item._id} className="mb-4">
          <h3 className="font-semibold text-[20px] text-gray-900">Q: {item.ques}</h3>
          <p className="text-gray-800 text-[18px]">A: {item.ans}</p>
        </div>
      ))}
    </>
  )}

  {data?.conclusion && (
    <div className="mb-2">
      <h2 className="text-2xl font-bold">Conclusion:</h2>
      <p className="text-[20px] text-black">{data.conclusion}</p>
    </div>
  )}
</div>


      </div>

      <div className=" w-full md:w-1/5  order-3 md:order-3 ">
        <RightSideBar />
      </div>
    </div>
  );
};
