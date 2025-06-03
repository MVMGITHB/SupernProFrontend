import React from 'react';

export const SideBar = () => {
  return (
    <div className="w-full flex flex-col gap-6 p-2">
      <div className="w-full bg-white shadow-md rounded-xl overflow-hidden">
       
        <img
          src="https://mvmbs.com/images/bjj2.webp"
          alt="Advertisement"
          className="w-full object-cover"
        />
       
      </div>

      <div className="w-full bg-white shadow-md rounded-xl overflow-hidden">
        
        <img
          src="https://mvmbs.com/images/bjj1.webp"
          alt="Promotion"
          className="w-full  object-cover"
        />
       
      </div>
    </div>
  );
};
