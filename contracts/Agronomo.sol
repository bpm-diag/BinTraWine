// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Agronomo {

    //dati per autorizzazioni alle chiamate delle funzioni
    address public owner;
    mapping(address => bool) public authorized;

   constructor()  {
        owner = msg.sender;
        authorized[owner] = true; //solo per fare test, oppure è un'opzione valida se il deploy viene fatto da ogni singolo attore in maniera indipendente.
        //authorized[address(this)] = true;
    }

    //dividere le istanze per terreni

    struct DatiAgronomo {
    
    //dati funzioni inserimento manuale
    string analisiQualitaProdotto;
    string certificazioneUvaAppezzamento;
    
    //dati funzioni simulatore
    string superficie;
    string umiditaTerreno;
    string temperaturaTerreno;
    string pioggia;

    }

    mapping(uint256 => DatiAgronomo) terreni; //ad ogni identificativo risulta un'istanza diversa
   
   /*identificativi delle funzioni per i terreni*/
    uint256 idAnalisiQualitaSerial = 1;
    uint256 idCertificazioneUvaAppezzamentoSerial = 1;

    //funzioni di autorizzazione 
    function addAuthorized(address _address) public {
        //require(msg.sender == owner || authorized[msg.sender] == true); Da tenere solo per testing e comodità, a lavoro definitivo va levata.
        authorized[_address] = true;
    }

    function removeAuthorized(address _address) public {
        require(msg.sender == owner);
        authorized[_address] = false;
    }

    //funzioni manuali
    function setAnalisiQualitaProdotto(string memory _analisiQualitaProdotto) public {
        require(authorized[msg.sender]);
        terreni[idAnalisiQualitaSerial].analisiQualitaProdotto = _analisiQualitaProdotto;
        idAnalisiQualitaSerial++;
    }

    function setCertificazioneUvaAppezzamento(string memory _certificazioneUvaAppezzamento) public {
        require(authorized[msg.sender]);
        terreni[idCertificazioneUvaAppezzamentoSerial].certificazioneUvaAppezzamento = _certificazioneUvaAppezzamento;
        //customerContract.setCertificazioneUvaAppezzamento(idCertificazioneUvaAppezzamentoSerial, _certificazioneUvaAppezzamento);
        idCertificazioneUvaAppezzamentoSerial++;
    }

    //funzioni simmulatore (VERIFICARE SE IL FATTO CHE SIA PRIVATE DA PROBLEMI NEL SIMULATORE)
    function setSensoriAgronomo(uint256 _idTerreno, string memory _superficie, string memory _umiditaTerreno, string memory _temperaturaTerreno, string memory _pioggia) public {
        terreni[_idTerreno].superficie = _superficie;
        terreni[_idTerreno].umiditaTerreno = _umiditaTerreno;
        terreni[_idTerreno].temperaturaTerreno = _temperaturaTerreno;
        terreni[_idTerreno].pioggia = _pioggia;
    }
    
    //funzioni di get
    function getIdAnalisiQualitaSerial() public view returns(uint256){
        require(authorized[msg.sender]);
        return idAnalisiQualitaSerial;
    }

    function getIdCertificazioneUvaAppezzamentoSerial() public view returns(uint256){
        require(authorized[msg.sender]);
        return idCertificazioneUvaAppezzamentoSerial;
    }

    function getAnalisiQualitaProdotto(uint256 _idTerreno) public view returns(string memory) {
        //aggiungere permissioning Ente certificatore + ?
        require(authorized[msg.sender]);
        return terreni[_idTerreno].analisiQualitaProdotto;
    }

    function getCertificazioneUvaAppezzamento(uint256 _idTerreno) public view returns(string memory) {
        //aggiungere permissioning Ente certificatore + ?
        require(authorized[msg.sender]);
        return terreni[_idTerreno].certificazioneUvaAppezzamento;

    }

    function getDatiSensoriAgronomo(uint256 _idTerreno) public view returns(string memory, string memory, string memory, string memory) {
        //aggiungere permissioning Ente certificatore + ?
        require(authorized[msg.sender]);
        return (terreni[_idTerreno].superficie, terreni[_idTerreno].umiditaTerreno, terreni[_idTerreno].temperaturaTerreno, terreni[_idTerreno].pioggia);

    }

}