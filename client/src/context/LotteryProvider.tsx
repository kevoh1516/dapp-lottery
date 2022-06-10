import React, { useState, FC } from 'react';

export interface IThemeContext {
  ticketPrice: number | null;
  setTicketPrice: (val: number | null) => void;
  lotteryPool: number;
  setLotteryPool: (val: number) => void;
}

const defaultState = {
  ticketPrice: null,
  setTicketPrice: () => {},
  lotteryPool: 0,
  setLotteryPool: () => {}
};

export const LotteryContext = React.createContext<IThemeContext>(defaultState);

export const LotteryProvider = ({ children }: any) => {
  const [ticketPrice, setTicketPrice] = useState<number | null>(null);
  const [lotteryPool, setLotteryPool] = useState<number>(0);

  return (
    <LotteryContext.Provider
      value={{
        ticketPrice,
        setTicketPrice,
        lotteryPool,
        setLotteryPool,
      }}
    >
      {children}
    </LotteryContext.Provider>
  );
};