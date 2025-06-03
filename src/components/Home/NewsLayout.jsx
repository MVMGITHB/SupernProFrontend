"use client";

import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";
import SimilarBlogs from "./SimilarBlogs";
import { base_url } from "../Helper/helper";


export default function NewsLayout({blog}) {

  return (
    <div className=" mx-auto p-4 flex flex-col md:flex-row gap-6 ">
      <SimilarBlogs blogs={blog} />

      <main className="w-full md:w-3/5  p-2 rounded-lg ">
        <h2 className="text-lg font-bold mb-4">Trending Topics</h2>
        <Carousel
          showThumbs={false}
          showArrows={false}
          autoPlay
          infiniteLoop
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            const className = isSelected
              ? "inline-block w-3 h-3 bg-gray-800 rounded-full mx-1"
              : "inline-block w-3 h-3 bg-gray-600 rounded-full mx-1 cursor-pointer";
            return (
              <span
                key={index}
                className={className}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                role="button"
                tabIndex={0}
                aria-label={`${label} ${index + 1}`}
              />
            );
          }}
        >
          {blog
            ?.slice()
            .sort((a, b) => a.id - b.id)
            .map((property) => (
              <Link
                key={property.id}
                href={`/${property?.category?.slug}/${property.slug}`}
                  

              >
                <h3 className="cursor-pointer hover:text-[#5E3B5E] text-[#4F1C51] font-bold  text-[28px]  w-fit mx-auto">
                  {property.title}
                </h3>
                <div className="w-full relative">
                  <div className="relative w-full h-96">
                    <img
                      src={`${base_url}${property.image}`}
                      alt={property.title}
                      className="w-full h-full object-cover rounded-lg"
                    />

                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                      <style jsx>{`
                        :global(.carousel .control-dots) {
                          display: flex;
                          justify-content: center;
                        }
                      `}</style>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </Carousel>
      </main>

      <aside className="w-full md:w-1/5   rounded-lg  text-center">
        <div className="flex flex-col gap-2">
          <img
            src="https://mvmbs.com/images/tata_side_image.webp"
            alt="Tata Neu Event"
            className="w-full h-[480px]  object-cover rounded-md"
          />
        </div>
      </aside>
    </div>
  );
}
