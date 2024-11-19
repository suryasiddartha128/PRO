import { BriefcaseMedical, BaggageClaim, Users } from "lucide-react";
import React from "react";

const AdminDashboardHomeCards = ({ products, orders, users }) => {
  return (
    <div className="w-full flex flex-row justify-center items-center gap-6 mt-8">
      {/* Customers Card */}
      <div
        className="card-container w-1/4 h-[100px] flex items-center justify-between px-4 border-2 border-lightblue-500 bg-lightblue-100 hover:neon-glow-blue"
        style={{
          backdropFilter: "blur(5px)", // Apply blur effect inside the card
          backgroundColor: "rgba(255, 255, 255, 0.5)", // Optional: semi-transparent background
        }}
      >
        <div className="card-content flex items-center gap-4">
          <p className="text-3xl font-bold text-gray-900" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>{users}</p>
          <p className="text-lg font-semibold text-gray-900" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}>Customers</p>
        </div>
        <div className="icon">
          <Users className="w-8 h-8 opacity-90" />
        </div>
      </div>

      {/* Medicines Card */}
      <div
        className="card-container w-1/4 h-[100px] flex items-center justify-between px-4 border-2 border-lightblue-500 bg-lightblue-100 hover:neon-glow-blue"
        style={{
          backdropFilter: "blur(5px)", // Apply blur effect inside the card
          backgroundColor: "rgba(255, 255, 255, 0.5)", // Optional: semi-transparent background
        }}
      >
        <div className="card-content flex items-center gap-4">
          <p className="text-3xl font-bold text-gray-900" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>{products}</p>
          <p className="text-lg font-semibold text-gray-900" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}>Medicines</p>
        </div>
        <div className="icon">
          <BriefcaseMedical className="w-8 h-8 opacity-90" />
        </div>
      </div>

      {/* Orders Card */}
      <div
        className="card-container w-1/4 h-[100px] flex items-center justify-between px-4 border-2 border-lightblue-500 bg-lightblue-100 hover:neon-glow-blue"
        style={{
          backdropFilter: "blur(5px)", // Apply blur effect inside the card
          backgroundColor: "rgba(255, 255, 255, 0.5)", // Optional: semi-transparent background
        }}
      >
        <div className="card-content flex items-center gap-4">
          <p className="text-3xl font-bold text-gray-900" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>{orders}</p>
          <p className="text-lg font-semibold text-gray-900" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}>Orders</p>
        </div>
        <div className="icon">
          <BaggageClaim className="w-8 h-8 opacity-90" />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardHomeCards;
