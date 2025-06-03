import React from 'react';

export const LeftSidebar = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      {/* Ad Section 1 */}
      <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
        <img
          src="https://mvmbs.com/images/tata_side_image.webp"
          alt="Advertisement"
          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Ad Section 2 */}
      <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
        <img
          src="https://mvmbs.com/images/tata_side_image.webp"
          alt="Featured Content"
          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
};
