import React, { useState, useEffect } from "react";
// import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);

  const bcg = rgb.join(",");
  // const hex = rgbToHex(...rgb);

  // const handleCopy = () => {
  //   navigator.clipboard.writeText(hexColor);
  //   // we can use this alert calling in this way and also using useEffect hook
  //   setAlert(true);
  //   setTimeout(() => {
  //     setAlert(false);
  //   }, 1500);
  // };

  useEffect(() => {
    // this useEffect is also been cleaned up.
    const timeOut = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [alert]);

  return (
    <article
      className={`color ${index >= 10 && "color-light"}`}
      // onClick={handleCopy}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexColor);
      }}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{`#${hexColor}`}</p>
      {alert ? <p className="alert">copied to clipboard</p> : null}
    </article>
  );
};

export default SingleColor;
