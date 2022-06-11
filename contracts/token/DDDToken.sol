// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "./ERC20/ERC20.sol";
import "../utils/Ownable.sol";

// @title Dragma game produce token
// @notice Simple implementation of a {ERC20} token
// Desirable Dragma Dragon
contract DDDToken is ERC20, Ownable {
    uint256 supply = 420000000 * 10 ** decimals();

    constructor() ERC20("DesirableDragomaDragon", "DDD") {
        _mint(msg.sender, supply);
    }

    function mint(uint256 amount) public virtual onlyOwner returns (bool){
        _mint(msg.sender, amount);
        return true;
    }
}
