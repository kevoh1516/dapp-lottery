//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "hardhat/console.sol";

contract Mok is ERC20 {
    address public owner;

    constructor() ERC20("Fixed", "FIX") {
      owner = msg.sender;
      _mint(msg.sender, 10000);
    }

    function mintself() public {
      _mint(msg.sender, 1000);
    }

    function myBalance() public view returns (uint256) {
      return balanceOf(msg.sender);
    }

    receive() external payable {
      console.log("in receive function");
    }

    fallback() external payable {
      console.log("in fallback");
    }
}