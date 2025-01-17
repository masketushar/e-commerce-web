import React from "react";
import image1 from "../../Assets/brand1.avif";
import image2 from "../../Assets/img11.avif";

const Page = () => {
  return (
    <>
    <div className="w-full relative" >
      

      <img src={image2} alt="cloth pic" className="w-full" />
      <div className=" bottom-10 bg-slate-800 absolute">
      <h1 className="text-3xl font-bold mt-4">SHODWE E-MAGZ</h1>
          <p className="text-xl mt-2">
            Dress with purpose,<br></br> style with confidence—find your
            inspiration today.
          </p> 
          </div>

    </div>
  </>
  );
};

export default Page;
