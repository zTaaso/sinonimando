import React, { useContext, createContext } from 'react';

const SynonymsContext = createContext();

export default function SynonymsProvider({ children }) {
  return <SynonymsContext.Provider value={}></SynonymsContext.Provider>;
}
