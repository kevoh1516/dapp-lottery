//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Lottery is AccessControl {
  mapping(uint => address) public ticketsToPlayers;

  bytes32 public constant OWNER_ROLE = keccak256("OWNER_ROLE");
  bytes32 public constant MANAGER_ROLE = keccak256("MANAGER_ROLE");

  IERC20 MokContract;

  uint public ticketPrice;
  uint public totalTickets;
  uint public usageFees;
  uint public sinceDraw;

  event Winner(address winner);

  constructor(address mokAddress, address owner, address manager1, address manager2) {
    ticketPrice = 20;
    totalTickets = 0;
    sinceDraw = 0;
    MokContract = IERC20(mokAddress);
    _setupRole(OWNER_ROLE, owner);
    _setupRole(MANAGER_ROLE, manager1);
    _setupRole(MANAGER_ROLE, manager2);
    _setupRole(MANAGER_ROLE, owner);
  }

  function buyTicket(uint numTickets) external {
    uint totalPrice = ticketPrice * numTickets;
    MokContract.transferFrom(msg.sender, address(this), totalPrice);
    for(uint i = totalTickets; i < totalTickets + numTickets; i++){
      ticketsToPlayers[i] = msg.sender;
    }
    totalTickets += numTickets;
    usageFees += totalPrice * 500 / 10000;
  }

  function drawLottery() external onlyRole(MANAGER_ROLE) {
    require(block.timestamp - sinceDraw > 60000, "Wait 1 minutes between each draw.");

    uint ticketDraw = randomDraw();
    address winner = ticketsToPlayers[ticketDraw];
    uint totalPool = MokContract.balanceOf(address(this));
    uint lotteryPool = totalPool - usageFees;
    MokContract.approve(winner, lotteryPool);
    MokContract.transfer(winner, lotteryPool);
    emit Winner(winner);

    totalTickets = 0;
    sinceDraw = block.timestamp;
  }

  function getUsageFees() external view returns (uint) {
    return usageFees;
  }

  function getTicketOwner(uint ticketNumber) external view returns (address) {
    return ticketsToPlayers[ticketNumber];
  }

  function getTotalTickets() external view returns (uint) {
    return totalTickets;
  }

  function getTicketPrice() external view returns (uint) {
    return ticketPrice;
  }

  function setTicketPrice(uint price) external onlyRole(OWNER_ROLE) {
    ticketPrice = price;
  }

  function randomDraw() private view returns (uint) {
    return random() % totalTickets;
  }

  function random() private view returns (uint) {
    return uint(keccak256(abi.encodePacked(totalTickets)));
  }
}