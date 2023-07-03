// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Agronomo.sol";
import "./Viticoltore.sol";
import "./Produttore.sol";
import "./Imbottigliatore.sol";
import "./Distributore.sol";
import "./Rivenditore.sol";


contract EnteCertificatore {

    //dati per autorizzazioni alle chiamate delle funzioni
    address public owner;
    mapping(address => bool) public authorized;

    constructor(address agronomoContractAddr, address viticoltoreContractAddr, address produttoreContractAddr, address imbottigliatoreContractAddr,
    address distributoreContractAddr, address rivenditoreContractAddr)  {

        owner = msg.sender;
        authorized[owner] = true; //solo per fare test, oppure è un'opzione valida se il deploy viene fatto da ogni singolo attore in maniera indipendente.

        agronomoContract = Agronomo(agronomoContractAddr);
        viticoltoreContract = Viticoltore(viticoltoreContractAddr);
        produttoreContract = Produttore(produttoreContractAddr);
        imbottigliatoreContract = Imbottigliatore(imbottigliatoreContractAddr);
        distributoreContract = Distributore(distributoreContractAddr);
        rivenditoreContract = Rivenditore(rivenditoreContractAddr);
        
        agronomoContract.addAuthorized(address(this));
        viticoltoreContract.addAuthorized(address(this));
        produttoreContract.addAuthorized(address(this));
        imbottigliatoreContract.addAuthorized(address(this));
        distributoreContract.addAuthorized(address(this));
        rivenditoreContract.addAuthorized(address(this));

    }

    Agronomo agronomoContract;
    Viticoltore viticoltoreContract;
    Produttore produttoreContract;
    Imbottigliatore imbottigliatoreContract;
    Distributore distributoreContract;
    Rivenditore rivenditoreContract;
    

    struct DatiEnteCertificatore {
    //dati manuali
    string validazione;
    string certificazione;

    }

    mapping(uint256 => DatiEnteCertificatore) lotti;

    /*identificatori funzioni lotti*/
    uint256 idValidazioneSerial = 1;
    uint256 idCertificazioneSerial = 1;

    //funzioni di autorizzazione
    function addAuthorized(address _address) public {
        //require(msg.sender == owner); Da tenere solo per testing e comodità, a lavoro definitivo va levata.
        authorized[_address] = true;
    }

    function removeAuthorized(address _address) public {
        require(msg.sender == owner);
        authorized[_address] = false;
    }

    //inserimento dati manuali
    function setValidazione(string memory _validazione) public {
        require(authorized[msg.sender]);
        lotti[idValidazioneSerial].validazione = _validazione;
        //customerContract.setValidazione(idValidazioneSerial, _validazione);
        idValidazioneSerial++;
    }

    function setCertificazione(string memory _certificazione) public {
        require(authorized[msg.sender]);
        lotti[idCertificazioneSerial].certificazione = _certificazione;
        //customerContract.setCertificazione(idCertificazioneSerial, _certificazione);
        idCertificazioneSerial++;
    }

    //funzioni get
    function getIdValidazioneSerial() public view returns(uint256) {
        require(authorized[msg.sender]);
        return idValidazioneSerial;
    }

    function getIdCertificazioneSerial() public view returns(uint256) {
        require(authorized[msg.sender]);
        return idCertificazioneSerial;
    }

    function getValidazione(uint256 _idLotto) public view returns(string memory) {
        require(authorized[msg.sender]);
        return lotti[_idLotto].validazione;
    }

    function getCertificazione(uint256 _idLotto) public view returns(string memory) {
        require(authorized[msg.sender]);
        return lotti[_idLotto].certificazione;
    }

    /*Funzioni GET degli altri attori (L'Ente Certificatore deve poter vedere tutto da tutti)*/
    //GET informazioni Agronomo
    function getAnalisiQualitaProdotto(uint256 _idTerreno) public view returns(string memory) {
        require(authorized[msg.sender]);
        return agronomoContract.getAnalisiQualitaProdotto(_idTerreno);
    }

    function getCertificazioneUvaAppezzamento(uint256 _idTerreno) public view returns(string memory) {
       require(authorized[msg.sender]);
       return agronomoContract.getCertificazioneUvaAppezzamento(_idTerreno);

    }

    function getDatiSensoriAgronomo(uint256 _idTerreno) public view returns(string memory, string memory, string memory, string memory) {
        require(authorized[msg.sender]);
        return agronomoContract.getDatiSensoriAgronomo(_idTerreno);

    }

    //GET funzioni Viticoltore
    function getDataRaccolta(uint256 _idTerreno) public view returns(string memory) {
        require(authorized[msg.sender]);
        return viticoltoreContract.getDataRaccolta(_idTerreno);
    }

    function getDatiForniture(uint256 _idTerreno) public view returns(string memory) {
        require(authorized[msg.sender]);
        return viticoltoreContract.getDatiForniture(_idTerreno);
    }

    function getDestinazioneUva(uint256 _idTerreno) public view returns(string memory) {
        require(authorized[msg.sender]);
        return viticoltoreContract.getDestinazioneUva(_idTerreno);
    }

    function getDatiVenditaViticoltore(uint256 _idTerreno) public view returns(string memory, string memory, string memory, string memory, string memory) {
        require(authorized[msg.sender]);
        return viticoltoreContract.getDatiVendita(_idTerreno);
    }

    function getDatiSensoriViticoltore(uint256 _idTerreno) public view returns(string memory, string memory, string memory, string memory, string memory) {
        require(authorized[msg.sender]);
        return viticoltoreContract.getDatiSensoriViticoltore(_idTerreno);
    }

    //GET funzioni Produttore
    function getProdottiVinificazione(uint256 _idLotto) public view returns(string memory) {
        require(authorized[msg.sender]);
        return produttoreContract.getProdottiVinificazione(_idLotto);
    }

    function getQuantitaVinoOttenuto(uint256 _idLotto) public view returns(string memory) {
        require(authorized[msg.sender]);
        return produttoreContract.getQuantitaVinoOttenuto(_idLotto);
    }

    function getQuantitaVinoRivendicato(uint256 _idLotto) public view returns(string memory) {
        require(authorized[msg.sender]);
        return produttoreContract.getQuantitaVinoRivendicato(_idLotto);
    }

    function getDatiSensoriProduttore(uint256 _idLotto) public view returns(string memory, string memory, string memory, string memory) {
        require(authorized[msg.sender]);
        return produttoreContract.getDatiSensoriProduttore(_idLotto);
    }

    //GET funzioni Imbottigliatore
    function getSolfiti(uint256 _idLotto) public view returns(string memory) {
        require(authorized[msg.sender]);
        return imbottigliatoreContract.getSolfiti(_idLotto);
    }

    function getAllergeni(uint256 _idLotto) public view returns(string memory) {
        require(authorized[msg.sender]);
        return imbottigliatoreContract.getAllergeni(_idLotto);
    }

    function getlocalitaUve(uint256 _idLotto) public view returns(string memory) {
        require(authorized[msg.sender]);
        return imbottigliatoreContract.getlocalitaUve(_idLotto);
    }

    function getCodiceBarre(uint256 _idLotto) public view returns(string memory) {
        require(authorized[msg.sender]);
        return imbottigliatoreContract.getCodiceBarre(_idLotto);
    }

    function getDatiSensoriImbottigliatore(uint256 _idLotto) public view returns(string memory, string memory, string memory) {
        require(authorized[msg.sender]);
        return imbottigliatoreContract.getDatiSensoriImbottigliatore(_idLotto);
    }

    //GET funzioni Distributore
    function getDestinazione(uint256 _idLotto) public view returns(string memory) {
        require(authorized[msg.sender]);
        return distributoreContract.getDestinazione(_idLotto);
    }

    function getDatiVenditaDistributore(uint256 _idLotto) public view returns(string memory, string memory, string memory, string memory, string memory) {
        return distributoreContract.getDatiVendita(_idLotto);
    }

    function getDatiSensoriDistributore(uint256 _idLotto) public view returns(string memory, string memory) {
        require(authorized[msg.sender]);
        return distributoreContract.getDatiSensoriDistributore(_idLotto);
    }

    //GET funzioni Rivenditore
    function getDatiSensoriRivenditore(uint256 _idLotto) public view returns(string memory) {
        require(authorized[msg.sender]);
        return rivenditoreContract.getDatiSensoriRivenditore(_idLotto);
    }
}
