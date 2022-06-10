import { ethers } from "ethers";
import { provider } from "../apis/blockchain";
import LotteryContract from "./Lottery.json"

export const createLotteryContract = () => {
  const addr = "0x6f9bf967CFda7F07Ed1Af1299Ce003298fc48359"
  return new ethers.Contract(addr, LotteryContract.abi, provider);
}