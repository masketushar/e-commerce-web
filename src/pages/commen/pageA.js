import React from "react";
import image1 from "../../Assets/brand1.avif";
import image2 from "../../Assets/img2.avif";

const Page = () => {
  return (
    <>
      <div className="flex p-5  bg-white ">
        <div className="w-3/5 relative lg:w-1/2  h-full flex flex-col items-center text-center lg:text-left	">
          <img src={image2} alt="cloth pic " className="w-full" />
          <div className="absolute bottom-8">
            <h1 className="text-3xl font-bold mt-4">SHODWE E-MAGZ</h1>
            <p className="text-xl mt-2">
              Dress with purpose,<br></br> style with confidence—find your
              inspiration today.
            </p>
            <button className="bg-black text-white py-2 px-4 mt-4">
              Read Now
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 w-40 flex flex-col items-center text-center lg:text-right mt-8 lg:mt-0">
          <div className="w-3/4 h-lvh	 relative">
            <img src={image1} alt="Group of people" className="w-full" />
            <div className="absolute bottom-10 center bg-yellow-400 text-black px-4 py-2 mt-4 ">
              READ MAGZ
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
