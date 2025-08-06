"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

// const programs = [
//   {
//     id: "63b078e4-da34-47d4-8c33-0105a6f061df",
//     name: "Drunkaroo Referral Program",
//   },
//   {
//     id: "7c4a7156-1ffa-45c6-ad6d-86e044e5c961",
//     name: "Fiezty Fizzaroo Referral Program",
//   },
//   {
//     id: "f4343072-2302-4df1-a788-0b55956a9900",
//     name: "Sportie Soccaroo Referral Program",
//   },
// ];

const Page = () => {
  return (
    <Suspense>
      <ReferralForm />
    </Suspense>
  );
};

const ReferralForm: React.FC = () => {
  const searchParams = useSearchParams();
  // const [program, setProgram] = useState("");
  // const [leadName, setLeadName] = useState("");
  // const [leadDescription, setLeadDescription] = useState("");
  // const [accountIdentifier, setAccountIdentifier] = useState("");
  // const [message, setMessage] = useState("");
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const param = searchParams.get("programId");
  //   if (param && programs.some((p) => p.id === param)) {
  //     setProgram(param);
  //   }
  // }, [searchParams]);

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setMessage("");
  //   try {
  //     const res = await fetch(
  //       `${process.env.NEXT_PUBLIC_BACKEND_URL}/referral`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           "x-api-key": process.env.NEXT_PUBLIC_API_KEY || "",
  //         },
  //         body: JSON.stringify({
  //           programId: program, // API contract expects programId
  //           leadName,
  //           leadDescription,
  //           accountIdentifier,
  //         }),
  //       }
  //     );
  //     const data = await res.json();
  //     if (res.status === 201 || res.status === 200) {
  //       setMessage(data.message || "Referral submitted successfully!");
  //     } else {
  //       setMessage(data.message || "Error submitting referral.");
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     setMessage("API failed");
  //   }
  //   setLoading(false);
  // };

  return (
    <div className="max-w-3xl mx-auto mt-12 p-10 bg-white rounded-xl shadow-lg">
      <h2 className="text-4xl font-extrabold mb-6 text-blue-700 text-center">
        Make a Referral
      </h2>
      <p className="text-lg mb-8 text-center text-gray-700">
        Partners can refer new bulk buyers to Drinkaroo and help us grow. Please
        fill out the form below with accurate details.
      </p>
      <iframe
        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/referral/iframe?key=${
          process.env.NEXT_PUBLIC_API_KEY
        }${
          searchParams.get("programId")
            ? "&programId=" + searchParams.get("programId")
            : ""
        }`}
        width="100%"
        height="500"
        title="Referral Form"
      ></iframe>
      {/* <form onSubmit={handleSubmit} className="space-y-8 text-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Program
            </label>
            <select
              value={program}
              onChange={(e) => setProgram(e.target.value)}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="" disabled>
                Select a program
              </option>
              {programs.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Lead Name
            </label>
            <input
              type="text"
              value={leadName}
              onChange={(e) => setLeadName(e.target.value)}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Customer Name"
            />
          </div>
        </div>
        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Lead Description
          </label>
          <textarea
            value={leadDescription}
            onChange={(e) => setLeadDescription(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe the lead..."
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Account Identifier (Email or Account ID)
          </label>
          <input
            type="text"
            value={accountIdentifier}
            onChange={(e) => setAccountIdentifier(e.target.value)}
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email or Account ID"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-semibold text-lg shadow transition"
        >
          {loading ? "Submitting..." : "Submit Referral"}
        </button>
        {message && (
          <div className="mt-4 text-center text-md text-green-600 font-semibold">
            {message}
          </div>
        )}
      </form> */}
    </div>
  );
};

export default Page;
