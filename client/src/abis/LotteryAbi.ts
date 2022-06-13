import { ethers } from "ethers";
import { provider } from "../apis/blockchain";
import LotteryContract from "./Lottery.json"

export const createLotteryContract = () => {
  const addr = "0xeE6931ba6B1C5ade5169364C02214075776Bb145"
  return new ethers.Contract(addr, LotteryContract.abi, provider);
}