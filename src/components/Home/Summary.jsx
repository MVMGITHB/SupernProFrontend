"use client";

import Link from "next/link";
import { useState } from "react";
import { base_url } from "../Helper/helper";

const data1 = [
  {
    id: 1,
    title: "8th Pay Commission Changes All the major changes",
    image: "/8th CPC.webp",
    base: "finance",
    desc: "Earlier this year in January, the central government approved the 8th pay commission, with many saying that the policy will be implemented from next year.",
  },
  {
    id: 2,
    title:
      "SSY 2025 Explained Interest Rate Eligibility Tax Benefits How to Apply",
    image: "/SSY.webp",
    base: "finance",
    desc: "Sukanya Samriddhi Yojana (SSY) is a savings scheme launched under the Beti Bachao Beti Padhao campaign by Prime Minister Narendra Modi. ",
  },

  {
    id: 3,
    title:
      "Meta Rolls Out Major Update WhatsApp Business Messages to Be Charged",
    image: "/meta rollout.webp",
    base: "technology",
    desc: "Every message will now cost money for WhatsApp corporate users. Starting on July 1, 2025, Meta will be introducing new prices.",
  },
  {
    id: 4,
    title:
      "The 7th CPC Update All You Should Know about Centre Revised Pension Rules",
    image: "/7th pay commission.webp",
    base: "finance",
    desc: "The central government of India recently made some updates to the 7th Pay Commission, which focuses on pensions and other allowances for government employees.",
  },
  {
    id: 5,
    title:
      "From Food to Fast Swiggy Instamart Aims for Bigger Faster Deliveries",
    image: "/swiggy.webp",
    base: "fashion-lifestyle",
    desc: "The well-known food delivery service Swiggy has changed the name of its rapid commerce division to Instamart, abandoning its previous name in the process.",
  },
  {
    id: 6,
    title: "Jio Blackrock Asset Management gets SEBI approval for mutual funds",
    image: "/JioBlackRock.webp",
    base: "finance",
    desc: "Jio Finance and US-based BlackRock Asset Management recently got the green light from the Securities and Exchange Board of India [SEBI] for their new mutual funds business.",
  },
  {
    id: 7,
    title: "Xabi Alonso Returns to Real Madrid",
    image: "/thealanso.webp",
    base: "sports",
    desc: "Former Real Madrid and Spain midfielder Xabi Alonso is expected to succeed Carlo Ancelotti as Real Madrid's new head coach.After a poor (trophyless) season, Alonso, aged 43, will captain the squad going into the Club World Cup.",
  },
  {
    id: 8,
    title: "New Rule PAN Details Mandatory",
    image: "/pandetails.webp",
    base: "real-estate",
    desc: "When registering property valued at ₹30 lakh or more, the Karnataka Department of Registration and Stamps has mandated that both buyers and sellers provide their PAN information. The registration process won't be finished without a PAN.",
  },
  {
    id: 9,
    title: "IRCTC launches new mobile app Swarail",
    image: "/Swarail.webp",
    base: "technology",
    desc: "Swarail is a new app launched by the Indian Railway Catering and Tourism Corporation [IRCTC]. It is an all-in-one railway app that is available and compatible with both Android and iOS.",
  },
  {
    id: 10,
    title: "Nestle India removed from BSE what went wrong",
    image: "/Nestle.webp",
    base: "finance",
    desc: "Nestlé is one of the most recognisable brands today in the fast-moving consumer goods segment worldwide [FMCG]. But in a shocking development last week, Nestlé India was removed from the BSE Sensex.",
  },
  {
    id: 11,
    title: "FY 2024-25 ITR Forms Whats new",
    image: "/itrforms.webp",
    base: "finance",
    desc: "In an effort to increase accuracy and take into account recent legal developments, the Income Tax Department has revised its regulations, which particularly impact those with capital gains, TDS, or high-value assets.",
  },
  {
    id: 12,
    title: "How to Use Copilot Vision",
    image: "/copilotVision.webp",
    base: "technology",
    desc: "Copilot is one of the most popular AI assistants today. Microsoft recently launched a new feature called ‘Copilot Vision’. Here’s everything you need to know about this feature, including key features, step-by-step instructions, and helpful tips.",
  },
  {
    id: 13,
    title: "5 Reasons Why Too Much Sugar Is Bad For You",
    image: "/blog4.png",
    base: "fashion-lifestyle",
    desc: "Sugar is fine for you in small amounts, but too much can increase your risk of several serious medical conditions.",
  },
  {
    id: 14,
    title: "Credit Or Debit Card Rules: Benefits For Customers",
    image: "/blog2.png",
    base: "finance",
    desc: "The Reserve Bank of India (RBI) has introduced a draft rule that empowers debit, credit, and prepaid card users to select their preferred card network.",
  },
  {
    id: 15,
    title: "Leading Business Loan Options for Indian Entrepreneurs in 2025",
    image: "/tech.webp",
    base: "finance",
    desc: "Personal finance is extensive and covers everything from medical emergencies to dream vacations.Thankfully, there are numerous personal loans today that cover all contingencies.",
  },
  {
    id: 16,
    title: "Best Personal Loan Options for All Your Needs",
    image: "/personal_loan.webp",
    base: "finance",
    desc: "To assist aspiring business owners, Indian Market has launched a number of business loans.Explore these 5 best Business loans in India to upgrade your business game.",
  },
  {
    id: 17,
    title: "Facts About ATM Withdrawal Charges For Banks",
    image: "/blog1.png",
    base: "finance",
    desc: "Banks provide a limited number of complimentary ATM transactions every month, and the allowance varies based on the type of savings account selected.",
  },
  {
    id: 18,
    title: "Here is how Govt Has Limited Gold Storage at Home",
    image: "/blog3.png",
    base: "finance",
    desc: "Know how much yellow metal you can keep at home without facing tax scrutiny and how the income from gold is taxed.",
  },
];

const Summary = ({ blog }) => {
  const [visibleCount, setVisibleCount] = useState(4);
  const sortedData = [...data1].sort((a, b) => a.id - b.id);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 2);
  };

  return (
    <div className="mx-auto  flex flex-col md:flex-row gap-6">
      <aside className="w-full md:w-1/5">
        <div className="sticky top-4 bg-gray-100 p-4 rounded-lg shadow-md">
          <img
            src="https://mvmbs.com/images/tata_side_image.webp"
            alt="Tata Neu Event"
            className="w-full object-cover rounded-md"
          />
        </div>
      </aside>

      <main className="w-full md:w-3/5 flex flex-col gap-4 p-2  mt-[-25px]">
        <h2 className="text-2xl font-bold text-gray-700 ">Recent Blogs</h2>
        {blog?.slice(0, visibleCount).map((item, index) => (
          <div
            key={index}
            className="w-full p-4 flex flex-col md:flex-row items-center gap-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={`${base_url}${item?.image}`}
              alt={item?.title}
              className="rounded-xl w-full md:w-40 h-auto object-cover"
            />
            <div>
              <Link
                href={`/${item?.category?.slug}/${item?.slug}`}
                className="text-lg font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-300"
              >
                {item?.title}
              </Link>
              <p>{item?.mdesc}</p>
            </div>
          </div>
        ))}

        {visibleCount < sortedData.length && (
          <div className="flex justify-center">
            <button
              onClick={handleLoadMore}
              className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors duration-300"
            >
              View More
            </button>
          </div>
        )}
      </main>

      <aside className="w-full md:w-1/5">
        <div className="sticky top-4 bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Top Offers</h2>
          <ul className="space-y-3">
            <li className="border-b pb-2">
              Breaking: Market hits all-time high
            </li>
            <li className="border-b pb-2">Politics: New policies announced</li>
            <li className="border-b pb-2">
              Sports: Championship finals highlights
            </li>
            <li className="border-b pb-2">Tech: New smartphone released</li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Summary;
