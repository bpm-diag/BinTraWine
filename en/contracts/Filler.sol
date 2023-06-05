// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./WineProducer.sol";
import "./GrapeGrower.sol";

contract FillerContract {

    address public owner;
    mapping(address => bool) public authorized;

    WineContract wineContract;
    GrapeContract grapeContract;
    
    constructor(address _wineContractAddress, address _grapeContractAddress)  {
        owner = msg.sender;
        authorized[owner] = true; 
        wineContract = WineContract(_wineContractAddress);
        grapeContract = GrapeContract(_grapeContractAddress);
        
        wineContract.addAuthorized(address(this)); 
        grapeContract.addAuthorized(address(this)); 
    }

    struct FillerData {

        
        string sulfites;
        string allergenes;
        string grapeProvenance;
        string barCode;
        string receivedProductQuantity;
        string bottledWineQuantity;
        string alcoholContent;
    }

    mapping(uint256 => FillerData) batches;

    uint256 idSulfitesSerial = 1;
    uint256 idAllergenesSerial = 1;
    uint256 idGrapeProvenanceSerial = 1;
    uint256 idBarCodeSerial = 1;

    
    function addAuthorized(address _address) public {
        require(msg.sender == owner); 
        authorized[_address] = true;
    }

    function removeAuthorized(address _address) public {
        require(msg.sender == owner);
        authorized[_address] = false;
    }

    function setSulfites(string memory _sulfites) public {
        require(authorized[msg.sender]);
        batches[idSulfitesSerial].sulfites = _sulfites;
        idSulfitesSerial++;
    }

    function setAllergenes(string memory _allergenes) public {
        require(authorized[msg.sender]);
        batches[idAllergenesSerial].allergenes = _allergenes;
        idAllergenesSerial++;
    }

    function setGrapeProvenance(string memory _grapeProvenance) public {
        require(authorized[msg.sender]);
        batches[idGrapeProvenanceSerial].grapeProvenance = _grapeProvenance;
        idGrapeProvenanceSerial++;
    }

    function setBarCode(string memory _barCode) public {
        require(authorized[msg.sender]);
        batches[idBarCodeSerial].barCode = _barCode;
        idBarCodeSerial++;
    }

    function setFillerSensors(uint256 _batchId, string memory _receivedProductQuantity, string memory _bottledWineQuantity, string memory _alcoholContent) public {

        batches[_batchId].receivedProductQuantity = _receivedProductQuantity;
        batches[_batchId].bottledWineQuantity = _bottledWineQuantity;
        batches[_batchId].alcoholContent = _alcoholContent;
        
    }

    function getIdSulfitesSerial() public view returns(uint256) {
        require(authorized[msg.sender]);
        return idSulfitesSerial;
    }

    function getIdAllergenesSerial() public view returns(uint256) {
        require(authorized[msg.sender]);
        return idAllergenesSerial;
    }

    function getIdGrapeProvenanceSerial() public view returns(uint256) {
        require(authorized[msg.sender]);
        return idGrapeProvenanceSerial;
    }

    function getIdBarCodeSerial() public view returns(uint256) {
        require(authorized[msg.sender]);
        return idBarCodeSerial;
    }

    function getSulfites(uint256 _batchId) public view returns(string memory) {
        require(authorized[msg.sender]);
        return batches[_batchId].sulfites;
    }

    function getAllergenes(uint256 _batchId) public view returns(string memory) {
        require(authorized[msg.sender]);
        return batches[_batchId].allergenes;
    }

    function getGrapeProvenance(uint256 _batchId) public view returns(string memory) {
        require(authorized[msg.sender]);
        return batches[_batchId].grapeProvenance;
    }

    function getBarCode(uint256 _batchId) public view returns(string memory) {
        require(authorized[msg.sender]);
        return batches[_batchId].barCode;
    }

    function getFillerSensorsData(uint256 _batchId) public view returns(string memory, string memory, string memory) {
        require(authorized[msg.sender]);
        return (batches[_batchId].receivedProductQuantity, batches[_batchId].bottledWineQuantity, batches[_batchId].alcoholContent);
    }

    //WineProducer get functions
    function getWinemakingProductList(uint256 _batchId) public view returns(string memory) {
        return wineContract.getWinemakingProducts(_batchId);
    }

    //GrapeGrower get functions
    function getGrapesIntendedUse(uint256 _batchId) public view returns(string memory) {
        return grapeContract.getGrapesIntendedUse(_batchId);
    }

}
