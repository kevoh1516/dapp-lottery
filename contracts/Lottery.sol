//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract Lottery is AccessControl {
  mapping(uint => address) public ticketsToPlayers;

  bytes32 public constant OWNER_ROLE = keccak256("OWNER_ROLE");
  bytes32 public constant MANAGER_ROLE = keccak256("MANAGER_ROLE");

  using SafeERC20 for IERC20;
  IERC20 MokContract;

  uint public ticketPrice;
  uint public totalTickets;
  uint public usageFees;
  uint public sinceDraw;

  event Winner(address winner, uint lotteryPool);
  event BuyTicket(address buyer, uint numTickets);
  event SetTicketPrice(address setter, uint oldTicketPrice, uint newTicketPrice);

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
    for(uint i = totalTickets; i < totalTickets + numTickets; i++){
      ticketsToPlayers[i] = msg.sender;
    }
    totalTickets += numTickets;
    usageFees += totalPrice * 500 / 10000;
    MokContract.safeTransferFrom(msg.sender, address(this), totalPrice);
    emit BuyTicket(msg.sender, numTickets);
  }

  function drawLottery() external onlyRole(MANAGER_ROLE) {
    uint lotteryPool = MokContract.balanceOf(address(this)) - usageFees;
    require(block.timestamp - sinceDraw > 1 minutes, "Wait 1 minutes between each draw.");
    require(lotteryPool > 0, "Nothing in the lottery to draw.");

    uint ticketDraw = randomDraw();
    address winner = ticketsToPlayers[ticketDraw];

    totalTickets = 0;
    sinceDraw = block.timestamp;

    MokContract.safeTransfer(winner, lotteryPool);
    emit Winner(winner, lotteryPool);
  }

  function setTicketPrice(uint price) external onlyRole(OWNER_ROLE) {
    uint oldTicketPrice = ticketPrice;
    ticketPrice = price;
    emit SetTicketPrice(msg.sender, oldTicketPrice, ticketPrice);
  }

  function randomDraw() private view returns (uint) {
    return random() % totalTickets;
  }

  function random() private view returns (uint) {
    return uint(keccak256(abi.encodePacked(totalTickets)));
  }
}