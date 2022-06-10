import { ethers } from "ethers";
import { createLotteryContract } from "../abis/LotteryAbi";
import { createMokContract } from "../abis/MokAbi";
import { Lottery, Mok } from "../typechain-types";

// A Web3Provider wraps a standard Web3 provider, which is
// what MetaMask injects as window.ethereum into each pag
export const provider = new ethers.providers.Web3Provider((window as any).ethereum);
export const signer = provider.getSigner();
export const mokContract = (createMokContract()) as Mok;
export const mokWithSigner = mokContract.connect(signer);

export const lotteryContract = (createLotteryContract()) as Lottery;
export const lotteryWithSigner = lotteryContract.connect(signer);