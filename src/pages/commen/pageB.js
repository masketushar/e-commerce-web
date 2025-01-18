import React from "react";
import casuala from "../../Assets/casual.avif";
import formala from "../../Assets/formal1.jpg";
import partya from "../../Assets/party.avif";
import gy from "../../Assets/gym.jpg";

const PageB = () => {
  return (
    <div className="flex flex-col items-center overflow-hidden shadow-lg p-2 justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl text-center font-bold mb-4">
          BROWSE BY DRESS STYLE
        </h1>
        <div className="flex overflow-hidden p-0 rounded-xl w-full h-1/2">
          <div className="flex w-3/5 rounded h-auto relative">
            <img
              src={casuala}
              alt="Casual"
              className="px-4 py-4 w-full"
              style={{ borderRadius: "3rem" }}
            />
            <p className="mt-8 ml-10 text-black text-3xl absolute">
              Casual
            </p>
          </div>
          <div className="flex w-2/5  rounded ">
            <img
              src={formala}
              alt="Formal"
              className="px-4 py-4 "
              style={{ borderRadius: "3rem" }}
            />
            <p className="mt-8 ml-10 text-black text-3xl absolute">
              Formal
            </p>
          </div>
        </div>

        <div className="flex w-full">
          <div className="flex w-2/5 relative">
            <img
              src={partya}
              alt="Party"
              className="px-4 py-4 rounded-2rem"
              style={{ borderRadius: "3rem" }}
            />
            <p className="mt-8 ml-10 text-black text-3xl absolute">
              Party
            </p>
          </div>
          <div className="flex w-3/5 relative">
            <img
              src={gy}
              alt="Gym"
              className="px-4 py-4 w-full rounded-2rem"
              style={{ borderRadius: "3rem" }}
            />
            <p className="mt-8 ml-10 text-black text-3xl absolute">
              Gym
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageB;
