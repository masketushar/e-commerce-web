import React from "react";

import casuala from "../../Assets/casual.avif";
import formala from "../../Assets/img1.avif";
import partya from "../../Assets/party.jpeg";
import gy from "../../Assets/gym.jpg";

const PageB = () => {
  return (
    <div className="flex flex-col items-center overflow-hidden shadow-lg p-20 justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl text-center font-bold mb-4">
          BROWSE BY DRESS STYLE
        </h1>
        <div className="flex overflow-hidden rounded-xl w-full h-1/2">
          <div className="flex w-3/5  rounded- h-auto relative">
            <img
              src={casuala}
              alt="Casual"
              className="px-4 py-4  round"
            />
            <p className="mt-2 text-lg font-medium absolute">Casual</p>
          </div>
          <div className="flex rounded-sm w-2/5 relative">
            <img
              src={formala}
              alt="Formal"
              className="px-4 py-4 rounded-3xl round"
            />
            <p className="mt-2 text-lg font-medium absolute">Formal</p>
          </div>
        </div>

        <div className="flex w-full   ">
          <div className="flex  w-2/5 relative">
            <img src={partya} alt="Party" className=" px-4 py-4 rounded" />
            <p className="mt-2 text-lg font-medium absolute">Party</p>
          </div>
          <div className="relative  rounded">
            <img src={gy} alt="Gym" className="px-4  py-4  rounded" />
            <p className="mt-2 text-lg font-medium absolute ">Gym</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageB;
