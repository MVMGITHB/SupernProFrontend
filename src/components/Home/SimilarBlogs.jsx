import Link from "next/link";
import { base_url } from "../Helper/helper";

const SimilarBlogs = ({ blogs }) => {

  const getRandomBlogs = (array, count) => {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomBlogs = getRandomBlogs(Array.isArray(blogs) ? blogs : [], 4);

  return (
    <aside className="w-full md:w-1/5 bg-gray-100 p-2 rounded-lg">
      <h2 className="text-lg font-bold mb-4 text-center border-b pb-2">
        Latest Blogs
      </h2>
      <div className="space-y-2">
        {randomBlogs.map((property) => (
          <Link key={property?.id} href={`/${property?.category?.slug}/${property?.slug}`} className="block">
            <div className="bg-[#eeeef5] rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 p-2 flex items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-[12px] font-medium text-blue-800 hover:text-[#4F1C51] transition-colors line-clamp-3">
                  {property.title}
                </h3>
              </div>
              <div className="w-20 h-20 flex-shrink-0">
                <img
                  src={`${base_url}${property.image}`}
                  alt={property.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default SimilarBlogs;
