import React from "react";
import Naproxeno from "../../assets/products/naproxeno.png";
import Paracetamol from "../../assets/products/paracetamol.png";
import VitaminaC from "../../assets/products/vitaminaC.png";
import Buscapina from "../../assets/products/buscapina.png";
import Revidox from "../../assets/products/revidox.png";

import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Naproxeno,
    title: "Naproxeno",
    rating: 4.8,
    aosDelay: "0",
    description:
      "Alivia el dolor y la inflamación. Ideal para dolores musculares y artritis.",
  },
  {
    id: 2,
    img: Paracetamol,
    title: "Paracetamol",
    rating: 4.9,
    aosDelay: "200",
    description:
      "Reduce la fiebre y alivia el dolor leve a moderado. Seguro y efectivo.",
  },
  {
    id: 3,
    img: VitaminaC,
    title: "Vitamina C",
    rating: 4.7,
    aosDelay: "400",
    description: "Refuerza tu sistema inmunológico y mejora tu salud general.",
  },
  {
    id: 4,
    img: Buscapina,
    title: "Buscapina",
    rating: 4.6,
    aosDelay: "600",
    description:
      "Alivia los cólicos y espasmos gastrointestinales de forma rápida.",
  },
  {
    id: 5,
    img: Revidox,
    title: "Revidox",
    rating: 4.5,
    aosDelay: "800",
    description:
      "Suplemento antioxidante que ayuda a retrasar el envejecimiento celular.",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Productos Más Vendidos Para Ti
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Productos
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Descubre los medicamentos y suplementos más populares para cuidar de
            tu salud y bienestar. Encuentra productos de calidad al mejor
            precio.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              Ver todos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
