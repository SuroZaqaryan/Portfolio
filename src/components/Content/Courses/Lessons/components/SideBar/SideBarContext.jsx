import React, {createContext, useEffect, useState} from "react";
export const SideBarContext = createContext();

export default (Component) => (props) => {

  const ls = parseInt(window.localStorage.getItem('values'));
  const [someValue, setSomeValue] = useState((ls!==null) ? [ls] : [25])

  useEffect(() => {
    localStorage.setItem('values', someValue);
  });

  return (
    <SideBarContext.Provider value={{ someValue, setSomeValue }}>
      <Component {...props} />
    </SideBarContext.Provider>
  );
};
