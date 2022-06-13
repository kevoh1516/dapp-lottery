import { ethers } from "ethers";
import { provider } from "../apis/blockchain";
import mokContract from "./Mok.json"

export const createMokContract = () => {
  const mokAddress = "0x9057A47c975cfc8A65F556172320Ea7b41b42BBe"
  return new ethers.Contract(mokAddress, mokContract.abi, provider);
}