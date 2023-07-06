// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AgronomistContract {

    address public owner;
    mapping(address => bool) public authorized;

    constructor()  {
        owner = msg.sender;
        authorized[owner] = true; 
    }

    struct AgronomistData {
    
    
    string productQualityAnalisys;
    string plotGrapesCertification;
    string surface;
    string soilHumidity;
    string soilTemperature;
    string rain;

    }

    mapping(uint256 => AgronomistData) lands; 
   
   
    uint256 idQualityAnalysisSerial = 1;
    uint256 idPlotGrapesCertificationSerial = 1;

    
    function addAuthorized(address _address) public {
        require(msg.sender == owner);
        authorized[_address] = true;
    }

    function removeAuthorized(address _address) public {
        require(msg.sender == owner);
        authorized[_address] = false;
    }

    
    function setProductQualityAnalysis(string memory _productQualityAnalisys) public {
        require(authorized[msg.sender]);
        lands[idQualityAnalysisSerial].productQualityAnalisys = _productQualityAnalisys;
        idQualityAnalysisSerial++;
    }

    function setPlotGrapesCertification(string memory _plotGrapesCertification) public {
        require(authorized[msg.sender]);
        lands[idPlotGrapesCertificationSerial].plotGrapesCertification = _plotGrapesCertification;
        idPlotGrapesCertificationSerial++;
    }

    function setAgronomistSensors(uint256 _landId, string memory _surface, string memory _soilHumidity, string memory _soilTemperature, string memory _rain) public {
        lands[_landId].surface = _surface;
        lands[_landId].soilHumidity = _soilHumidity;
        lands[_landId].soilTemperature = _soilTemperature;
        lands[_landId].rain = _rain;
    }
    
    
    function getIdQualityAnalysisSerial() public view returns(uint256){
        require(authorized[msg.sender]);
        return idQualityAnalysisSerial;
    }

    function getIdPlotGrapesCertificationSerial() public view returns(uint256){
        require(authorized[msg.sender]);
        return idPlotGrapesCertificationSerial;
    }

    function getProductQualityAnalisys(uint256 _landId) public view returns(string memory) {
        require(authorized[msg.sender]);
        return lands[_landId].productQualityAnalisys;
    }

    function getPlotGrapesCertification(uint256 _landId) public view returns(string memory) {
        require(authorized[msg.sender]);
        return lands[_landId].plotGrapesCertification;

    }

    function getAgronomistSensorsData(uint256 _landId) public view returns(string memory, string memory, string memory, string memory) {
        require(authorized[msg.sender]);
        return (lands[_landId].surface, lands[_landId].soilHumidity, lands[_landId].soilTemperature, lands[_landId].rain);

    }

}