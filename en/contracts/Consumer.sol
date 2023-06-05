// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Agronomist.sol";
import "./GrapeGrower.sol";
import "./WineProducer.sol";
import "./Filler.sol";
import "./Distributor.sol";
import "./CertifyingAuthority.sol";

contract ConsumerContract {

    struct BottleData {
        //from Agronomist
        string plotGrapesCertification;
        //from GrapeGrower
        string harvestDate;
        string suppliesData;
        string grapesIntendedUse;
        //from WineProducer
        string winemakingProducts;
        //from Filler
        string sulfites;
        string allergenes;
        string alcoholContent;
        string grapesProvenance;
        //from Distributor
        string transportTemperature; //sensor
        //from Certifying Authority
        string validation;
        string certification;

    }

    AgronomistContract agronomistContract;
    GrapeContract grapeContract;
    WineContract wineContract;
    FillerContract fillerContract;
    DistributorContract distributorContract;
    CertificationContract certificationContract;

    constructor(address _agronomistContractAddress, address _grapeContractAddress, address _wineContractAddress,
        address _fillerContractAddress, address _distributorContractAddress, address _certificationContractAddress) {
            agronomistContract = AgronomistContract(_agronomistContractAddress);
            grapeContract = GrapeContract(_grapeContractAddress);
            wineContract = WineContract(_wineContractAddress);
            fillerContract = FillerContract(_fillerContractAddress);
            distributorContract = DistributorContract(_distributorContractAddress);
            certificationContract = CertificationContract(_certificationContractAddress);

            agronomistContract.addAuthorized(address(this));
            grapeContract.addAuthorized(address(this));
            wineContract.addAuthorized(address(this));
            fillerContract.addAuthorized(address(this));
            distributorContract.addAuthorized(address(this));
            certificationContract.addAuthorized(address(this));
        }

    mapping(uint256 => BottleData) public bottles;

   //getters

    function getPlotGrapesCertification(uint256 _bottleId) public returns(string memory){
        
        string memory result = agronomistContract.getPlotGrapesCertification(_bottleId);
        bottles[_bottleId].plotGrapesCertification = result;
        return bottles[_bottleId].plotGrapesCertification;
    }

    //from GrapeContract
    function getHarvestDate(uint256 _bottleId) public returns(string memory) {
        string memory result = grapeContract.getHarvestDate(_bottleId);
        bottles[_bottleId].harvestDate = result;
        return bottles[_bottleId].harvestDate;
    }

    function getSuppliesData(uint256 _bottleId) public returns(string memory) {
        string memory result = grapeContract.getSuppliesData(_bottleId);
        bottles[_bottleId].suppliesData = result;
        return bottles[_bottleId].suppliesData;
    }

    function getGrapesIntendedUse(uint256 _bottleId) public returns(string memory) {
        string memory result = grapeContract.getGrapesIntendedUse(_bottleId);
        bottles[_bottleId].grapesIntendedUse = result;
        return bottles[_bottleId].grapesIntendedUse;
    }

    //from WineContract
    function getWinemakingProducts(uint256 _bottleId) public returns(string memory) {
        string memory result = wineContract.getWinemakingProducts(_bottleId);
        bottles[_bottleId].winemakingProducts = result;
        return bottles[_bottleId].winemakingProducts;
    }

    //from FillerContract
    function getSulfites(uint256 _bottleId) public returns(string memory) {
        string memory result = fillerContract.getSulfites(_bottleId);
        bottles[_bottleId].sulfites = result;
        return bottles[_bottleId].sulfites;
    }

    function getAllergenes(uint256 _bottleId) public  returns(string memory) {
        string memory result = fillerContract.getAllergenes(_bottleId);
        bottles[_bottleId].allergenes = result;
        return bottles[_bottleId].allergenes;
    }

    function getAlcoholContent(uint256 _bottleId) public returns(string memory) {
        (,,  string memory alcoholContent) = fillerContract.getFillerSensorsData(_bottleId);
        bottles[_bottleId].alcoholContent = alcoholContent;
        return bottles[_bottleId].alcoholContent;
    }

    function getGrapesProvenance(uint256 _bottleId) public returns(string memory) {
        string memory result = fillerContract.getGrapeProvenance(_bottleId);
        bottles[_bottleId].grapesProvenance = result;
        return bottles[_bottleId].grapesProvenance;
    }

    //from DistributorContract
    function getTransportTemperature(uint256 _bottleId) public returns(string memory){
        (, string memory transportTemperature) = distributorContract.getDistributorSensorsData(_bottleId);
        bottles[_bottleId].transportTemperature = transportTemperature;
        return bottles[_bottleId].transportTemperature;
    }

    //from Certifying Authority
    function getValidation(uint256 _bottleId) public returns(string memory) {
        string memory result = certificationContract.getValidation(_bottleId);
        bottles[_bottleId].validation = result;
        return bottles[_bottleId].validation;
    }

    function getCertification(uint256 _bottleId) public returns(string memory){
        string memory result = certificationContract.getCertification(_bottleId);
        bottles[_bottleId].certification = result;
        return bottles[_bottleId].certification;
    }

}