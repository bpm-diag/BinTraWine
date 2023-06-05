// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./GrapeGrower.sol";

contract WineContract {

    address public owner;
    mapping(address => bool) public authorized;

    GrapeContract grapeContract;
    
    constructor(address _grapeGrowerContractAddress)  {
        owner = msg.sender;
        authorized[owner] = true; 
        grapeContract = GrapeContract(_grapeGrowerContractAddress);
        grapeContract.addAuthorized(address(this)); 
    }

    struct WineProducerData {
        
        string winemakingProducts;
        string obtainedWineQuantity;
        string claimedWineQuantity;
        string weightAtDelivery;
        string finalProductWeight;
        string containerId;
        string containerTemperature;
    }

    mapping(uint256 => WineProducerData) batches;

    uint256 idWinemakingProductsSerial = 1;
    uint256 idObtainedWineQuantitySerial = 1;
    uint256 idClaimedWineQuantitySerial = 1;

    function addAuthorized(address _address) public {
        require(msg.sender == owner); 
        authorized[_address] = true;
    }

    function removeAuthorized(address _address) public {
        require(msg.sender == owner);
        authorized[_address] = false;
    }

    function setWinemakingProducts(string memory _winemakingProducts) public {
        require(authorized[msg.sender]);
        batches[idWinemakingProductsSerial].winemakingProducts = _winemakingProducts;
        idWinemakingProductsSerial++;
    }

    function setObtainedWineQuantity(string memory _obtainedWineQuantity) public {
        require(authorized[msg.sender]);
        batches[idObtainedWineQuantitySerial].obtainedWineQuantity = _obtainedWineQuantity;
        idObtainedWineQuantitySerial++;
    }

    function setClaimedWineQuantity(string memory _claimedWineQuantity) public {
        require(authorized[msg.sender]);
        batches[idClaimedWineQuantitySerial].claimedWineQuantity = _claimedWineQuantity;
        idClaimedWineQuantitySerial++;
    }

    function setWineProducerSensors(uint256 _batchId, string memory _weightAtDelivery, string memory _finalProductWeight, string memory _containerId, string memory _containerTemperature) public {

        batches[_batchId].weightAtDelivery = _weightAtDelivery;
        batches[_batchId].finalProductWeight = _finalProductWeight;
        batches[_batchId].containerId = _containerId;
        batches[_batchId].containerTemperature = _containerTemperature;
    }

    function getIdWinemakingProductsSerial() public view returns(uint256) {
        require(authorized[msg.sender]);
        return idWinemakingProductsSerial;
    }

    function getIdObtainedWineQuantitySerial() public view returns(uint256) {
        require(authorized[msg.sender]);
        return idObtainedWineQuantitySerial;
    }

    function getIdClaimedWineQuantitySerial() public view returns(uint256) {
        require(authorized[msg.sender]);
        return idClaimedWineQuantitySerial;
    }

    function getWinemakingProducts(uint256 _batchId) public view returns(string memory) {
        require(authorized[msg.sender]);
        return batches[_batchId].winemakingProducts;
    }

    function getObtainedWineQuantity(uint256 _batchId) public view returns(string memory) {
        require(authorized[msg.sender]);
        return batches[_batchId].obtainedWineQuantity;
    }

    function getClaimedWineQuantity(uint256 _batchId) public view returns(string memory) {
        require(authorized[msg.sender]);
        return batches[_batchId].claimedWineQuantity;
    }

    function getWineProducerSensorsData(uint256 _batchId) public view returns(string memory, string memory, string memory, string memory) {
        require(authorized[msg.sender]);
        return (batches[_batchId].weightAtDelivery, batches[_batchId].finalProductWeight, batches[_batchId].containerId, batches[_batchId].containerTemperature);
    }

    //Grape Grower get functions
    function getSaleData(uint256 _saleId) public view returns(string memory, string memory, string memory, string memory, string memory) {
        require(authorized[msg.sender]);
        return grapeContract.getSaleData(_saleId);
    }

    function getGrapeGrowerWeight(uint256 _batchId) public view returns(string memory) {
        require(authorized[msg.sender]);
        (string memory grapeGrowerWeight,,,,) = grapeContract.getGrapeGrowerSensorsData(_batchId);
        return grapeGrowerWeight;
    }

    function getHarvestDate(uint256 _batchId) public view returns(string memory) {
        require(authorized[msg.sender]);
        return grapeContract.getHarvestDate(_batchId);
    }

    function getGrapesIntendedUse(uint256 _batchId) public view returns(string memory) {
        require(authorized[msg.sender]);
        return grapeContract.getGrapesIntendedUse(_batchId);
    }

    function getGrapeType(uint256 _batchId) public view returns(string memory) {
        require(authorized[msg.sender]);
        (,string memory grapeType,,,) = grapeContract.getGrapeGrowerSensorsData(_batchId);
        return grapeType;
    }

}
