import { createContext, useContext, useState } from "react";

export const CasaContext = createContext();

export const CasaProvider = ({children}) => {
    const [casasCol, setCasa] = useState([]);
    console.log(casasCol);
    return (
      <CasaContext.Provider
        value={{
          casasCol,
          setCasa
        }}
      >
        {children}
      </CasaContext.Provider>
    );
}

export const useCasa = () => {
  return useContext(CasaContext)
}