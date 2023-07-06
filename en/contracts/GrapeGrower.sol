// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Agronomist.sol";

contract GrapeContract {

    address public owner;
    mapping(address => bool) public authorized;

    AgronomistContract agronomistContract;
    
    constructor(address _agronomistContractAddress)  {
        owner = msg.sender;
        authorized[owner] = true; 
        agronomistContract = AgronomistContract(_agronomistContractAddress);
        agronomistContract.addAuthorized(address(this)); 

    }

    struct grapeGrowerData {

    string harvestDate;
    string suppliesData;
    string grapesIntendedUse;
    string harvestedGrapesQuantity;
    string grapeType;
    string humidity;
    string temperature;
    string fertilizersQuantity;

    }

    struct SaleData {
        
        string salePrice;
        string productName;
        string amount;
        string saleDate;
        string customerName;
    }

    mapping(uint256 => grapeGrowerData) lands;
    mapping(uint256 => SaleData) sales;
    mapping(uint => mapping(address => bool)) allowedAddressesSales; 

    uint256 idHarvestDateSerial = 1;
    uint256 idSuppliesDataSerial = 1;
    uint256 idGrapesIntendedUseSerial = 1;
    uint256 idSaleSerial = 1;

    function addAuthorized(address _address) public {
        require(msg.sender == owner); 
        authorized[_address] = true;
    }

    function removeAuthorized(address _address) public {
        require(msg.sender == owner);
        authorized[_address] = false;
    }

    function setHarvestDate(string memory _harvestDate) public {
        require(authorized[msg.sender]);
        lands[idHarvestDateSerial].harvestDate = _harvestDate;
        idHarvestDateSerial++;
    }

    function setSuppliesData(string memory _suppliesData) public {
        require(authorized[msg.sender]);
        lands[idSuppliesDataSerial].suppliesData = _suppliesData;
        idSuppliesDataSerial++;
    }

   function setGrapesIntendedUse(string memory _grapesIntendedUse) public {
       require(authorized[msg.sender]);
       lands[idGrapesIntendedUseSerial].grapesIntendedUse = _grapesIntendedUse;
       idGrapesIntendedUseSerial++;
    }

   function setSaleData(string memory _productName,string memory _salePrice, string memory _amount, string memory _customerName,
            string memory _saleDate, address[] memory _addresses) public {
       
       require(authorized[msg.sender]);
       sales[idSaleSerial].productName = _productName;
       sales[idSaleSerial].salePrice = _salePrice;
       sales[idSaleSerial].amount = _amount;
       sales[idSaleSerial].customerName = _customerName;
       sales[idSaleSerial].saleDate = _saleDate;

       for(uint i=0; i<_addresses.length; i++){ 
            if(_addresses[i] != address(0)){ 
                allowedAddressesSales[idSaleSerial][msg.sender] = true; 
                allowedAddressesSales[idSaleSerial][_addresses[i]] = true; 
            }
        } 

       idSaleSerial++;
    }

    function setGrapeGrowerSensors(uint256 _landId, string memory _harvestedGrapesQuantity, string memory _grapeType, string memory _humidity, string memory _temperature, string memory _fertilizersQuantity) public {

        lands[_landId].harvestedGrapesQuantity = _harvestedGrapesQuantity;
        lands[_landId].grapeType = _grapeType;
        lands[_landId].humidity = _humidity;
        lands[_landId].temperature = _temperature;
        lands[_landId].fertilizersQuantity = _fertilizersQuantity;

    }

    function getIdHarvestDateSerial() public view returns(uint256){
        require(authorized[msg.sender]);
        return idHarvestDateSerial;
    }

    function getIdSuppliesDataSerial() public view returns(uint256){
        require(authorized[msg.sender]);
        return idSuppliesDataSerial;
    }

    function getIdGrapesIntendedUseSerial() public view returns(uint256){
        require(authorized[msg.sender]);
        return idGrapesIntendedUseSerial;
    }

    function getIdSaleSerial() public view returns(uint256){
        require(authorized[msg.sender]);
        return idSaleSerial;
    }

    function getHarvestDate(uint256 _landId) public view returns(string memory) {
        require(authorized[msg.sender]);
        return lands[_landId].harvestDate;
    }

    function getSuppliesData(uint256 _landId) public view returns(string memory) {
        require(authorized[msg.sender]);
        return lands[_landId].suppliesData;
    }

    function getGrapesIntendedUse(uint256 _landId) public view returns(string memory) {
        require(authorized[msg.sender]);
        return lands[_landId].grapesIntendedUse;
    }

    function getSaleData(uint256 _saleId) public view returns(string memory, string memory, string memory, string memory, string memory) {
        require(authorized[msg.sender]);
        
        if (allowedAddressesSales[_saleId][msg.sender] == true) { //"msg.sender" rappresenta l'address di chi sta chiamando il metodo.
           return (sales[_saleId].productName, sales[_saleId].salePrice, sales[_saleId].amount, sales[_saleId].customerName,
            sales[_saleId].saleDate);
        } else {
            revert("User not authorized"); 
        }
    }

    function getGrapeGrowerSensorsData(uint256 _landId) public view returns(string memory, string memory, string memory, string memory, string memory) {
        require(authorized[msg.sender]);
        return (lands[_landId].harvestedGrapesQuantity, lands[_landId].grapeType, lands[_landId].humidity, lands[_landId].temperature, lands[_landId].fertilizersQuantity);
    }

    //Agronomist contract get functions
    function getLandHumidity(uint256 _landId) public view returns(string memory) {
         (, string memory landHumidity, ,) = agronomistContract.getAgronomistSensorsData(_landId);
         return landHumidity;
    }

    function getLandTemperature(uint256 _landId) public view returns(string memory) {
         (,, string memory landTemperature,) = agronomistContract.getAgronomistSensorsData(_landId);
         return landTemperature;
    }

    function getLandRain(uint256 _landId) public view returns(string memory) {
        (,,, string memory landRain) = agronomistContract.getAgronomistSensorsData(_landId);
        return landRain;
    }

    function getLandSurface(uint256 _landId) public view returns(string memory) {
        (string memory landSurface,,,) = agronomistContract.getAgronomistSensorsData(_landId);
        return landSurface;
    }

}
