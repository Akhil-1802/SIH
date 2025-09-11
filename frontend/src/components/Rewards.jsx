import React from "react";
import { FaGift, FaCheckCircle, FaStar } from "react-icons/fa";

const rewardData = [
  {
    module: "EcoWaste Training",
    reward: 50,
    description: "Completed all eco-waste training modules.",
  },
  {
    module: "Bio Plant Evidence",
    reward: 30,
    description: "Submitted valid bio plant evidence.",
  },
  {
    module: "Register Waste",
    reward: 40,
    description: "Registered waste with image successfully.",
  },
];

const rewardBenefits = [
  "Redeem points for eco-friendly products.",
  "Get priority access to community events.",
  "Earn badges and recognition in the app.",
];

export default function Reward() {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8 mt-6">
      <div className="flex items-center mb-6">
        <FaGift className="text-yellow-500 mr-3" size={32} />
        <h1 className="text-3xl font-bold text-green-700">Your Rewards</h1>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-green-600 mb-2">Reward Details</h2>
        <ul className="divide-y divide-green-100">
          {rewardData.map((item, idx) => (
            <li key={idx} className="py-3 flex items-center">
              <FaCheckCircle className="text-green-500 mr-3" size={20} />
              <div>
                <div className="font-semibold text-green-800">{item.module}</div>
                <div className="text-sm text-green-600">{item.description}</div>
              </div>
              <span className="ml-auto bg-yellow-100 text-yellow-700 px-3 py-1 rounded-lg font-bold">
                +{item.reward} pts
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-green-600 mb-2">Benefits of Rewards</h2>
        <ul className="list-disc pl-6 space-y-2">
          {rewardBenefits.map((benefit, idx) => (
            <li key={idx} className="flex items-center text-green-700">
              <FaStar className="text-yellow-400 mr-2" size={16} />
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}