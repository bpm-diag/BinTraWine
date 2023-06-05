// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Distributor.sol";

contract ResellerContract {

    address public owner;
    mapping(address => bool) public authorized;

    DistributorContract distributorContract;

    constructor(address _distributorContractAddress)  {
        owner = msg.sender;
        authorized[owner] = true; 
        distributorContract = DistributorContract(_distributorContractAddress);
        distributorContract.addAuthorized(address(this)); 
    }

    struct ResellerData {

        string typeQuantity;
    }

    mapping(uint256 => ResellerData) batches;

    function addAuthorized(address _address) public {
        require(msg.sender == owner); 
        authorized[_address] = true;
    }

    function removeAuthorized(address _address) public {
        require(msg.sender == owner);
        authorized[_address] = false;
    }

    function setResellerSensors(uint256 _batchId, string memory _typeQuantity) public {

        batches[_batchId].typeQuantity = _typeQuantity;
    }

    function getResellerSensorsData(uint256 _batchId) public view returns(string memory) {
        require(authorized[msg.sender]);
        return batches[_batchId].typeQuantity;
    }

    //Distributor get functions
    function getSaleData(uint256 _batchId) public view returns(string memory, string memory, string memory, string memory, string memory) {
        require(authorized[msg.sender]);
        return distributorContract.getSaleData(_batchId);
    }

}
