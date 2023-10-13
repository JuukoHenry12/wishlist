// TotalContext.js
import{ createContext, useContext, useState } from 'react';

const TotalContext = createContext();

export function useTotal() {
  return useContext(TotalContext);
}

export function TotalProvider({ children }) {
  const [total, setTotal] = useState(0);

  return (
    <TotalContext.Provider value={{ total, setTotal }}>
      {children}
    </TotalContext.Provider>
  );
}
