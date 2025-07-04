import Link from 'next/link';
import AnimatedLink from './AnimatedLink';
import AnimatedLink1 from './AnimatedLink1';
export const RightSideBar = ({ pathname,data }) => {

  const data1 = [
    "Get",
    "Free Gift Voucher",
    "Free Lounge Access",
    "Benefits Of 1,21,799",
  
  ]
  return (
    <div className="w-full flex flex-col gap-6 p-2">
      <div className="w-full bg-white shadow-md rounded-xl overflow-hidden">



        {
          data?.Ads[1] ? (<>
                      <AnimatedLink1
                        text={data?.Ads[1].text1}
                        link={data?.Ads[1].link1}
                        apply={data?.Ads[1].text2}
                      />
          
                    </>) :(<>
                    
        {pathname === '/automobile/fastag-annual-pass' ? (
          <AnimatedLink
            text={"Increased Offer Generated For Your Old Car, Bid Valid For Two Hours Only"}
            link="https://www.cars24.com/sell-marketing/?utm_source=affiliate&utm_medium=email_ob&utm_campaign=mv2341&utm_term=super01"
            apply={"Get Price"}
          />
        ) : (
         <AnimatedLink1
            text={data1}
            link="https://trk.clickgenie.in/click?campaign_id=34900&pub_id=5742&p1=%7Byour-transaction-id%7D&source=%7Byour-sub-aff-id%7D"
            apply={"Get Price"}
          />
        )}
                    </>)
        }


      </div>

      <div className="bg-white shadow-md rounded-xl overflow-hidden">

        {pathname === '/automobile/fastag-annual-pass' ? (
          <>
          
           <Link href="https://www.cars24.com/sell-marketing/?utm_source=affiliate&utm_medium=email_ob&utm_campaign=mv2341&utm_term=super01" target="_blank">

            <img
              src="https://akm-img-a-in.tosshub.com/indiatoday/styles/medium_crop_simple/public/2024-08/cars24_launched_new_feature_orbit_and_upgraded_to_become_the_worlds_largest_auto_super_app.jpeg?VersionId=SOnnUo5lpdPW9IuquXwhjWUAsoCVY52q&size=750:*"
              alt="Ad Event"
              className="w-full  object-cover"
            />
          </Link></>
        ) : (
          <Link href="https://trk.clickgenie.in/click?campaign_id=34900&pub_id=5742&p1=%7Byour-transaction-id%7D&source=%7Byour-sub-aff-id%7D" target="_blank">

            <img
              src="https://mvmbs.com/images/tata_side_image.webp"
              alt="Ad Event"
              className="w-full  object-cover"
            />
          </Link>
        )}

      </div>
    </div>
  );
};
