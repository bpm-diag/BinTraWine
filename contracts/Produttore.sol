// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Viticoltore.sol";
import "./Customer.sol";

contract Produttore {

    //dati per autorizzazioni alle chiamate delle funzioni
    address public owner;
    mapping(address => bool) public authorized;

    Viticoltore viticoltoreContract;
    Customer customerContract;

    constructor(address _viticoltoreContractAddress/*, address _customerContractAddress*/)  {
        owner = msg.sender;
        authorized[owner] = true; //solo per fare test, oppure è un'opzione valida se il deploy viene fatto da ogni singolo attore in maniera indipendente.
        viticoltoreContract = Viticoltore(_viticoltoreContractAddress);
        //customerContract = Customer(_customerContractAddress);
        viticoltoreContract.addAuthorized(address(this));
    }

    struct DatiProduttore {
        //inserimento manuale
        string prodottiVinificazione;
        string quantitaVinoOttenuto;
        string quantitaVinoRivendicato;

        //inserimento automatico
        string pesoArrivo;
        string pesoProdottoFinito;
        string idContainer;
        string temperaturaContainer;
    }

    mapping(uint256 => DatiProduttore) lotti;

    /*identificatori funzioni lotti*/
    uint256 idProdottiVinificazioneSerial = 1;
    uint256 idQuantitaVinoOttenutoSerial = 1;
    uint256 idQuantitaVinoRivendicatoSerial = 1;

    //funzioni di autorizzazione
    function addAuthorized(address _address) public {
        //require(msg.sender == owner); Da tenere solo per testing e comodità, a lavoro definitivo va levata.
        authorized[_address] = true;
    }

    function removeAuthorized(address _address) public {
        require(msg.sender == owner);
        authorized[_address] = false;
    }

    //funzioni manuali
    function setProdottiVinificazione(string memory _prodottiVinificazione) public {
        require(authorized[msg.sender]);
        lotti[idProdottiVinificazioneSerial].prodottiVinificazione = _prodottiVinificazione;
        //customerContract.setProdottiVinificazione(idProdottiVinificazioneSerial, _prodottiVinificazione);
        idProdottiVinificazioneSerial++;
    }

    function setQuantitaVinoOttenuto(string memory _quantitaVinoOttenuto) public {
        require(authorized[msg.sender]);
        lotti[idQuantitaVinoOttenutoSerial].quantitaVinoOttenuto = _quantitaVinoOttenuto;
        idQuantitaVinoOttenutoSerial++;
    }

    function setQuantitaVinoRivendicato(string memory _quantitaVinoRivendicato) public {
        require(authorized[msg.sender]);
        lotti[idQuantitaVinoRivendicatoSerial].quantitaVinoRivendicato = _quantitaVinoRivendicato;
        idQuantitaVinoRivendicatoSerial++;
    }

    //funzioni automatiche
    function setSensoriProduttore(uint256 _idLotto, string memory _pesoArrivo, string memory _pesoProdottoFinito, string memory _idContainer, string memory _temperaturaContainer) public {

        lotti[_idLotto].pesoArrivo = _pesoArrivo;
        lotti[_idLotto].pesoProdottoFinito = _pesoProdottoFinito;
        lotti[_idLotto].idContainer = _idContainer;
        lotti[_idLotto].temperaturaContainer = _temperaturaContainer;
    }

    //funioni get
    function getIdProdottiVinificazioneSerial() public view returns(uint256) {
        require(authorized[msg.sender]);
        return idProdottiVinificazioneSerial;
    }

    function getIdQuantitaVinoOttenutoSerial() public view returns(uint256) {
        require(authorized[msg.sender]);
        return idQuantitaVinoOttenutoSerial;
    }

    function getIdQuantitaVinoRivendicatoSerial() public view returns(uint256) {
        require(authorized[msg.sender]);
        return idQuantitaVinoRivendicatoSerial;
    }

    function getProdottiVinificazione(uint256 _idLotto) public view returns(string memory) {
        require(authorized[msg.sender]);
        return lotti[_idLotto].prodottiVinificazione;
    }

    function getQuantitaVinoOttenuto(uint256 _idLotto) public view returns(string memory) {
        require(authorized[msg.sender]);
        return lotti[_idLotto].quantitaVinoOttenuto;
    }

    function getQuantitaVinoRivendicato(uint256 _idLotto) public view returns(string memory) {
        require(authorized[msg.sender]);
        return lotti[_idLotto].quantitaVinoRivendicato;
    }

    function getDatiSensoriProduttore(uint256 _idLotto) public view returns(string memory, string memory, string memory, string memory) {
        require(authorized[msg.sender]);
        return (lotti[_idLotto].pesoArrivo, lotti[_idLotto].pesoProdottoFinito, lotti[_idLotto].idContainer, lotti[_idLotto].temperaturaContainer);
    }

    //funzioni di get da Viticoltore
    function getDatiVendita(uint256 _idLotto) public view returns(string memory, string memory, string memory, string memory, string memory) {
        /*devo provare a permissionare queste get*/
        require(authorized[msg.sender]);
        return viticoltoreContract.getDatiVendita(_idLotto);
    }

    function getPesoViticoltore(uint256 _idLotto) public view returns(string memory) {
        require(authorized[msg.sender]);
        (string memory pesoViticoltore,,,,) = viticoltoreContract.getDatiSensoriViticoltore(_idLotto);
        return pesoViticoltore;
    }

    function getDataRaccolta(uint256 _idLotto) public view returns(string memory) {
        require(authorized[msg.sender]);
        return viticoltoreContract.getDataRaccolta(_idLotto);
    }

    function getDestinazioneUva(uint256 _idLotto) public view returns(string memory) {
        require(authorized[msg.sender]);
        return viticoltoreContract.getDestinazioneUva(_idLotto);
    }

    function getTipologiaUva(uint256 _idLotto) public view returns(string memory) {
        require(authorized[msg.sender]);
        (,string memory tipologiaUva,,,) = viticoltoreContract.getDatiSensoriViticoltore(_idLotto);
        return tipologiaUva;
    }

}
