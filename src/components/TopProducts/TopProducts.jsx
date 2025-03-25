import React from "react";
import { FaStar } from "react-icons/fa";
import Exforge from "../../assets/hero/Exforge.webp";
import Exetin from "../../assets/hero/Extetin.jpg";
import Kicab from "../../assets/hero/Ki-Cab.webp";
import Victoza from "../../assets/hero/Victoza.webp";
import Jardianz from "../../assets/hero/Jardianz.webp";
import Forxiga from "../../assets/hero/Forxiga.webp";
import Trayenta from "../../assets/hero/Trayenta.webp";
import Bedoyecta from "../../assets/hero/Beyodecta.webp";
import Terbac from "../../assets/hero/Terbac.webp";
import HepaMerz from "../../assets/hero/HepaMerz.webp";

const TopProductsData = [
  {
    id: 1,
    img: Exforge,
    title: "Exforge",
    description: "Antihipertensivo de alta eficacia.",
  },
  {
    id: 2,
    img: Exetin,
    title: "Exetin-A",
    description:
      "Eritropoyetina Humana Recombinante para tratamiento de anemia.",
  },
  {
    id: 3,
    img: Kicab,
    title: "KI-CAB",
    description: "Tratamiento para enfermedades gastrointestinales.",
  },
  {
    id: 4,
    img: Victoza,
    title: "Victoza",
    description: "Medicamento antidiabético para control de glucosa.",
  },
  {
    id: 5,
    img: Jardianz,
    title: "Jardianz",
    description: "Antidiabético para la reducción de glucosa en sangre.",
  },
  {
    id: 6,
    img: Forxiga,
    title: "Forxiga",
    description: "Dapagliflozina para el tratamiento de diabetes tipo 2.",
  },
  {
    id: 7,
    img: Trayenta,
    title: "Trayenta",
    description: "Linagliptina para el manejo de la diabetes.",
  },
  {
    id: 8,
    img: Bedoyecta,
    title: "Bedoyecta",
    description: "Suplemento vitamínico inyectable.",
  },
  {
    id: 9,
    img: Terbac,
    title: "Terbac",
    description: "Ceftriaxona inyectable, antibiótico de amplio espectro.",
  },
  {
    id: 10,
    img: HepaMerz,
    title: "Hepa Merz",
    description: "Tratamiento para enfermedades hepáticas.",
  },
];

const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div className="container">
      <div className="text-left mb-24">
        <p className="text-sm text-primary">Productos Más Valorados Para Ti</p>
        <h1 className="text-3xl font-bold">Mejores Productos</h1>
        <p className="text-xs text-gray-400">
          Descubre los medicamentos más recomendados para cuidar de tu salud y
          bienestar.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
        {TopProductsData.map((data) => (
          <div
            key={data.id}
            className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
          >
            <div className="h-[100px]">
              <img
                src={data.img}
                alt={data.title}
                className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
              />
            </div>
            <div className="p-4 text-center">
              <div className="w-full flex items-center justify-center gap-1">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>
              <h1 className="text-xl font-bold">{data.title}</h1>
              <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                {data.description}
              </p>
              <button
                className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                onClick={handleOrderPopup}
              >
                Ordenar Ahora
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
