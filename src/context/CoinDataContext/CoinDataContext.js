import React, { createContext, useState } from "react";

export const CoinDataContext = createContext();

const CoinDataContextProvider = ({ children }) => {
  const [coinData, setCoinData] = useState(null);

  const coinDataInfo = {
    coinData,
    setCoinData,
  };

  return (
    <CoinDataContext.Provider value={coinDataInfo}>
      {children}
    </CoinDataContext.Provider>
  );
};

export default CoinDataContextProvider;
