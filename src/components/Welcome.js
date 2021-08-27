import React from "react";
import welc from "./welcome.jpg";

export const Welcome = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", margin: "20px" }}>Greetings!</h1>
      <img className="img-fluid w-100" src={welc} alt="" />
    </>
  );
};
