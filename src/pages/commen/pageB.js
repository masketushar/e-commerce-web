import React from "react";

import casuala from "../../Assets/casual.avif";
import formala from "../../Assets/img1.avif";
import partya from "../../Assets/party.jpg";
import gy from "../../Assets/gym.jpg";

const Page = () => {
  return (
    <>
      <div className="flex flex-col items-center p-20 justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl text-center  font-bold mb-4">
            BROWSE BY DRESS STYLE
          </h1>
          <div className="flex w-full h-1/2  ">
            <div className="flex w-3/5 h-auto relative ">
              <img
                src={casuala}
                alt="casual"
                className="px-4 py-4 rounded-lg"
              />
              <p className="mt-2 text-lg bg-white font-medium absolute">
                Casual
              </p>
            </div>
            <div className="flex w-2/5  relative">
              <img
                src={formala}
                alt="Formal"
                className="px-4 py-4 rounded-lg "
              />
              <p className="mt-2 text-lg font-medium absolute">Formal</p>
            </div>
          </div>

          <div className="flex w-full h-1/2  ">
            <div className="flex  flex-col  w-2/5  relative">
              <img src={partya} alt="Party" className=" h-1/2 px-4 py-4 rounded-lg" />
              <p className="mt-2 text-lg font-medium absolute ">Party</p>
            </div>
            <div className="  relative">
              <img src={gy} alt="Gym" className=" px-4 py-4  rounded-lg" />
              <p className="mt-2  text-lg font-medium absolute  bottom-10">
                Gym
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
