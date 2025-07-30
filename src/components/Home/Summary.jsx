"use client";
import Link from "next/link";
import { useState } from "react";
import { base_url } from "../Helper/helper";

const Summary = ({ blog }) => {
  const [visibleCount, setVisibleCount] = useState(4);
  const sortedData = Array.isArray(blog)
    ? [...blog].sort((a, b) => a.id - b.id)
    : [];

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <div className="mx-auto flex flex-col md:flex-row gap-6">
      <aside className="w-full md:w-1/5">
        <div className="sticky top-4 bg-gray-100 p-4 rounded-lg shadow-md">
          <Link href="https://trk.clickgenie.in/click?campaign_id=34900&pub_id=5742&p1=%7Byour-transaction-id%7D&source=%7Byour-sub-aff-id%7D" target="_blank">
          <img
            src="./tataNew.jpeg"
            alt="Tata Neu Event"
            className="w-full object-cover rounded-md"
          />
          </Link>
        </div>
        
      </aside>

      <main className="w-full md:w-3/5 flex flex-col gap-4 p-2 mt-[-25px]">
        <h2 className="text-2xl font-bold text-gray-700">Recent Blogs</h2>
        {Array.isArray(blog) &&
          blog.slice(0, visibleCount).map((item, index) => (
            <div
              key={index}
              className="w-full p-4 flex flex-col md:flex-row items-center gap-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={`${base_url}${item?.image}`}
                alt={item?.title}
                className="rounded-xl w-full md:w-40 h-auto object-cover"
              />
              <div>
                <Link
                  href={`/${item?.category?.slug}/${item?.slug}`}
                  className="text-lg font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-300"
                >
                  {item?.title}
                </Link>
                <p>{item?.mdesc}</p>
              </div>
            </div>
          ))}

        {visibleCount < sortedData.length && (
          <div className="flex justify-center">
            <button
              onClick={handleLoadMore}
              className="px-4 py-2 bg-gray-600  text-white rounded-md hover:bg-gray-700 cursor-pointer transition-colors duration-300"
            >
              View More
            </button>
          </div>
        )}
      </main>

      <aside className="w-full md:w-1/5">
        <div className="sticky top-4 bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Top Offers</h2>
          <ul className="space-y-3">
            <li className="border-b pb-2">
              Breaking: Market hits all-time high
            </li>
            <li className="border-b pb-2">Politics: New policies announced</li>
            <li className="border-b pb-2">
              Sports: Championship finals highlights
            </li>
            <li className="border-b pb-2">Tech: New smartphone released</li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Summary;
