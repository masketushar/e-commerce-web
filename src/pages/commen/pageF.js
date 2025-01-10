import React from "react";

const PageF = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div className="w-3 h-6 bg-yellow-500 rounded  flex">
        <span className="text-gray-700 ml-3 text-sm font-medium">Featured</span>
      </div>
      <div className="flex items-center mb-6">
        <h1 className="text-2xl font-bold">New Arrival</h1>
      </div>
      <div className="bg-gray-800 text-white p-4 rounded-lg">
        <img
          src="https://images.unsplash.com/photo-1709587797077-7a2c94411514?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="PlayStation 5"
          className="w-full h-auto mb-4"
        />
        <h2 className="text-xl font-bold">PlayStation 5</h2>
        <p>Black and White version of the PS5 coming out on sale.</p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
          Shop Now
        </button>
      </div>
      <div className="bg-gray-800 text-white p-4 rounded-lg">
        <img
          src="https://images.unsplash.com/photo-1576570734316-e9d0317d7384?q=80&w=1781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Women's Collections"
          className="w-full h-auto mb-4"
        />
        <h2 className="text-xl font-bold">Women's Collections</h2>
        <p>Featured woman collections that give you another vibe.</p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
          Shop Now
        </button>
      </div>
      <div className="bg-gray-800 text-white p-4 rounded-lg">
        <img
          src="https://images.unsplash.com/photo-1491692222645-c1279173890b?q=80&w=1850&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Speakers"
          className="w-full h-auto mb-4"
        />
        <h2 className="text-xl font-bold">Speakers</h2>
        <p>Amazon wireless speakers.</p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
          Shop Now
        </button>
      </div>
      <div className="bg-gray-800 text-white p-4 rounded-lg">
        <img
          src="https://images.unsplash.com/photo-1645676525012-939439cfc560?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8R1VDQ0klMjBJTlRFTlNFJTIwT1VEJTIwaGR8ZW58MHx8MHx8fDA%3D"
          alt="Gucci Intense Oud"
          className="w-full h-auto mb-4"
        />
        <h2 className="text-xl font-bold">GUCCI INTENSE OUD</h2>
      </div>
    </div>
  );
};

export default PageF;
