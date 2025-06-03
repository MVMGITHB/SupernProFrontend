import React from 'react';

export const RightSide = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      {/* Ads Section */}
      <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
        <img
          src="https://mvmbs.com/images/bjj2.webp"
          alt="Advertisement"
          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Top News Section */}
      <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
        <img
          src="https://mvmbs.com/images/bjj1.webp"
          alt="Top News"
          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
};
