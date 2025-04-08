import React from "react";
import Header from "./Header";
import Timer from "./Timer";

const Stars = () => {
  return (
    <div className="bg-[url(/assets/images/bg-stars.svg)] bg-cover h-[64vh] flex flex-col justify-center items-center">
      <Header />
      <Timer />
    </div>
  );
};

export default Stars;
