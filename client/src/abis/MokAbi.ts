import { ethers } from "ethers";
import { provider } from "../apis/blockchain";
import mokContract from "./Mok.json"

export const createMokContract = () => {
  const mokAddress = "0xD9Ce8021e29BBa23F754cc448171896B4976a716"
  return new ethers.Contract(mokAddress, mokContract.abi, provider);
}