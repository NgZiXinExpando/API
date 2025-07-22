"use client";

import React, { useState } from "react";

const ReferralForm: React.FC = () => {
  const [programId, setProgramId] = useState("");
  const [leadName, setLeadName] = useState("");
  const [leadDescription, setLeadDescription] = useState("");
  const [accountIdentifier, setAccountIdentifier] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/referral`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY || "",
          },
          body: JSON.stringify({
            programId,
            leadName,
            leadDescription,
            accountIdentifier,
          }),
        }
      );
      const data = await res.json();
      if (res.status === 201 || res.status === 200) {
        setMessage(data.message || "Referral submitted successfully!");
      } else {
        setMessage(data.message || "Error submitting referral.");
      }
    } catch (err) {
      console.error(err);
      setMessage("API failed");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Make a Referral</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Program ID</label>
          <input
            type="text"
            value={programId}
            onChange={(e) => setProgramId(e.target.value)}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Lead Name</label>
          <input
            type="text"
            value={leadName}
            onChange={(e) => setLeadName(e.target.value)}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Lead Description</label>
          <textarea
            value={leadDescription}
            onChange={(e) => setLeadDescription(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">
            Account Identifier (Email or Account ID)
          </label>
          <input
            type="text"
            value={accountIdentifier}
            onChange={(e) => setAccountIdentifier(e.target.value)}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Submitting..." : "Submit Referral"}
        </button>
        {message && (
          <div className="mt-4 text-center text-sm text-green-600">
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default ReferralForm;
