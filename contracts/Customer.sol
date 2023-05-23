// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Agronomo.sol";
import "./Viticoltore.sol";
import "./Produttore.sol";
import "./Imbottigliatore.sol";
import "./Distributore.sol";
import "./EnteCertificatore.sol";

contract Customer {

    struct DatiBottiglia {
        //da Agronomo
        string certificazioneUvaAppezzamento;
        //da Viticoltore
        string dataRaccolta;
        string datiForniture;
        string destinazioneUva;
        //da Produttore
        string prodottiVinificazione;
        //da Imbottigliatore
        string solfiti;
        string allergeni;
        string gradazioneAlcolica;
        string localitaUve;
        //da Distributore
        string temperaturaTrasporto; //sensore
        //da Ente Certificatore
        string validazione;
        string certificazione;

    }

    Agronomo agronomoContract;
    Viticoltore viticoltoreContract;
    Produttore produttoreContract;
    Imbottigliatore imbottigliatoreContract;
    Distributore distributoreContract;
    EnteCertificatore enteCertificatoreContract;

    constructor(address _agronomoContractAddress, address _ViticoltoreContractAddress, address _produttoreContractAddress,
        address _imbottigliatoreContractAddress, address _distributoreContractAddress, address _enteCertificatoreContractAddress) {
            agronomoContract = Agronomo(_agronomoContractAddress);
            viticoltoreContract = Viticoltore(_ViticoltoreContractAddress);
            produttoreContract = Produttore(_produttoreContractAddress);
            imbottigliatoreContract = Imbottigliatore(_imbottigliatoreContractAddress);
            distributoreContract = Distributore(_distributoreContractAddress);
            enteCertificatoreContract = EnteCertificatore(_enteCertificatoreContractAddress);

            agronomoContract.addAuthorized(address(this));
            viticoltoreContract.addAuthorized(address(this));
            produttoreContract.addAuthorized(address(this));
            imbottigliatoreContract.addAuthorized(address(this));
            distributoreContract.addAuthorized(address(this));
            enteCertificatoreContract.addAuthorized(address(this));
        }

    mapping(uint256 => DatiBottiglia) public bottiglie;

    //da Agronomo
   /* function setCertificazioneUvaAppezzamento(uint256 _idBottiglia, string memory _certificazioneUvaAppezzamento) public {
        bottiglie[_idBottiglia].certificazioneUvaAppezzamento = _certificazioneUvaAppezzamento;
    }

    //da Viticoltore
    function setDataRaccolta(uint256 _idBottiglia, string memory _dataRaccolta) public {
        bottiglie[_idBottiglia].dataRaccolta = _dataRaccolta;
    }

    function setDatiForniture(uint256 _idBottiglia, string memory _datiForniture) public {
        bottiglie[_idBottiglia].datiForniture = _datiForniture;
    }

    function setDestinazioneUva(uint256 _idBottiglia, string memory _destinazioneUva) public {
        bottiglie[_idBottiglia].destinazioneUva = _destinazioneUva;
    }

    //da Produttore
    function setProdottiVinificazione(uint256 _idBottiglia, string memory _prodottiVinificazione) public {
        bottiglie[_idBottiglia].prodottiVinificazione = _prodottiVinificazione;
    }

    //da Imbottigliatore
    function setSolfiti(uint256 _idBottiglia, string memory _solfiti) public {
        bottiglie[_idBottiglia].solfiti = _solfiti;
    }

    function setAllergeni(uint256 _idBottiglia, string memory _allergeni) public {
        bottiglie[_idBottiglia].allergeni = _allergeni;
    }

    function setGradazioneAlcolica(uint256 _idBottiglia, string memory _gradazioneAlcolica) public{
        bottiglie[_idBottiglia].gradazioneAlcolica = _gradazioneAlcolica;
    }

    function setLocalitaUve(uint256 _idBottiglia, string memory _localitaUve) public {
        bottiglie[_idBottiglia].localitaUve = _localitaUve;
    }

    //da Distributore
    function setTemperaturaTrasporto(uint256 _idBottiglia, string memory _temperaturaTrasporto) public{
        bottiglie[_idBottiglia].temperaturaTrasporto = _temperaturaTrasporto;
    }

    //da Ente Certificatore
    function setValidazione(uint256 _idbottiglia, string memory _validazione) public {
        bottiglie[_idbottiglia].validazione = _validazione;
    }

    function setCertificazione(uint256 _idBottiglia, string memory _certificazione) public{
        bottiglie[_idBottiglia].certificazione = _certificazione;
    } */

    //getters

    function getCertificazioneAppezzamentoUva(uint256 _idBottiglia) public returns(string memory){
        
        string memory result = agronomoContract.getCertificazioneUvaAppezzamento(_idBottiglia);
        bottiglie[_idBottiglia].certificazioneUvaAppezzamento = result;
        return bottiglie[_idBottiglia].certificazioneUvaAppezzamento;
    }

    //da Viticoltore
    function getDataRaccolta(uint256 _idBottiglia) public returns(string memory) {
        string memory result = viticoltoreContract.getDataRaccolta(_idBottiglia);
        bottiglie[_idBottiglia].dataRaccolta = result;
        return bottiglie[_idBottiglia].dataRaccolta;
    }

    function getDatiForniture(uint256 _idBottiglia) public returns(string memory) {
        string memory result = viticoltoreContract.getDatiForniture(_idBottiglia);
        bottiglie[_idBottiglia].datiForniture = result;
        return bottiglie[_idBottiglia].datiForniture;
    }

    function getDestinazioneUva(uint256 _idBottiglia) public returns(string memory) {
        string memory result = viticoltoreContract.getDestinazioneUva(_idBottiglia);
        bottiglie[_idBottiglia].destinazioneUva = result;
        return bottiglie[_idBottiglia].destinazioneUva;
    }

    //da Produttore
    function getProdottiVinificazione(uint256 _idBottiglia) public returns(string memory) {
        string memory result = produttoreContract.getProdottiVinificazione(_idBottiglia);
        bottiglie[_idBottiglia].prodottiVinificazione = result;
        return bottiglie[_idBottiglia].prodottiVinificazione;
    }

    //da Imbottigliatore
    function getSolfiti(uint256 _idBottiglia) public returns(string memory) {
        string memory result = imbottigliatoreContract.getSolfiti(_idBottiglia);
        bottiglie[_idBottiglia].solfiti = result;
        return bottiglie[_idBottiglia].solfiti;
    }

    function getAllergeni(uint256 _idBottiglia) public  returns(string memory) {
        string memory result = imbottigliatoreContract.getAllergeni(_idBottiglia);
        bottiglie[_idBottiglia].allergeni = result;
        return bottiglie[_idBottiglia].allergeni;
    }

    function getGradazioneAlcolica(uint256 _idBottiglia) public returns(string memory) {
        (,,  string memory gradazioneAlcolica) = imbottigliatoreContract.getDatiSensoriImbottigliatore(_idBottiglia);
        bottiglie[_idBottiglia].gradazioneAlcolica = gradazioneAlcolica;
        return bottiglie[_idBottiglia].gradazioneAlcolica;
    }

    function getLocalitaUve(uint256 _idBottiglia) public returns(string memory) {
        string memory result = imbottigliatoreContract.getlocalitaUve(_idBottiglia);
        bottiglie[_idBottiglia].localitaUve = result;
        return bottiglie[_idBottiglia].localitaUve;
    }

    //da Distributore
    function getTemperaturaTrasporto(uint256 _idBottiglia) public returns(string memory){
        (, string memory temperaturaTrasporto) = distributoreContract.getDatiSensoriDistributore(_idBottiglia);
        bottiglie[_idBottiglia].temperaturaTrasporto = temperaturaTrasporto;
        return bottiglie[_idBottiglia].temperaturaTrasporto;
    }

    //da Ente Certificatore
    function getValidazione(uint256 _idBottiglia) public returns(string memory) {
        string memory result = enteCertificatoreContract.getValidazione(_idBottiglia);
        bottiglie[_idBottiglia].validazione = result;
        return bottiglie[_idBottiglia].validazione;
    }

    function getCertificazione(uint256 _idBottiglia) public returns(string memory){
        string memory result = enteCertificatoreContract.getCertificazione(_idBottiglia);
        bottiglie[_idBottiglia].certificazione = result;
        return bottiglie[_idBottiglia].certificazione;
    }

}