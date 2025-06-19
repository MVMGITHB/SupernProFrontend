import Link from 'next/link';
import AnimatedLink from './AnimatedLink';

export const SideBar = ({ pathname }) => {
  return (
    <div className="w-full flex flex-col gap-6 p-2">
      <div className="w-full bg-white shadow-md rounded-xl overflow-hidden">


        {pathname === '/automobile/fastag-annual-pass' ? (
          <AnimatedLink
            text={"Increased Offer Generated For Your Old Car, Bid Valid For Two Hours Only"}
            link="https://www.cars24.com/sell-marketing/?utm_source=affiliate&utm_medium=email_ob&utm_campaign=mv2341&utm_term=super01"
          />
        ) : (
          <Link href="http://trk.yasd.in/click?campaign_id=166&pub_id=945" target="_blank">
            <img
              src="https://mvmbs.com/images/bjj2.webp"
              alt="Advertisement"
              className="w-full object-cover"
            />
          </Link>
        )}



      </div>





      <div className="w-full bg-white shadow-md rounded-xl overflow-hidden">



        {pathname === '/automobile/fastag-annual-pass' ? (
          <><Link href="https://www.cars24.com/sell-marketing/?utm_source=affiliate&utm_medium=email_ob&utm_campaign=mv2341&utm_term=super01" target="_blank">

            <img
              src="https://akm-img-a-in.tosshub.com/indiatoday/styles/medium_crop_simple/public/2024-08/cars24_launched_new_feature_orbit_and_upgraded_to_become_the_worlds_largest_auto_super_app.jpeg?VersionId=SOnnUo5lpdPW9IuquXwhjWUAsoCVY52q&size=750:*"
              alt="Promotion"
              className="w-full  object-cover"
            />
          </Link></>
        ) : (
          <Link href="http://trk.yasd.in/click?campaign_id=166&pub_id=945" target="_blank">

            <img
              src="https://mvmbs.com/images/bjj1.webp"
              alt="Promotion"
              className="w-full  object-cover"
            />
          </Link>
        )}


      </div>
    </div>
  );
};
