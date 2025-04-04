import React from "react";
import footerLogo from "../../assets/logo.jpeg";
import Banner from "../../assets/wesbite/footer-pattern.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Inicio",
    link: "/#",
  },
  {
    title: "Acerca de",
    link: "/#about",
  },
  {
    title: "Contacto",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          {/* Detalles de la empresa */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="" className="max-w-[50px]" />
              PharmaX
            </h1>
            <p>
              Tu salud es nuestra prioridad. Ofrecemos medicamentos y
              suplementos de calidad para cuidar de ti y tu familia.
            </p>
          </div>

          {/* Enlaces del Footer */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            {/* <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Enlaces Importantes
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}

            {/* Información de contacto */}
            {/* <div>
              <div className="py-8 px-4">
                {/* <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Contacto
                </h1> */}
            {/* <ul className="flex flex-col gap-3">
                  <li className="flex items-center gap-3">
                    <FaLocationArrow />
                    <p>Cuernavaca, Morelos</p>
                  </li>
                  {/* <li className="flex items-center gap-3"> */}
            {/* <FaMobileAlt />
                    <p>+52 777 801 4302</p>
                  </li> */}
            {/* </ul>
              </div>
            </div> */}

            {/* Redes sociales */}
            {/* <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Síguenos
                </h1>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/mediformulas/"
                    className="hover:text-primary duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-3xl" />
                  </a>
                  <a
                    href="https://www.facebook.com/formulasbebecuernajiute/"
                    className="hover:text-primary duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="text-3xl" />
                  </a>
                  {/* <a href="#" className="hover:text-primary duration-300">
                    <FaLinkedin className="text-3xl" />
                  </a> */}
            {/* </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
