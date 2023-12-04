import React, { createContext, useState } from "react";

const RulesContext = createContext();

const RulesProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <RulesContext.Provider value={{ openModal, setOpenModal }}>
      {children}
    </RulesContext.Provider>
  );
};

export { RulesContext, RulesProvider };
