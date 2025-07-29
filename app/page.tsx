"use client";

import React, { useState } from "react";

const LandingPage: React.FC = () => (
  <div className="max-w-3xl mx-auto mt-12 p-10 bg-white rounded-xl shadow-lg">
    <h1 className="text-5xl font-extrabold mb-6 text-blue-700 text-center">Drinkaroo: Your Bulk Beverage Partner</h1>
    <p className="text-xl mb-8 text-center text-gray-700">
      Are you a restaurant, franchise, or retailer looking for a reliable supplier of beverages in Hong Kong SAR? Drinkaroo delivers premium soft drinks, alcoholic beverages, and sports water at unbeatable bulk prices.
    </p>
    <div className="mb-8 flex flex-col md:flex-row gap-8 justify-center">
      <div className="flex-1 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 border-blue-100">
        <h2 className="text-2xl font-bold mb-2 text-blue-600">Why Choose Drinkaroo?</h2>
        <ul className="list-disc pl-6 text-lg text-gray-800">
          <li>Trusted by top restaurants and franchises</li>
          <li>Wide selection: soft drinks, alcohol, sports water</li>
          <li>Competitive bulk pricing</li>
          <li>Fast, reliable delivery across Hong Kong</li>
          <li>Dedicated account manager for your business</li>
        </ul>
      </div>
      <div className="flex-1 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-100">
        <h2 className="text-2xl font-bold mb-2 text-blue-600">Ready to Grow Your Beverage Sales?</h2>
        <p className="mb-4 text-lg">Contact us today to discuss partnership opportunities and sign a deal with Drinkaroo.</p>
        <a href="mailto:johnSmith@drinkaroo.com" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold text-lg shadow">Contact Us</a>
        <div className="mt-4 text-gray-600 text-sm">
          <span className="font-medium">Point of Contact:</span> John Smith<br />
          <span className="font-medium">Email:</span> johnSmith@drinkaroo.com
        </div>
      </div>
    </div>
    <div className="bg-gray-50 rounded-lg p-6 text-center">
      <h3 className="text-xl font-bold mb-2 text-blue-700">Referral Program for Partners</h3>
      <p className="mb-2 text-gray-700">Already a Drinkaroo partner? Help us grow by referring new customers and earn rewards. <a href="/referral" className="text-blue-600 underline font-semibold">Make a Referral</a></p>
      <p className="text-sm text-gray-500">(We used Expando AI™ to manage all our referrals)</p>
    </div>
  </div>
);

export default LandingPage;
