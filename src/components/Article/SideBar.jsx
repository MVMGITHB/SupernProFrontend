import Link from 'next/link';

export const SideBar = () => {
  return (
    <div className="w-full flex flex-col gap-6 p-2">
      <div className="w-full bg-white shadow-md rounded-xl overflow-hidden">
                <Link href="http://trk.yasd.in/click?campaign_id=166&pub_id=945" target="_blank">

        <img
          src="https://mvmbs.com/images/bjj2.webp"
          alt="Advertisement"
          className="w-full object-cover"
        />
               </Link>

      </div>

      <div className="w-full bg-white shadow-md rounded-xl overflow-hidden">
               <Link href="http://trk.yasd.in/click?campaign_id=166&pub_id=945" target="_blank">
 
        <img
          src="https://mvmbs.com/images/bjj1.webp"
          alt="Promotion"
          className="w-full  object-cover"
        />
               </Link>

      </div>
    </div>
  );
};
