'use client'
import React ,{useState}from "react";
import { SideBar } from "./SideBar";
import { RightSideBar } from "./RightSideBar";
import { base_url } from "../Helper/helper";

import { usePathname } from 'next/navigation';
import Link from "next/link";
import AnimatedLink from "./AnimatedLink";
export const ArticleHome = ({ data }) => {

const pathname = usePathname();
// console.log("pathname",data)
  const [showFull, setShowFull] = useState(false);

  if (!data?.content) return null;

  // Split HTML content by first </p>
  // const splitIndex = data.content.indexOf("</p>") + 4;
  // const firstPart = data.content.slice(0, splitIndex);
  // const remainingPart = data.content.slice(splitIndex);
function splitAfterThirdParagraph(content) {
  let splitIndex = -1;
  let count = 0;
  let searchIndex = 0;

  while (count < 3) {
    const index = content.indexOf("</p>", searchIndex);
    if (index === -1) break; // less than 3 paragraphs
    splitIndex = index + 4; // move past </p>
    searchIndex = splitIndex;
    count++;
  }

  const firstPart = content.slice(0, splitIndex);
  const remainingPart = content.slice(splitIndex);

  return { firstPart, remainingPart };
}

// Usage
const { firstPart, remainingPart } = splitAfterThirdParagraph(data.content);

  return (
    <div className=" mx-auto p-4 flex flex-col md:flex-row gap-6">
      <div className=" w-full md:w-1/5 order-2 md:order-1">
        <SideBar pathname={pathname} data={data} />
      </div>

      <div className=" w-full md:w-3/5 shadow-md p-4 order-1 md:order-2   overflow-y-auto scrollbar-hide">
        <h1 className="text-2xl text-gray-600  font-bold text-center mb-4">
          {data.title}
        </h1>
        <img
          src={`${base_url}${data.image}`}
          alt="8th Pay Commission"
          className="w-full md:w-[800] h-auto md:h-[400] rounded-md mb-4"
        />
         

         {
          data?.Ads[2]?(<>
                <AnimatedLink
                    text={data?.Ads[2].text1[0]}
                    link={data?.Ads[2].link1}
                    apply={data?.Ads[2].text2}
                  />
          
          </>):(
            <>
              {pathname === '/automobile/fastag-annual-pass' ? (
                  <AnimatedLink
                    text={"Get 40% Higher  Price For Your Old Car With This Simple Hack"}
                    link="https://www.cars24.com/sell-marketing/?utm_source=affiliate&utm_medium=email_ob&utm_campaign=mv2341&utm_term=super01"
                    apply={"Get Price"}
                  />
                ) : (
                  <AnimatedLink text={"Get , Free Gift Voucher, Free Lounge Access, Benefits Of 1,21,799"}  link="https://spectrum.gotrackier.com/click?campaign_id=1201&pub_id=945&source=%7B2%7D"  apply={"Apply Now"}/>
                )}
            
            </>
          )
         }




        

        

        {/* {data ? (
          <>
            <div
              id="artice-main"
              dangerouslySetInnerHTML={{ __html: data?.content }}
              className="article"
            />
          </>
        ) : (
          <></>
        )} */}

      <div className="article ">
      <div dangerouslySetInnerHTML={{ __html: firstPart }} />
      
      {!showFull && (

        <div className="w-[200px] mx-auto">
          <button
          onClick={() => setShowFull(true)}
          className="mt-4 mb-4 cursor-pointer text-blue-600  text-2xl text-center font-medium underline"
        >
          Read More
        </button>
        </div>
        
      )}

      {showFull && (<>

      <div dangerouslySetInnerHTML={{ __html: remainingPart }} />

      
      
       <div>

       
          {data?.faqs?.length > 0 && (
            <>
              <h2 className="text-2xl text-center font-bold mb-4">
                Frequently Asked Questions
              </h2>
              {data.faqs.map((item) => (
                <div key={item._id} className="mb-4">
                  <h3 className="font-semibold text-[20px] text-gray-900">
                    Q: {item.ques}
                  </h3>
                  <p className="text-gray-800 text-[18px]">A: {item.ans}</p>
                </div>
              ))}
            </>
          )}

          {data?.conclusion && (
            <div className="mb-2 pt-4">
              <h2 className="text-2xl font-bold text-center ">Conclusion:</h2>
              <p className="text-[20px] text-black">{data.conclusion}</p>
            </div>
          )}
        </div>
      </>
        

        
      )}
    </div>

     {
          data?.Ads[3]?(<>
                <AnimatedLink
                    text={data?.Ads[3].text1[0]}
                    link={data?.Ads[3].link1}
                    apply={data?.Ads[3].text2}
                  />
          
          </>):(
            <>
              {pathname === '/automobile/fastag-annual-pass' ? (
                  <AnimatedLink
                    text={"Get 40% Higher  Price For Your Old Car With This Simple Hack"}
                    link="https://www.cars24.com/sell-marketing/?utm_source=affiliate&utm_medium=email_ob&utm_campaign=mv2341&utm_term=super01"
                    apply={"Get Price"}
                  />
                ) : (
                  <AnimatedLink text={"Get , Free Gift Voucher, Free Lounge Access, Benefits Of 1,21,799"}  link="https://spectrum.gotrackier.com/click?campaign_id=1201&pub_id=945&source=%7B2%7D"  apply={"Apply Now"}/>
                )}
            
            </>
          )
         }


                 <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-4">
          <div>
            <h3 className="text-lg text-gray-700">
              Author:{" "}
              <strong>
                {" "}
                <Link
                  href={`/author/${data?.author?.slug}`}
                  className="text-blue-600"
                >
                  {data?.author?.name}
                </Link>
              </strong>
            </h3>
            {/* <h3 className="text-sm text-gray-600">
              Created At:{" "}
              <strong>
                {new Date(data?.author?.createdAt).toLocaleDateString()}
              </strong>
            </h3>
            <h3 className="text-sm text-gray-600">
              Updated At:{" "}
              <strong>
                {new Date(data?.author?.updatedAt).toLocaleDateString()}
              </strong>
            </h3> */}
          </div>

          {/* <div>
            <img
  src={`${base_url}${data?.author?.image}`}
  alt={data?.author?.name || "Author"}
  className="hidden sm:block rounded-full w-24 h-24 object-cover border-2 border-gray-900 shadow-sm"
/>

          </div> */}
        </div>

       
        {/* <div>
          {data?.faqs?.length > 0 && (
            <>
              <h2 className="text-2xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              {data.faqs.map((item) => (
                <div key={item._id} className="mb-4">
                  <h3 className="font-semibold text-[20px] text-gray-900">
                    Q: {item.ques}
                  </h3>
                  <p className="text-gray-800 text-[18px]">A: {item.ans}</p>
                </div>
              ))}
            </>
          )}

          {data?.conclusion && (
            <div className="mb-2 pt-4">
              <h2 className="text-2xl font-bold">Conclusion:</h2>
              <p className="text-[20px] text-black">{data.conclusion}</p>
            </div>
          )}
        </div> */}

      </div>

      <div className=" w-full md:w-1/5  order-3 md:order-3 ">
        <RightSideBar pathname={pathname} data={data}/>
      </div>
    </div>
  );
};
