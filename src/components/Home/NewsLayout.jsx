import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";
import SimilarBlogs from "./SimilarBlogs";
import { base_url } from "../Helper/helper";

export default function NewsLayout({ blog }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sortedBlogs = blog?.slice().sort((a, b) => a.id - b.id) || [];

  return (
    <div className="mx-auto p-4 flex flex-col md:flex-row gap-6">
      <SimilarBlogs blogs={blog} />

      <main className="w-full md:w-3/5 p-2 rounded-lg">
        <h2 className="text-lg font-bold mb-4">Trending Topics</h2>

        <Carousel
          showThumbs={false}
          showArrows={true}
          autoPlay  
          infiniteLoop
          showIndicators={false}
          onChange={(index) => setCurrentIndex(index)}
        >
          {sortedBlogs.map((property) => (
            <div className="w-full relative" key={property.id}>
              <div className="relative w-full h-96">
                <img
                  src={`${base_url}${property.image}`}
                  alt={property.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </Carousel>

        {sortedBlogs[currentIndex] && (
          <Link
            href={`/${sortedBlogs[currentIndex]?.category?.slug}/${sortedBlogs[currentIndex].slug}`}
          >
           <div>
             <h3 className="mt-2 cursor-pointer hover:text-[#5E3B5E] text-[#4F1C51] font-bold text-[26px] text-center ">
              {sortedBlogs[currentIndex].title}
            </h3>
           </div>
          </Link>
        )}
      </main>

      <aside className="w-full md:w-1/5 rounded-lg text-center">
        <div className="flex flex-col gap-2">
          <img
            src="https://mvmbs.com/images/tata_side_image.webp"
            alt="Tata Neu Event"
            className="w-full h-[480px] object-cover rounded-md"
          />
        </div>
      </aside>
    </div>
  );
}
