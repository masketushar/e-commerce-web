import React from "react";
import bo1 from "../../Assets/can 1.webp";
import bo2 from "../../Assets/can 2.webp";
import bo3 from "../../Assets/can 3.webp";
import bo4 from "../../Assets/can 4.webp";



const PageE = () => {
  const products = [
    {
      id: 1,
      image: bo1,
      title: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      price: "$120.23",
      originalPrice: "$120.23",
    },
    {
      id: 2,
      image: bo2,
      title: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      price: "$90.00",
      originalPrice: "$100.00",
    },
    {
      id: 3,
      image: bo3,
      title: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      price: "$140.24",
      originalPrice: "$160.11",
    },
    {
      id: 4,
      image: bo4,
      title: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      price: "$105.23",
      originalPrice: "$120.23",
    },
  ];

  return (
    <div className="w-full px-4 py-8">
      {/* Header Section */}
      <h2 className="text-2xl font-bold text-center mb-6">Popular This Week</h2>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-lg shadow-md overflow-hidden flex flex-col items-center p-4 hover:shadow-lg transition"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover mb-4"
            />

            {/* Product Details */}
            <h3 className="text-sm font-medium text-gray-700 text-center mb-2">
              {product.title}
            </h3>

            {/* Pricing */}
            <div className="text-center mb-2">
              <span className="text-lg font-semibold text-black">
                {product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through ml-2">
                  {product.originalPrice}
                </span>
              )}
            </div>

            {/* Add to Basket */}
            <button className="mt-auto bg-yellow-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-yellow-400 transition">
              + Add to Basket
            </button>
          </div>
        ))}
      </div>

      {/* Featured Section */}
      <div className="mt-6 flex items-center">
        <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
        <span className="text-gray-700 text-sm font-medium">Featured</span>
      </div>
    </div>
  );
};

export default PageE;
