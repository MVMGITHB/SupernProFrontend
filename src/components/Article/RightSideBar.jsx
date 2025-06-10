import Link from 'next/link';

export const RightSideBar = () => {
  return (
    <div className="w-full flex flex-col gap-6 p-2">
      <div className="w-full bg-white shadow-md rounded-xl overflow-hidden">
                      <Link href="https://spectrum.gotrackier.com/click?campaign_id=1201&pub_id=945&source=%7B1%7D" target="_blank">
    
          <img
            src="https://mvmbs.com/images/tata_side_image.webp"
            alt="Ad Image"
            className="w-full  object-cover"
          />
         </Link>
        </div>

       
        <div className="bg-white shadow-md rounded-xl overflow-hidden">
                           <Link href="https://spectrum.gotrackier.com/click?campaign_id=1201&pub_id=945&source=%7B1%7D" target="_blank">

          <img
            src="https://mvmbs.com/images/tata_side_image.webp"
            alt="Ad Event"
            className="w-full  object-cover"
          />
        </Link>
        </div>
      </div>
  );
};
