import { motion } from "framer-motion";
import { handleResponsive } from "../handleResponsive";
import React, { useEffect, useState } from "react";
import foto1 from "C:/Users/VICTUS/TembakauKu/src/assets/1Paksi.jpg";
import foto2 from "C:/Users/VICTUS/TembakauKu/src/assets/2.jpg";
import "C:/Users/VICTUS/TembakauKu/src/element/responsive.css";

const IsiPaksi = () => {
  const { windowWidth, tampilanMobile } = handleResponsive();

  useEffect(() => {}, [windowWidth, tampilanMobile]);
  return (
    <>
      <section
        className={`corePaksi ${
          tampilanMobile ? "mobile-corePaksi" : "desktop-corePaksi"
        }`}
      >
        <div
          className={`bagan1 ${
            tampilanMobile ? "mobile-bagan1" : "dektop-bagan1"
          }`}
        >
          <p
            className={`textPaksi ${
              tampilanMobile ? "mobile-textPaksi" : "desktop-textPaksi"
            }`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            dignissim vehicula sagittis. Praesent , consectetur adipiscing elit,
            sed do eiusmod tempor inc blandit orci nec purus cursus, id gravida
            dolor lobortis. Curabitur in viverra mi.
          </p>
          <motion.img
            className={`fotoPaksi ${
              tampilanMobile ? "mobile-fotoPaksi" : "desktop-fortoPaksi"
            }`}
            src={foto2}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.97 }}
          />
        </div>
        <div
          className={`bagan2 ${
            tampilanMobile ? "mobile-bagan2" : "desktop-bagan2"
          }`}
        >
          <figure className="styleGambarPaksi">
            <motion.img
              className={`fotoPaksi ${
                tampilanMobile ? "mobile-fotoPaksi" : "desktop-fotoPaksi"
              }`}
              src={foto1}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.97 }}
            />
          </figure>
          <div
            className={`styleTextPaksi ${
              tampilanMobile
                ? "mobile-styleTextPaksi"
                : "desktop-styleTextPaksi"
            }`}
          >
            <p
              className={`textPaksi ${
                tampilanMobile ? "mobile-textPaksi" : "desktop-textPaksi"
              }`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat."
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default IsiPaksi;
