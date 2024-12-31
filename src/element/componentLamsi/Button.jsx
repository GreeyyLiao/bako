import { motion } from "framer-motion";
import "./lamsiStyle.css";
import { handleResponsive } from "../handleResponsive";
import "C:/Users/VICTUS/TembakauKu/src/element/responsive.css";
import React, { useEffect, useState } from "react";

const Button = () => {
  const { windowWidth, tampilanMobile } = handleResponsive();

  useEffect(() => {}, [windowWidth, tampilanMobile]);
  return (
    <>
      <div className="clickButton">
        <motion.button
          className={`buttonAll ${
            tampilanMobile ? "mobile-button" : "desktop-button"
          }`}
          role="button"
          type="submit"
        >
          Learn More
        </motion.button>
      </div>
    </>
  );
};
export default Button;
