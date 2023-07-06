// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Filler.sol";

contract DistributorContract {

    address public owner;
    mapping(address => bool) public authorized;

    FillerContract fillerContract;
    
    constructor(address _fillerContractAddress)  {
        owner = msg.sender;
        authorized[owner] = true; 
        fillerContract = FillerContract(_fillerContractAddress);
        fillerContract.addAuthorized(address(this)); 
    }

    struct DistributorData {

        string deliveryDestination;
        string transportedQuantity;
        string transportTemperature;
        string batch;
    }

    struct SaleData {
        string salePrice;
        string productName;
        string amount;
        string resellerName;
        string saleDate;
    }

    mapping(uint256 => DistributorData) batches;
    mapping(uint256 => SaleData) sales;
    mapping(uint => mapping(address => bool)) allowedAddressesSales; 

    uint256 idDeliveryDestinationSerial = 1;
    uint256 idSaleSerial = 1;

    function addAuthorized(address _address) public {
        require(msg.sender == owner); 
        authorized[_address] = true;
    }

    function removeAuthorized(address _address) public {
        require(msg.sender == owner);
        authorized[_address] = false;
    }

    function setDeliveryDestination(string memory _deliveryDestination) public {
        require(authorized[msg.sender]);
        batches[idDeliveryDestinationSerial].deliveryDestination = _deliveryDestination;
        idDeliveryDestinationSerial++;
    }

    function setSaleData(string memory _salePrice, string memory _productName, string memory _amount, string memory _resellerName,
        string memory _saleDate, address[] memory _addresses) public {
        require(authorized[msg.sender]);
        sales[idSaleSerial].salePrice = _salePrice;
        sales[idSaleSerial].productName = _productName;
        sales[idSaleSerial].amount = _amount;
        sales[idSaleSerial].resellerName = _resellerName;
        sales[idSaleSerial].saleDate = _saleDate;

         for(uint i=0; i<_addresses.length; i++){ 
            if(_addresses[i] != address(0)) { 
                allowedAddressesSales[idSaleSerial][msg.sender] = true; 
                allowedAddressesSales[idSaleSerial][_addresses[i]] = true; 
            }
        }

        idSaleSerial++;
    }

    function setDistributorSensors(uint256 _batchId, string memory _transportedQuantity, string memory _transportTemperature) public {

        batches[_batchId].transportedQuantity = _transportedQuantity;
        batches[_batchId].transportTemperature = _transportTemperature;
        
    }

    function getIdDeliveryDestinationSerial() public view returns(uint256) {
        require(authorized[msg.sender]);
        return idDeliveryDestinationSerial;
    }

    function getIdSaleSerial() public view returns(uint256) {
        require(authorized[msg.sender]);
        return idSaleSerial;
    }

    function getDeliveryDestination(uint256 _batchId) public view returns(string memory) {
        require(authorized[msg.sender]);
        return batches[_batchId].deliveryDestination;
    }

    function getSaleData(uint256 _saleId) public view returns(string memory, string memory, string memory, string memory, string memory) {
        require(authorized[msg.sender]);
        
        if (allowedAddressesSales[_saleId][msg.sender] == true) { 
            return (sales[_saleId].salePrice, sales[_saleId].productName, sales[_saleId].amount, sales[_saleId].resellerName,
            sales[_saleId].saleDate);
        } else {
            revert("User not authorized"); 
        }
    }

    function getDistributorSensorsData(uint256 _batchId) public view returns(string memory, string memory) {
        require(authorized[msg.sender]);
        return (batches[_batchId].transportedQuantity, batches[_batchId].transportTemperature);
    }

    //Filler get functions
    function getBarCode(uint256 _batchId) public view returns(string memory) {
        return fillerContract.getBarCode(_batchId);
    }

}
