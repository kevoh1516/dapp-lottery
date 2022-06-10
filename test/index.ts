import { TransactionResponse } from "@ethersproject/abstract-provider";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { BigNumber, Contract, ContractFactory } from "ethers";
import { ethers } from "hardhat";
import { Lottery__factory, Mok, Mok__factory } from '../typechain-types'
import { Lottery } from '../typechain-types'

describe("Lottery", function () {

  let mok: Mok;
  let lottery: Lottery;
  let Mok: Mok__factory;
  let Lottery: Lottery__factory;
  let ticketPrice: number;
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;

  before(async () => {
    Mok = await ethers.getContractFactory("Mok");
    Lottery = await ethers.getContractFactory("Lottery");
    [owner, addr1] = await ethers.getSigners();

    mok = await Mok.deploy();
    await mok.deployed();

    lottery = await Lottery.deploy(
      mok.address, 
      owner.address, 
      addr1.address, 
      addr1.address
    );
    await lottery.deployed();

    ticketPrice = (await lottery.getTicketPrice()).toNumber();
  });

  beforeEach(async () => {
    mok = await Mok.deploy();
    await mok.deployed();

    lottery = await Lottery.deploy(
      mok.address, 
      owner.address, 
      addr1.address, 
      addr1.address
    );    
    await lottery.deployed();

    await mok.mintself();
    await mok.connect(addr1).mintself();
    await mok.approve(lottery.address, 1000);
    await mok.connect(addr1).approve(lottery.address, 1000);
  })

  it("Should buy one ticket", async function () {
    await lottery.buyTicket(1);
    expect(await lottery.getTotalTickets()).to.equal(1);
    expect(await mok.balanceOf(lottery.address)).to.equal(ticketPrice);
    expect(await lottery.getTicketOwner(0)).to.equal(owner.address);
  });

  it("Should buy three tickets", async function () {
    await lottery.buyTicket(3);
    expect(await lottery.getTotalTickets()).to.equal(3);
    expect(await mok.balanceOf(lottery.address)).to.equal(ticketPrice * 3);
    expect(await lottery.getTicketOwner(0)).to.equal(owner.address);
    expect(await lottery.getTicketOwner(1)).to.equal(owner.address);
    expect(await lottery.getTicketOwner(2)).to.equal(owner.address);
  })

  it("Should buy three tickets with one accounts and three with another", async function () {
    await lottery.buyTicket(3);
    expect(await lottery.getTotalTickets()).to.equal(3);
    expect(await mok.balanceOf(lottery.address)).to.equal(ticketPrice * 3);
    expect(await lottery.getTicketOwner(0)).to.equal(owner.address);
    expect(await lottery.getTicketOwner(1)).to.equal(owner.address);
    expect(await lottery.getTicketOwner(2)).to.equal(owner.address);

    await lottery.connect(addr1).buyTicket(3);
    expect(await lottery.getTotalTickets()).to.equal(6);
    expect(await mok.balanceOf(lottery.address)).to.equal(ticketPrice * 6);
    expect(await lottery.getTicketOwner(3)).to.equal(addr1.address);
    expect(await lottery.getTicketOwner(4)).to.equal(addr1.address);
    expect(await lottery.getTicketOwner(5)).to.equal(addr1.address);
  })

  it("Addr1 should buy the lottery and owner should draw the lottery and addr1 should win the lottery", async function () {
    const initialBal: BigNumber = await mok.balanceOf(addr1.address);
    await lottery.connect(addr1).buyTicket(1);
    const drawLotteryTx: TransactionResponse = await lottery.connect(owner).drawLottery();
    await drawLotteryTx.wait();
    expect(await mok.balanceOf(addr1.address)).to.equal(initialBal.toNumber() - (ticketPrice * (500 / 10000)));
    expect(await mok.balanceOf(lottery.address)).to.equal(await lottery.getUsageFees());
  })

  it("Should revert trying to draw the lottery twice in less then 5 minutes", async function () {
    const initialBal: BigNumber = await mok.balanceOf(addr1.address);
    await lottery.connect(addr1).buyTicket(1);
    const drawLotteryTx: TransactionResponse = await lottery.connect(owner).drawLottery();
    await drawLotteryTx.wait();
    await expect(lottery.connect(owner).drawLottery()).to.be.reverted;
  })
});
