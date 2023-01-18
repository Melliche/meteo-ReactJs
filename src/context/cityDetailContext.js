import { createContext } from "react";
import { useParams } from "react-router-dom";

export const CityDetailContext = createContext(null);

export function TodosProvider({ children }) {
  const { insee } = useParams();

  return (
    <CityDetailContext.Provider value={insee}>
      {children}
    </CityDetailContext.Provider>
  );
}