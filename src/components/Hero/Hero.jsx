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

import Slider from "react-slick";

const ImageList = [
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

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1 className="text-lg sm:text-3xl font-bold">
                    {data.title}
                  </h1>
                  <p className="text-2xl mt-2">
                    <span className="text-green-500 font-bold">
                      Mediformulas: ${data.price.mediformulas.toLocaleString()}{" "}
                      (hasta {data.price.discount}% de ahorro)
                    </span>
                    <br />
                    {data.id === 4 ? (
                      <>
                        <span className="text-gray-800 dark:text-gray-300 font-medium">
                          Farmacias Especializadas: $
                          {data.price.especializadas.toLocaleString()}
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="text-gray-800 dark:text-gray-300 font-medium">
                          Farmacia Ahorro: ${data.price.ahorro.toLocaleString()}
                        </span>
                        <br />
                        <span className="text-gray-800 dark:text-gray-300 font-medium">
                          Farmacia Guadalajara: $
                          {data.price.guadalajara.toLocaleString()}
                        </span>
                      </>
                    )}
                  </p>
                </div>
                <div className="order-1 sm:order-2">
                  <img
                    src={data.img}
                    alt={data.title}
                    className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] object-contain mx-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
