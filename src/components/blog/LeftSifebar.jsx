import Link from 'next/link';

export const LeftSidebar = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      {/* Ad Section 1 */}
      <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                  <Link href="https://spectrum.gotrackier.com/click?campaign_id=1201&pub_id=945&source=%7B1%7D" target="_blank">

        <img
          src="https://mvmbs.com/images/tata_side_image.webp"
          alt="Advertisement"
          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
        />
        </Link>
      </div>

      {/* Ad Section 2 */}
      <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                  <Link href="https://spectrum.gotrackier.com/click?campaign_id=1201&pub_id=945&source=%7B1%7D" target="_blank">

        <img
          src="https://mvmbs.com/images/tata_side_image.webp"
          alt="Featured Content"
          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
        />
        </Link>
      </div>
    </div>
  );
};
