import React from "react";
import { Outlet } from "react-router-dom";

const Educator = () => {
  return (
    <>
      <h1>educator</h1>

      <div>
        {<Outlet />}
      </div>
    </>
  );
};

export default Educator;
