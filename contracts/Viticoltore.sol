// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Agronomo.sol";
import "./Customer.sol";

contract Viticoltore {

    //dati per autorizzazioni alle chiamate delle funzioni
    address public owner;
    mapping(address => bool) public authorized;

    Agronomo agronomoContract;
    Customer customerContract;

    constructor(address _agronomoContractAddress/*, address _customerContractAddress*/)  {
        owner = msg.sender;
        authorized[owner] = true; //solo per fare test, oppure è un'opzione valida se il deploy viene fatto da ogni singolo attore in maniera indipendente.
        agronomoContract = Agronomo(_agronomoContractAddress);
        //customerContract = Customer(_customerContractAddress);
        agronomoContract.addAuthorized(address(this));

    }

    //dividere le istanze per terreni

    struct DatiViticoltore {

    //dati funzioni inserimento manuale
    string dataRaccolta;
    string datiForniture;
    string destinazioneUva;


    //dati funzioni simulatore
    string quantitaUvaRaccolta;
    string tipologiaUva;
    string umidita;
    string temperatura;
    string quantitaFertilizzanti;

    }

    struct datiVendita {
        string prezzoVendita;
        string nomeProdotto;
        string quantita;
        string dataVendita;
        string nomeCliente;
    }

    mapping(uint256 => DatiViticoltore) terreni;
    mapping(uint256 => datiVendita) vendite;
    mapping(uint => mapping(address => bool)) allowedAddressesVendite; //mapping per le autirizzazioni sulle get di vendita

    /*identificativi funzioni terreni e vendite*/
    uint256 idDataRaccoltaSerial = 1;
    uint256 idDatiFornitureSerial = 1;
    uint256 idDestinazioneUvaSerial = 1;
    uint256 idVenditaSerial = 1;


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
    /* esempio per gestire decimali, BISOGNA INSERIRE IN INPUT IN QUESTO MODO: EX, 125,76 VA INSERITO COME => 12576, CHE VERRA' RAPPRESENTATO COME 1257600 E BISOGNA INTERPRETARE I 2
    ZERI COME I DECIMALI, QUINDI LEGGERLO COME 125,76
    function setDataRaccolta(uint256 _idTerreno, uint256 _dataRaccolta) public {
        uint256 decimals = 2;
        terreni[_idTerreno].dataRaccolta = _dataRaccolta * (10**decimals);
    }
    */

    function setDataRaccolta(string memory _dataRaccolta) public {
        require(authorized[msg.sender]);
        terreni[idDataRaccoltaSerial].dataRaccolta = _dataRaccolta;
        //customerContract.setDataRaccolta(idDataRaccoltaSerial, _dataRaccolta);
        idDataRaccoltaSerial++;
    }

    function setDatiForniture(string memory _datiForniture) public{
        require(authorized[msg.sender]);
        terreni[idDatiFornitureSerial].datiForniture = _datiForniture;
        //customerContract.setDatiForniture(idDatiFornitureSerial, _datiForniture);
        idDatiFornitureSerial++;
    }

   function setDestinazioneUva(string memory _destinazioneUva) public {
       require(authorized[msg.sender]);
       terreni[idDestinazioneUvaSerial].destinazioneUva = _destinazioneUva;
       //customerContract.setDestinazioneUva(idDestinazioneUvaSerial, _destinazioneUva);
       idDestinazioneUvaSerial++;
   }

   function setVendita(string memory _nomeProdotto,string memory _prezzoVendita, string memory _quantita, string memory _nomeCliente,
            string memory _dataVendita, address[] memory _addresses) public {
       require(authorized[msg.sender]);
       vendite[idVenditaSerial].nomeProdotto = _nomeProdotto;
       vendite[idVenditaSerial].prezzoVendita = _prezzoVendita;
       vendite[idVenditaSerial].quantita = _quantita;
       vendite[idVenditaSerial].nomeCliente = _nomeCliente;
       vendite[idVenditaSerial].dataVendita = _dataVendita;

       for(uint i=0; i<_addresses.length; i++){ //ciclo necessario a definire gli address forniti in input come "trusted"
            if(_addresses[i] != address(0)){ //entra in azione solo de gli address forniti sono diversi dall'address nullo (0x0000000000000...)
                allowedAddressesVendite[idVenditaSerial][msg.sender] = true; //TEST
                allowedAddressesVendite[idVenditaSerial][_addresses[i]] = true; //salva gli address inseriti e li definisce "trusted" attraverso il parametro booleano "true"
            }
        } 

       idVenditaSerial++;
       /*vendite[_idVendita].nomeCliente = _nomeCliente;*/
   }

    //funzione automatiche
    function setSensoriViticoltore(uint256 _idTerreno, string memory _quantitaUvaRaccolta, string memory _tipologiaUva, string memory _umidita, string memory _temperatura, string memory _quantitaFertilizzanti) public {

        terreni[_idTerreno].quantitaUvaRaccolta = _quantitaUvaRaccolta;
        terreni[_idTerreno].tipologiaUva = _tipologiaUva;
        terreni[_idTerreno].umidita = _umidita;
        terreni[_idTerreno].temperatura = _temperatura;
        terreni[_idTerreno].quantitaFertilizzanti = _quantitaFertilizzanti;

    }

    //funzioni di get
    function getIdDataRaccoltaSerial() public view returns(uint256){
        require(authorized[msg.sender]);
        return idDataRaccoltaSerial;
    }

    function getIdDatiFornitureSerial() public view returns(uint256){
        require(authorized[msg.sender]);
        return idDatiFornitureSerial;
    }

    function getIdDestinazioneUvaSerial() public view returns(uint256){
        require(authorized[msg.sender]);
        return idDestinazioneUvaSerial;
    }

    function getIdVenditaSerial() public view returns(uint256){
        require(authorized[msg.sender]);
        return idVenditaSerial;
    }

    function getDataRaccolta(uint256 _idTerreno) public view returns(string memory) {
        require(authorized[msg.sender]);
        return terreni[_idTerreno].dataRaccolta;
    }

    function getDatiForniture(uint256 _idTerreno) public view returns(string memory) {
        require(authorized[msg.sender]);
        return terreni[_idTerreno].datiForniture;
    }

    function getDestinazioneUva(uint256 _idTerreno) public view returns(string memory) {
        require(authorized[msg.sender]);
        return terreni[_idTerreno].destinazioneUva;
    }

    function getDatiVendita(uint256 _idVendita) public view returns(string memory, string memory, string memory, string memory, string memory) {
        require(authorized[msg.sender]);
        
        if (allowedAddressesVendite[_idVendita][msg.sender] == true) { //"msg.sender" rappresenta l'address di chi sta chiamando il metodo.
           return (vendite[_idVendita].nomeProdotto, vendite[_idVendita].prezzoVendita, vendite[_idVendita].quantita, vendite[_idVendita].nomeCliente,
            vendite[_idVendita].dataVendita);
        } else {
            revert("Utente non autorizzato"); //revert() interrompe l'esecuzione della transazione e la annulla, in questo caso mostra anche un messaggio di warning.
        }
    }

    function getDatiSensoriViticoltore(uint256 _idTerreno) public view returns(string memory, string memory, string memory, string memory, string memory) {
        require(authorized[msg.sender]);
        return (terreni[_idTerreno].quantitaUvaRaccolta, terreni[_idTerreno].tipologiaUva, terreni[_idTerreno].umidita, terreni[_idTerreno].temperatura, terreni[_idTerreno].quantitaFertilizzanti);
    }

    //funzioni di get Da Agronomo
    function getUmiditaTerreno(uint256 _idTerreno) public view returns(string memory) {
         (, string memory umiditaTerreno, ,) = agronomoContract.getDatiSensoriAgronomo(_idTerreno);
         return umiditaTerreno;
    }

    function getTemperaturaTerreno(uint256 _idTerreno) public view returns(string memory) {
         (,, string memory temperaturaTerreno,) = agronomoContract.getDatiSensoriAgronomo(_idTerreno);
         return temperaturaTerreno;
    }

    function getPioggiaTerreno(uint256 _idTerreno) public view returns(string memory) {
        (,,, string memory pioggiaterreno) = agronomoContract.getDatiSensoriAgronomo(_idTerreno);
        return pioggiaterreno;
    }

    function getSuperficieTerreno(uint256 _idTerreno) public view returns(string memory) {
        (string memory superficieTerreno,,,) = agronomoContract.getDatiSensoriAgronomo(_idTerreno);
        return superficieTerreno;
    }

}
