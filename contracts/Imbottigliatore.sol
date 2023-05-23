// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Produttore.sol";
import "./Viticoltore.sol";
import "./Customer.sol";

contract Imbottigliatore {

    //dati per autorizzazioni alle chiamate delle funzioni
    address public owner;
    mapping(address => bool) public authorized;

    Produttore produttoreContract;
    Viticoltore viticoltoreContract;
    Customer customerContract;

    constructor(address _produttoreContractAddress, address _viticoltoreContractAddress/*, address _customerContractAddress*/)  {
        owner = msg.sender;
        authorized[owner] = true; //solo per fare test, oppure è un'opzione valida se il deploy viene fatto da ogni singolo attore in maniera indipendente.
        produttoreContract = Produttore(_produttoreContractAddress);
        viticoltoreContract = Viticoltore(_viticoltoreContractAddress);
        //customerContract = Customer(_customerContractAddress);
        produttoreContract.addAuthorized(address(this));
        viticoltoreContract.addAuthorized(address(this));
    }

    struct DatiImbottigliatore {

        //dati manuali
        string solfiti;
        string allergeni;
        string localitaUve;
        string codiceBarre;

        //dati automatici
        string quantitaProdottoRicevuta;
        string quantitaVinoImbottigliata;
        string gradazioneAlcolica;
    }

    mapping(uint256 => DatiImbottigliatore) lotti;

    /*identificazione funzioni lotti*/
    uint256 idSolfitiSerial = 1;
    uint256 idAllergeniSerial = 1;
    uint256 idLocalitaUveSerial = 1;
    uint256 idCodiceBarreSerial = 1;

    //funzioni di autorizzazione
    function addAuthorized(address _address) public {
        //require(msg.sender == owner); Da tenere solo per testing e comodità, a lavoro definitivo va levata.
        authorized[_address] = true;
    }

    function removeAuthorized(address _address) public {
        require(msg.sender == owner);
        authorized[_address] = false;
    }

    //inserimento manuale
    function setSolfiti(string memory _solfiti) public {
        require(authorized[msg.sender]);
        lotti[idSolfitiSerial].solfiti = _solfiti;
        //customerContract.setSolfiti(idSolfitiSerial, _solfiti);
        idSolfitiSerial++;
    }

    function setAllergeni(string memory _allergeni) public {
        require(authorized[msg.sender]);
        lotti[idAllergeniSerial].allergeni = _allergeni;
        //customerContract.setAllergeni(idAllergeniSerial, _allergeni);
        idAllergeniSerial++;
    }

    function setLocalitaUve(string memory _localitaUve) public {
        require(authorized[msg.sender]);
        lotti[idLocalitaUveSerial].localitaUve = _localitaUve;
        //customerContract.setLocalitaUve(idLocalitaUveSerial, _localitaUve);
        idLocalitaUveSerial++;
    }

    function setCodiceBarre(string memory _codiceBarre) public {
        require(authorized[msg.sender]);
        lotti[idCodiceBarreSerial].codiceBarre = _codiceBarre;
        idCodiceBarreSerial++;
    }

    //inserimento automatico
    function setSensoriImbottigliatore(uint256 _idLotto, string memory _quantitaProdottoRicevuta, string memory _quantitaVinoImbottigliata, string memory _gradazioneAlcolica) public {

        lotti[_idLotto].quantitaProdottoRicevuta = _quantitaProdottoRicevuta;
        lotti[_idLotto].quantitaVinoImbottigliata = _quantitaVinoImbottigliata;
        lotti[_idLotto].gradazioneAlcolica = _gradazioneAlcolica;
        //customerContract.setGradazioneAlcolica(_idLotto, _gradazioneAlcolica);
    }

    //funzioni get
    function getIdSolfitiSerial() public view returns(uint256) {
        require(authorized[msg.sender]);
        return idSolfitiSerial;
    }

    function getIdAllergeniSerial() public view returns(uint256) {
        require(authorized[msg.sender]);
        return idAllergeniSerial;
    }

    function getIdLocalitaUveSerial() public view returns(uint256) {
        require(authorized[msg.sender]);
        return idLocalitaUveSerial;
    }

    function getIdCodiceBarreSerial() public view returns(uint256) {
        require(authorized[msg.sender]);
        return idCodiceBarreSerial;
    }

    function getSolfiti(uint256 _idLotto) public view returns(string memory) {
        require(authorized[msg.sender]);
        return lotti[_idLotto].solfiti;
    }

    function getAllergeni(uint256 _idLotto) public view returns(string memory) {
        require(authorized[msg.sender]);
        return lotti[_idLotto].allergeni;
    }

    function getlocalitaUve(uint256 _idLotto) public view returns(string memory) {
        require(authorized[msg.sender]);
        return lotti[_idLotto].localitaUve;
    }

    function getCodiceBarre(uint256 _idLotto) public view returns(string memory) {
        require(authorized[msg.sender]);
        return lotti[_idLotto].codiceBarre;
    }

    function getDatiSensoriImbottigliatore(uint256 _idLotto) public view returns(string memory, string memory, string memory) {
        require(authorized[msg.sender]);
        return (lotti[_idLotto].quantitaProdottoRicevuta, lotti[_idLotto].quantitaVinoImbottigliata, lotti[_idLotto].gradazioneAlcolica);
    }

    //funzioni di get Da Produttore
    function getListaProdottiVinificazione(uint256 _idLotto) public view returns(string memory) {
        return produttoreContract.getProdottiVinificazione(_idLotto);
    }

    //funzioni di get da Viticoltore
    function getDestinazioneUva(uint256 _idLotto) public view returns(string memory) {
        return viticoltoreContract.getDestinazioneUva(_idLotto);
    }

}
