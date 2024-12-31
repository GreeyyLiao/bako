import { handleResponsive } from "../handleResponsive";
import React, { useEffect, useState } from "react";
import "C:/Users/VICTUS/TembakauKu/src/element/responsive.css";

const JudulPaksi = () => {
  const { windowWidth, tampilanMobile } = handleResponsive();

  useEffect(() => {}, [windowWidth, tampilanMobile]);

  return (
    <>
      <header className="headerPaksi">
        <span
          className={`judulTembakauPaksi ${
            tampilanMobile ? "mobile-headerPaksi" : "desktop-headerPaksi"
          }`}
        >
          Tembakau
        </span>
        <span
          className={`judulPaksiPaksi ${
            tampilanMobile ? "mobile-headerPaksi" : "desktop-headerPaksi"
          }`}
        >
          Paksi
        </span>
      </header>
    </>
  );
};
export default JudulPaksi;
