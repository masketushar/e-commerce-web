import React from "react";

import casuala from "../../Assets/casual.avif";
import formala from "../../Assets/img1.avif";
import partya from "../../Assets/party.avif";
import gy from "../../Assets/gym.jpg";


const Page = () => {
  return (
    <>
      <div className="flex flex-col items-center p-20 justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl text-center  font-bold mb-4">BROWSE BY DRESS STYLE</h1>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
              <img
                src={casuala}
                alt="casual"
                className="w-full h-auto rounded-lg"
              />
              <p className="mt-2 text-lg font-medium">Casual</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={formala}
                alt="Formal"
                className="w-full h-auto rounded-lg"
              />
              <p className="mt-2 text-lg font-medium">Formal</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={partya}
                alt="Party"
                className="w-full h-auto rounded-lg"
              />
              <p className="mt-2 text-lg font-medium">Party</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={gy}
                alt="Gym"
                className="w-full h-auto rounded-lg"
              />
              <p className="mt-2 text-lg font-medium">Gym</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
