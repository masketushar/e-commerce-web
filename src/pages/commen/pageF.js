import React from "react";

const PageF = () => {
  const items = [
    {
      id: 1,
      image: "https://via.placeholder.com/400", // Replace with actual image URL
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

  const brands = ["Chanel", "D&G", "Dior", "Versace", "Zara", "Gucci"];

  return (
    <div className="w-full px-4 py-8">
      {/* Header Section */}
      <div className="flex items-center mb-6">
        <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
        <h2 className="text-2xl font-bold">New Arrival</h2>
      </div>

      {/* Featured Section */}
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
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{item.description}</p>
              <a
                href="#"
                className="text-blue-500 font-medium hover:underline"
              >
                {item.link}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Brands Section */}
      <div className="text-center">
        <h3 className="text-xl font-bold mb-4">Brands For You</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="text-gray-700 font-medium text-lg hover:text-gray-900"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageF;
