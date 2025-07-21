import React, { createContext } from "react";

export const BContext = createContext();

export const Usecontext = ({ children }) => {
  const myname = "soudip";
  return (<BContext value={myname}>{children}</BContext>);
};
