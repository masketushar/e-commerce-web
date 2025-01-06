import React from "react";
import  image1 from "../../Assets/img1.1.avif";
import  image2 from "../../Assets/img2.avif";

const Page = () => {
  return (
  <>

    <div className="flex flex-col lg:flex-row items-center bg-white p-20">
   
      <div className="lg:w-1/2 w-full flex flex-col items-center text-center lg:text-left">
        <div className="w-3/5  h-lvh	" >
          <img
            src={ image1} 
            alt="cloth pic "
            className="w-full"
          />
          <h1 className="text-3xl font-bold mt-4">SHODWE E-MAGZ</h1>
          <p className="text-xl mt-2">Dress with purpose, style with confidence—find your inspiration today.</p>
          <button className="bg-black text-white py-2 px-4 mt-4">Read Now</button>
        </div>
      </div>
 
      <div className="lg:w-1/2 w-full flex flex-col items-center text-center lg:text-right mt-8 lg:mt-0">
        <div className="w-3/4 h-lvh	">
          <img
            src={image2}
            alt="Group of people"
            className="w-full"
          />
          <div className="bg-yellow-400 text-black px-4 py-2 mt-4 inline-block">
            READ MAGZ
          </div>
        </div>
      </div>
    </div>
 </>
  );
};

export default Page;
