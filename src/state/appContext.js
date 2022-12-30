import React, { createContext, useContext } from "react";

const AppContext = createContext();

export function useCustomContext() {
  return useContext(AppContext);
}

export default AppContext;
