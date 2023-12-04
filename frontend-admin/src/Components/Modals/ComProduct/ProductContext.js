import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [images, setImage] = useState("");
  const [pName, setPName] = useState("");
  const [pPrice, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [details, setDetails] = useState("");
  const [toastMsg, setToastMsg] = useState(true);

  const state = {
    images,
    pName,
    pPrice,
    quantity,
    details,
    toastMsg,
    setImage,
    setPName,
    setPrice,
    setQuantity,
    setDetails,
    setToastMsg,
  };

  return (
    <ProductContext.Provider value={state}>{children}</ProductContext.Provider>
  );
};
