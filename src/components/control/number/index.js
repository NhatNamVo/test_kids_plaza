import React from "react";

import circle1 from "../../../assets/image/circle1.png";
import circle2 from "../../../assets/image/circle2.png";

import Image from "next/image";
import style from "./style.module.scss";

const Number = ({ number = 1, type = "default" }) => {
  const renderImage = () => {
    if (type === "default") {
      return circle1;
    }
    if (type === "red") {
      return circle2;
    }
  };
  return (
    <div className={style.number}>
      <div className={style.image}>
        <img src={renderImage().src} alt="circle" />
      </div>
      <div className={style.content}>{number}</div>
    </div>
  );
};

export default Number;
