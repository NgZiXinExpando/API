"use client";

import React from "react";
import Link from "next/link";

const programs = [
  {
    id: "63b078e4-da34-47d4-8c33-0105a6f061df",
    name: "Drunkaroo",
    subtitle: "Alcoholic Beverages Referral Program",
    description:
      "Refer restaurants, bars, or retailers interested in purchasing alcoholic beverages in bulk. Help us connect with new partners for our premium selection of wines, spirits, and more.",
  },
  {
    id: "7c4a7156-1ffa-45c6-ad6d-86e044e5c961",
    name: "Fiezty Fizzaroo",
    subtitle: "Soft Drinks Referral Program",
    description:
      "Refer businesses looking for popular soft drinks like Coke, Fanta, and Sprite. Perfect for restaurants, franchises, and retailers seeking reliable supply of top brands.",
  },
  {
    id: "f4343072-2302-4df1-a788-0b55956a9900",
    name: "Sportie Soccaroo",
    subtitle: "Sports Water Referral Program",
    description:
      "Refer gyms, sports clubs, or retailers interested in bulk purchases of sports water and hydration products. Support healthy lifestyles with our trusted brands.",
  },
];

const Marketplace: React.FC = () => (
  <div className="max-w-3xl mx-auto mt-12 p-10 bg-white rounded-xl shadow-lg">
    <h1 className="text-4xl font-extrabold mb-6 text-blue-700 text-center">
      Referral Program Marketplace
    </h1>
    <p className="text-xl mb-8 text-center text-gray-700">
      Help Drinkaroo grow by referring new bulk buyers! Choose a program below
      to connect us with restaurants, franchises, retailers, gyms, and more.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      {programs.map((program) => (
        <div
          key={program.id}
          className="flex flex-col bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 flex-1 flex flex-col">
            <h2 className="text-2xl font-extrabold text-blue-700 mb-1">
              {program.name}
            </h2>
            <div className="text-sm font-semibold text-blue-500 mb-2 tracking-wide">
              {program.subtitle}
            </div>
            <p className="mb-4 text-gray-700 flex-1">{program.description}</p>
          </div>
          <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 flex justify-center">
            <Link
              href={{ pathname: "/referral", query: { programId: program.id } }}
              className="w-full text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-semibold text-md shadow transition"
            >
              Make a Referral
            </Link>
          </div>
        </div>
      ))}
    </div>
    <div className="bg-gray-50 rounded-lg p-6 text-center">
      <h3 className="text-xl font-bold mb-2 text-blue-700">
        Become a Drinkaroo Partner
      </h3>
      <p className="mb-2 text-gray-700">
        Joining our partner network is easy! Simply create an account with{" "}
        <a
          href="https://366.staging.dev.expando.ai/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline font-semibold"
        >
          Expando AI™
        </a>{" "}
        to get started and unlock exclusive rewards for successful referrals.
      </p>
    </div>
  </div>
);

export default Marketplace;
