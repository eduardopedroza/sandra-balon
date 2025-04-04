import React from "react";
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

const ProductsData = [
  {
    id: 1,
    img: Exforge,
    title:
      "Exforge HCT 5 mg/160 mg/12.5 mg Oral 28 Comprimidos (Antihipertensivos)",
    price: {
      mediformulas: Math.round(910 * 1.1),
      ahorro: 1557,
      guadalajara: 1416,
      discount: 40 - 10,
    },
  },
  {
    id: 2,
    img: Exetin,
    title:
      "Exetin-A 4000U/ml Solución Inyectable, 6 Frascos de 1 ml (Eritropoyetina Humana Recombinante)",
    price: {
      mediformulas: Math.round(910 * 1.1),
      ahorro: 1610,
      guadalajara: 1233,
      discount: 40 - 10,
    },
  },
  {
    id: 3,
    img: Kicab,
    title:
      "KI-CAB Tratamiento para enfermedades relacionadas al ácido (ERGE, Úlcera, H. pylori)",
    price: {
      mediformulas: Math.round(400 * 1.1),
      ahorro: 692,
      guadalajara: 642,
      discount: 43 - 10,
    },
  },
  {
    id: 4,
    img: Victoza,
    title:
      "Victoza (Liraglutida) 6 mg/ml 2 Plumas Precargadas C/3 ml (Antidiabético)",
    price: {
      mediformulas: Math.round(2750 * 1.1),
      especializadas: 4812.41,
      ahorro: "No disponible",
      guadalajara: "No disponible",
      discount: 43 - 10,
    },
  },
  {
    id: 5,
    img: Jardianz,
    title: "Jardianz (Empagliflozina) 25 mg, 30 Tabletas (Antidiabético)",
    price: {
      mediformulas: Math.round(1150 * 1.1),
      ahorro: 1995,
      guadalajara: 1779.94,
      discount: 43 - 10,
    },
  },
  {
    id: 6,
    img: Forxiga,
    title: "Forxiga (Dapagliflozina) 10 mg, 28 Tabletas (Antidiabético)",
    price: {
      mediformulas: Math.round(910 * 1.1),
      ahorro: 1841,
      guadalajara: 1500.24,
      discount: 40 - 10,
    },
  },
  {
    id: 7,
    img: Trayenta,
    title: "Trayenta 5 mg (Linagliptina) 30 Tabletas (Antidiabético)",
    price: {
      mediformulas: Math.round(910 * 1.1),
      ahorro: 1911,
      guadalajara: 1756.29,
      discount: 53 - 10,
    },
  },
  {
    id: 8,
    img: Bedoyecta,
    title:
      "Bedoyecta Tri 10,000 mcg, 100 mg, 50 mg/2 ml Solución Inyectable, 5 Jeringas (Vitaminas)",
    price: {
      mediformulas: Math.round(350 * 1.1),
      ahorro: 462,
      guadalajara: 449.15,
      discount: 25 - 10,
    },
  },
  {
    id: 9,
    img: Terbac,
    title: "Terbac LM 1 gr, (Ceftriaxona) Solución Inyectable (Antibiótico)",
    price: {
      mediformulas: Math.round(200 * 1.1),
      ahorro: 399,
      guadalajara: 256.5,
      discount: 21 - 10,
    },
  },
  {
    id: 10,
    img: HepaMerz,
    title:
      "Hepa Merz 3 gr, 10 Sobres Granulado (L-Ornitina L-Aspartato) (Hepatopatía, Cirrosis, Hígado graso)",
    price: {
      mediformulas: Math.round(350 * 1.1),
      ahorro: 498,
      guadalajara: 444.65,
      discount: 30 - 10,
    },
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
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
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3 border p-4 rounded-md shadow-sm w-full"
              >
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-[220px] w-[150px] object-cover rounded-md mx-auto"
                />
                <div className="text-center">
                  <h3 className="font-semibold">{data.title}</h3>
                  <div className="mt-2">
                    <p className="text-green-600 font-semibold">
                      Tu Precio: ${data.price.mediformulas}
                    </p>
                    <div className="text-red-500 text-sm">
                      {data.price.ahorro !== "No disponible" && (
                        <p>Ahorro: ${data.price.ahorro}</p>
                      )}
                      {data.price.guadalajara !== "No disponible" && (
                        <p>Guadalajara: ${data.price.guadalajara}</p>
                      )}
                      {data.price.especializadas && (
                        <p>Especializadas: ${data.price.especializadas}</p>
                      )}
                    </div>
                    <p className="text-blue-500 text-sm font-semibold">
                      Ahorras: {data.price.discount}%
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              Ver todos
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Products;
