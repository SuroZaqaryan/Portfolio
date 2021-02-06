import React, { createContext, useState } from "react";
export const SideBarContext = createContext();
//connect component with context
export default (Component) => (props) => {
  const [someValue, setSomeValue] = useState([20]);
  return (
    <SideBarContext.Provider
      value={{ someValue, setSomeValue }}
    >
      <Component {...props} />
    </SideBarContext.Provider>
  );
};
