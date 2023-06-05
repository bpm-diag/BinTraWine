// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Agronomist.sol";
import "./GrapeGrower.sol";
import "./WineProducer.sol";
import "./Filler.sol";
import "./Distributor.sol";
import "./Reseller.sol";

contract CertificationContract {

    address public owner;
    mapping(address => bool) public authorized;

    constructor(address agronomistContractAddr, address grapeGrowerContractAddr, address wineProducerContractAddr, address fillerContractAddr,
    address distributorContractAddr, address resellerContractAddr)  {

        owner = msg.sender;
        authorized[owner] = true; 

        agronomistContract = AgronomistContract(agronomistContractAddr);
        grapeGrowerContract = GrapeContract(grapeGrowerContractAddr);
        wineProducerContract = WineContract(wineProducerContractAddr);
        fillerContract = FillerContract(fillerContractAddr);
        distributorContract = DistributorContract(distributorContractAddr);
        resellerContract = ResellerContract(resellerContractAddr);
        
        agronomistContract.addAuthorized(address(this)); 
        grapeGrowerContract.addAuthorized(address(this)); 
        wineProducerContract.addAuthorized(address(this)); 
        fillerContract.addAuthorized(address(this)); 
        distributorContract.addAuthorized(address(this)); 
        resellerContract.addAuthorized(address(this)); 

    }

    AgronomistContract agronomistContract;
    GrapeContract grapeGrowerContract;
    WineContract wineProducerContract;
    FillerContract fillerContract;
    DistributorContract distributorContract;
    ResellerContract resellerContract;
    
    struct CertifyingAuthorityData {
    
        string validation;
        string certification;

    }

    mapping(uint256 => CertifyingAuthorityData) batches;

    uint256 idValidationSerial = 1;
    uint256 idCertificationSerial = 1;

    function addAuthorized(address _address) public {
        require(msg.sender == owner); 
        authorized[_address] = true;
    }

    function removeAuthorized(address _address) public {
        require(msg.sender == owner);
        authorized[_address] = false;
    }

    function setValidation(string memory _validation) public {
        require(authorized[msg.sender]);
        batches[idValidationSerial].validation = _validation;
        idValidationSerial++;
    }

    function setCertification(string memory _certification) public {
        require(authorized[msg.sender]);
        batches[idCertificationSerial].certification = _certification;
        idCertificationSerial++;
    }

    function getIdValidationSerial() public view returns(uint256) {
        require(authorized[msg.sender]);
        return idValidationSerial;
    }

    function getIdCertificationSerial() public view returns(uint256) {
        require(authorized[msg.sender]);
        return idCertificationSerial;
    }

    function getValidation(uint256 _batchId) public view returns(string memory) {
        require(authorized[msg.sender]);
        return batches[_batchId].validation;
    }

    function getCertification(uint256 _batchId) public view returns(string memory) {
        require(authorized[msg.sender]);
        return batches[_batchId].certification;
    }

    /*GET functions from other actors contracts*/
    //GET Agronomist information
    function getProductQualityAnalisys(uint256 _landId) public view returns(string memory) {
        require(authorized[msg.sender]);
        return agronomistContract.getProductQualityAnalisys(_landId);
    }

    function getPlotGrapesCertification(uint256 _landId) public view returns(string memory) {
       require(authorized[msg.sender]);
       return agronomistContract.getPlotGrapesCertification(_landId);

    }

    function getAgronomistSensorsData(uint256 _landId) public view returns(string memory, string memory, string memory, string memory) {
        require(authorized[msg.sender]);
        return agronomistContract.getAgronomistSensorsData(_landId);

    }

    //GET Grape Grower information
    function getHarvestDate(uint256 _landId) public view returns(string memory) {
        require(authorized[msg.sender]);
        return grapeGrowerContract.getHarvestDate(_landId);
    }

    function getSuppliesData(uint256 _landId) public view returns(string memory) {
        require(authorized[msg.sender]);
        return grapeGrowerContract.getSuppliesData(_landId);
    }

    function getGrapesIntendedUse(uint256 _landId) public view returns(string memory) {
        require(authorized[msg.sender]);
        return grapeGrowerContract.getGrapesIntendedUse(_landId);
    }

    function getGrapeGrowerSaleData(uint256 _saleId) public view returns(string memory, string memory, string memory, string memory, string memory) {
        require(authorized[msg.sender]);
        return grapeGrowerContract.getSaleData(_saleId);
    }

    function getGrapeGrowerSensorsData(uint256 _landId) public view returns(string memory, string memory, string memory, string memory, string memory) {
        require(authorized[msg.sender]);
        return grapeGrowerContract.getGrapeGrowerSensorsData(_landId);
    }

    //GET Wine Producer information
    function getWinemakingProducts(uint256 _batchId) public view returns(string memory) {
        require(authorized[msg.sender]);
        return wineProducerContract.getWinemakingProducts(_batchId);
    }

    function getObtainedWineQuantity(uint256 _batchId) public view returns(string memory) {
        require(authorized[msg.sender]);
        return wineProducerContract.getObtainedWineQuantity(_batchId);
    }

    function getClaimedWineQuantity(uint256 _batchId) public view returns(string memory) {
        require(authorized[msg.sender]);
        return wineProducerContract.getClaimedWineQuantity(_batchId);
    }

    function getWineProducerSensorsData(uint256 _batchId) public view returns(string memory, string memory, string memory, string memory) {
        require(authorized[msg.sender]);
        return wineProducerContract.getWineProducerSensorsData(_batchId);
    }

    //GET Filler information
    function getSulfites(uint256 _batchId) public view returns(string memory) {
        require(authorized[msg.sender]);
        return fillerContract.getSulfites(_batchId);
    }

    function getAllergenes(uint256 _batchId) public view returns(string memory) {
        require(authorized[msg.sender]);
        return fillerContract.getAllergenes(_batchId);
    }

    function getGrapeProvenance(uint256 _batchId) public view returns(string memory) {
        require(authorized[msg.sender]);
        return fillerContract.getGrapeProvenance(_batchId);
    }

    function getBarCode(uint256 _batchId) public view returns(string memory) {
        require(authorized[msg.sender]);
        return fillerContract.getBarCode(_batchId);
    }

    function getFillerSensorsData(uint256 _batchId) public view returns(string memory, string memory, string memory) {
        require(authorized[msg.sender]);
        return fillerContract.getFillerSensorsData(_batchId);
    }

    //GET Distributor information
    function getDeliveryDestination(uint256 _batchId) public view returns(string memory) {
        require(authorized[msg.sender]);
        return distributorContract.getDeliveryDestination(_batchId);
    }

    function getDistributorSaleData(uint256 _saleId) public view returns(string memory, string memory, string memory, string memory, string memory) {
        return distributorContract.getSaleData(_saleId);
    }

    function getDistributorSensorsData(uint256 _batchId) public view returns(string memory, string memory) {
        require(authorized[msg.sender]);
        return distributorContract.getDistributorSensorsData(_batchId);
    }

    //GET Reseller information
    function getResellerSensorsData(uint256 _batchId) public view returns(string memory) {
        require(authorized[msg.sender]);
        return resellerContract.getResellerSensorsData(_batchId);
    }
}
