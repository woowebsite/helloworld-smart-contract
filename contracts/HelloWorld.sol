// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract HelloWorld {
    string public name;
    address private owner;

    constructor() {
        name = "nghiem";
        owner = msg.sender;
    }

    event NameEvent(string evPram);

    modifier onlyOwner() {
        require(msg.sender == owner, "is owner");

        _;
    }

    function getName() public view returns (string memory) {
        return (name);
    }

    function changeName(string memory _name) public onlyOwner {
        name = _name;
        emit NameEvent(name);
    }
}
