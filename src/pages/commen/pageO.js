import React from "react";

const PageF = () => {
  const items = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1709587797077-7a2c94411514?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL
      title: "PlayStation 5",
      description: "Black and White version of the PS5 coming out on sale.",
      link: "Shop Now",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/400", // Replace with actual image URL
      title: "Women's Collections",
      description: "Featured woman collections that give you another vibe.",
      link: "Shop Now",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/400", // Replace with actual image URL
      title: "Speakers",
      description: "Amazon wireless speakers.",
      link: "Shop Now",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/400", // Replace with actual image URL
      title: "Gucci Perfume",
      description: "Gucci Intense Oud Eau de Parfum.",
      link: "Shop Now",
    },
  ];
  return (
    <div className="w-full px-4 py-8">
      <div className="w-3 h-6 bg-yellow-500 rounded  flex">
        <span className="text-gray-700 ml-3 text-sm font-medium">Featured</span>
      </div>
      <div className="flex items-center mb-6">
        <h1 className="text-2xl font-bold">New Arrival</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white border rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full md:w-1/2 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}{" "}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{item.description}</p>
              <a href="#" className="text-blue-500 font-medium hover:underline">
                {item.link}{" "}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageF;


// home section 
        <Login/>
        import Login from "../AuthForm/login"



        <Route path="/Login" element={<Login />} />
        import Login from "./AuthForm/login";




         <>
            <div className="flex h-1/2 p-2 bg-white ">
              <div className="w-3/5 relative h-lvh   flex flex-col items-center text-center lg:text-left	">
                <img src={image2} alt="cloth pic " className="w-full h-2/11" />
                <div className="absolute text-white  bottom-8">
                  <h1 className="text-3xl font-bold mt-4">SHODWE E-MAGZ</h1>
                  <p className="text-xl mt-2">
                    Dress with purpose,<br></br> style with confidence—find your
                    inspiration today.
                  </p>
                  <button className="bg-yellow-400 text-white py-2 px-4 mt-4">
                    Read Now
                  </button>
                </div>
              </div>
        
              <div className="lg:w-1/2 w-2/5 flex flex-col items-center text-center lg:text-right mt-1 lg:mt-0">
                <div className="w-auto h-lvh	 relative">
                  <img src={image1} alt=" people"  />
                  <div className="absolute bottom-10 center bg-yellow-400 text-black px-4 py-2 mt-1 ">
                    READ MAGZ
                  </div>
                </div>
              </div>
            </div>
          </>