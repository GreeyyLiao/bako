import { handleResponsive } from "../handleResponsive";
import React, { useEffect, useState } from "react";
import "C:/Users/VICTUS/TembakauKu/src/element/responsive.css";

const JudulLamsi = () => {
  const { windowWidth, tampilanMobile } = handleResponsive();

  useEffect(() => {}, [windowWidth, tampilanMobile]);

  return (
    <>
      <header className="headerLamsi">
        <span
          className={`judulTembakauLamsi ${
            tampilanMobile ? "mobile-headerLamsi" : "desktop-headerLamsi"
          }`}
        >
          Tembakau
        </span>
        <span
          className={`judulLamsiLamsi ${
            tampilanMobile ? "mobile-headerLamsi" : "desktop-headerLamsi"
          }`}
        >
          Lamsi
        </span>
      </header>
    </>
  );
};
export default JudulLamsi;
