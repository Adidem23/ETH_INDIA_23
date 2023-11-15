//SPDX-License-Identifier:MIT

pragma solidity ^0.8.10;

contract Simple{

    uint256 number;

    function getnumber() public view returns (uint256) {
        return number;
    }

   function setNUmber(uint256 _value) external{
      number=_value;
   }

   
}