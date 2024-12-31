import foto1 from "C:/Users/VICTUS/TembakauKu/src/assets/1lamsi.jpg";
import foto2 from "C:/Users/VICTUS/TembakauKu/src/assets/2lamsi.jpg";
import { motion } from "framer-motion";
import { handleResponsive } from "../handleResponsive";
import "C:/Users/VICTUS/TembakauKu/src/element/responsive.css";
import React, { useEffect, useState } from "react";

const isiLamsi = () => {
  const { windowWidth, tampilanMobile } = handleResponsive();

  useEffect(() => {}, [windowWidth, tampilanMobile]);
  return (
    <>
      <section
        className={`coreLamsi ${
          tampilanMobile ? "mobile-coreLamsi" : "desktop-coreLamsi"
        }`}
      >
        <p className={`textLamsi ${tampilanMobile ? "mobile-textLamsi" : "desktop-textLamsi"}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, magni
          sint nemo alias reiciendis eum ab corporis quam eius perspiciatis
          consequatur? Earum dolores, ea sit perspiciatis repellat, sapiente
          laboriosam deserunt facere, totam dolor assumenda asperiores aperiam
          veritatis cum provident. Nisi molestiae id voluptatibus libero
          blanditiis dicta nobis amet, eaque recusandae obcaecati nostrum quod
          soluta iusto exercitationem dolorem, fugiat doloremque debitis? Lorem
          ipsum dolor sit am et consectetur adipisicing elit. Nostrum pariatur
          harum repellat. Deleniti qui officiis, sunt totam magnam mollitia
          similique.
        </p>
        <figure
          className={`styleGambarLamsi ${
            tampilanMobile
              ? "mobile-styleGambarLamsi"
              : "desktop-styleGambarLamsi"
          } `}
        >
          <motion.img
            className={`fotoLamsi ${
              tampilanMobile ? "mobile-fotoLamsi" : "desktop-fotoLaamsi"
            }`}
            src={foto1}
            alt=""
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.97 }}
          />
          <motion.img
            className={`fotoLamsi ${
              tampilanMobile ? "mobile-fotoLamsi" : "desktop-fotoLaamsi"
            }`}
            src={foto2}
            alt=""
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.97 }}
          />
        </figure>
      </section>
    </>
  );
};
export default isiLamsi;
