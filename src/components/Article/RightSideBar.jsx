import React from 'react';

export const RightSideBar = () => {
  return (
    <div className="w-full flex flex-col gap-6 p-2">
      <div className="w-full bg-white shadow-md rounded-xl overflow-hidden">
        
          <img
            src="https://mvmbs.com/images/tata_side_image.webp"
            alt="Ad Image"
            className="w-full  object-cover"
          />
         
        </div>

       
        <div className="bg-white shadow-md rounded-xl overflow-hidden">
         
          <img
            src="https://mvmbs.com/images/tata_side_image.webp"
            alt="Ad Event"
            className="w-full  object-cover"
          />
        
        </div>
      </div>
  );
};
