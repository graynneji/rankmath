import { createContext, useState } from "react";
const DropDownContext = createContext();
export const DropDownProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DropDownContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DropDownContext.Provider>
  );
};

export default DropDownContext;
