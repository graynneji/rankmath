import React, { createContext, useState } from "react";
const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [navMenu, setNavMenu] = useState(false);
  return (
    <NavContext.Provider value={{ navMenu, setNavMenu }}>
      {children}
    </NavContext.Provider>
  );
};

export default NavContext;
