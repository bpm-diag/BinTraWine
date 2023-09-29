// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Agronomo.sol";

contract Viticoltore {

    //dati per autorizzazioni alle chiamate delle funzioni
    address public owner;
    mapping(address => bool) public authorized;

    Agronomo agronomoContract;
    
    constructor(address _agronomoContractAddress)  {
        owner = msg.sender;
        authorized[owner] = true; //solo per fare test, oppure è un'opzione valida se il deploy viene fatto da ogni singolo attore in maniera indipendente.
        agronomoContract = Agronomo(_agronomoContractAddress);
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
    //uint256 quantitaUvaRaccolta;
    string tipologiaUva;
    string umidita;
    string temperatura;
    string quantitaFertilizzanti;

    }

    struct datiVendita {
        string prezzoVendita;
        string nomeProdotto;
        string quantita;
        //uint256 quantita;
        string dataVendita;
        string nomeCliente;
    }

    mapping(uint256 => DatiViticoltore) terreni;
    mapping(uint256 => datiVendita) vendite;
    mapping(uint => mapping(address => bool)) allowedAddressesVendite; //mapping per le autirizzazioni sulle get di vendita
    mapping(string => uint256) nomiQuantita; // MAPPA DI TEST PER DATA AGGREGATION

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

   function setVendita(string memory _nomeProdotto,string memory _prezzoVendita, string memory/*uint256*/ _quantita, string memory _nomeCliente,
            string memory _dataVendita, address[] memory _addresses) public {
       require(authorized[msg.sender]);
       vendite[idVenditaSerial].nomeProdotto = _nomeProdotto;
       vendite[idVenditaSerial].prezzoVendita = _prezzoVendita;
       vendite[idVenditaSerial].quantita = _quantita;
       vendite[idVenditaSerial].nomeCliente = _nomeCliente;
       vendite[idVenditaSerial].dataVendita = _dataVendita;

       //TEST PER DATA AGGREGATION
       if(nomiQuantita[_nomeCliente] != 0 || nomiQuantita[_nomeCliente]==0){
            uint256 temp = nomiQuantita[_nomeCliente] + stringToUint(_quantita);
            nomiQuantita[_nomeCliente] = temp;
        }

       for(uint i=0; i<_addresses.length; i++){ //ciclo necessario a definire gli address forniti in input come "trusted"
            if(_addresses[i] != address(0)){ //entra in azione solo de gli address forniti sono diversi dall'address nullo (0x0000000000000...)
                allowedAddressesVendite[idVenditaSerial][msg.sender] = true; //TEST
                allowedAddressesVendite[idVenditaSerial][_addresses[i]] = true; //salva gli address inseriti e li definisce "trusted" attraverso il parametro booleano "true"

                //TEST
                addAuthorized(_addresses[i]);
            }
        } 

       idVenditaSerial++;
       /*vendite[_idVendita].nomeCliente = _nomeCliente;*/
   }

    //funzione automatiche
    //uint256[] app; //TEST DATA AGGREGATION
    uint256 idRaccolta=1;
    mapping(string => uint256) dateQuantita;
    function setSensoriViticoltore(uint256 _idTerreno, string memory _quantitaUvaRaccolta, string memory _tipologiaUva, string memory _umidita, string memory _temperatura, string memory _quantitaFertilizzanti) public {

      /*  if(terreni[_idTerreno].quantitaUvaRaccolta == 0) {
        app.push( _quantitaUvaRaccolta); //TEST DATA AGGREGATION
        } else {
            app.push(terreni[_idTerreno].quantitaUvaRaccolta + _quantitaUvaRaccolta);
        } */
    
        terreni[_idTerreno].quantitaUvaRaccolta = _quantitaUvaRaccolta;
        terreni[_idTerreno].tipologiaUva = _tipologiaUva;
        terreni[_idTerreno].umidita = _umidita;
        terreni[_idTerreno].temperatura = _temperatura;
        terreni[_idTerreno].quantitaFertilizzanti = _quantitaFertilizzanti;

        //TEST PER DATA AGGREGATION
        
       if(dateQuantita[getDataRaccolta(idRaccolta)] != 0 || dateQuantita[getDataRaccolta(idRaccolta)]==0){
            uint256 temp = dateQuantita[getDataRaccolta(idRaccolta)] + stringToUint(_quantitaUvaRaccolta);
            dateQuantita[getDataRaccolta(idRaccolta)] = temp;
            idRaccolta++;
        }

    }

    /* query e funzioni di supporto per data analysis*/
    function getMappingTerreniLength() public view returns (uint256) {
    uint256 count = 0;
    for (uint256 i = 1; i < type(uint256).max; i++) {
        if (bytes(terreni[i].dataRaccolta).length == 0) {
            break;
        }
        count++;
    }
    return count;
    }

     function stringToUint(string memory s) internal pure returns (uint256) {
    bytes memory b = bytes(s);
    uint256 result = 0;
    for (uint256 i = 0; i < b.length; i++) {
        uint256 c = uint256(uint8(b[i]));
        if (c >= 48 && c <= 57) {
            result = result * 10 + (c - 48);
        }
    }
    return result;
    }

    function uintToString(uint256 value) internal pure returns (string memory) {
    if (value == 0) {
        return "0";
    }
    uint256 temp = value;
    uint256 digits;
    while (temp != 0) {
        digits++;
        temp /= 10;
    }
    bytes memory buffer = new bytes(digits);
    while (value != 0) {
        digits--;
        buffer[digits] = bytes1(uint8(48 + value % 10));
        value /= 10;
    }
    return string(buffer);
    }

    //string[] app;
    function queryDataUvaRaccolta() public view returns (string[] memory, uint256[] memory/*string[] memory*/) {
        
        uint256 length = getMappingTerreniLength();
        string[] memory resultData = new string[](length);
        uint256[] memory resultQuantitaRaccolta = new uint256[](length);
        //string[] memory app = new string[](length);

      /*  for (uint256 i = 1; i <= length; i++) {
            resultData[i-1] = terreni[i].dataRaccolta;
            resultQuantitaRaccolta[i-1] = app[i-1];//terreni[i].quantitaUvaRaccolta;
            //app[i] = terreni[i].quantitaUvaRaccolta;
        } */

        string[] memory usedDate = new string[](length);
        uint256 uniqueCount = 0; // Counter for unique names

        for (uint256 i = 1; i <= length; i++) {
            string memory data = terreni[i].dataRaccolta;
            bool isUsed = false;

        // Check if the name has already been used
        for (uint256 j = 0; j < uniqueCount; j++) {
            if (keccak256(abi.encodePacked(usedDate[j])) == keccak256(abi.encodePacked(data))) {
                isUsed = true;
                break;
            }
        }

        if (!isUsed) {
            usedDate[uniqueCount] = data;
            resultData[uniqueCount] = data;
            resultQuantitaRaccolta[uniqueCount] = dateQuantita[data];
            uniqueCount++;
        }
    }

    // Resize the arrays to remove unused slots
    assembly {
        mstore(resultData, uniqueCount)
        mstore(resultQuantitaRaccolta, uniqueCount)
    }

        

            return (resultData, /*app*/resultQuantitaRaccolta);
    } 

    function getMappingVenditeLength() public view returns (uint256) {
        
        uint256 count = 0;
        for (uint256 i = 1; i < type(uint256).max; i++) {
            if (bytes(vendite[i].prezzoVendita).length == 0) {
                break;
            }
            count++;
        }
            return count;
    }

    function queryNomiClientiQuantita() public view returns (string[] memory, uint256[] memory) {
        
        uint256 length = getMappingVenditeLength();
        string[] memory resultNomi = new string[](length);
        uint256[] memory resultQuantita = new uint256[](length);

      /*  for (uint256 i = 1; i <= length; i++) {
            resultNomi[i-1] = vendite[i].nomeCliente;
            resultQuantita[i-1] = vendite[i].quantita;
        }

        return (resultNomi, resultQuantita);*/
        string[] memory usedNomi = new string[](length);
        uint256 uniqueCount = 0; // Counter for unique names

        for (uint256 i = 1; i <= length; i++) {
            string memory nomeCliente = vendite[i].nomeCliente;
            bool isUsed = false;

        // Check if the name has already been used
        for (uint256 j = 0; j < uniqueCount; j++) {
            if (keccak256(abi.encodePacked(usedNomi[j])) == keccak256(abi.encodePacked(nomeCliente))) {
                isUsed = true;
                break;
            }
        }

        if (!isUsed) {
            usedNomi[uniqueCount] = nomeCliente;
            resultNomi[uniqueCount] = nomeCliente;
            resultQuantita[uniqueCount] = nomiQuantita[nomeCliente];
            uniqueCount++;
        }
    }

    // Resize the arrays to remove unused slots
    assembly {
        mstore(resultNomi, uniqueCount)
        mstore(resultQuantita, uniqueCount)
    }

        return (resultNomi, resultQuantita);
    } 
//


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

    function getDatiVendita(uint256 _idVendita) public view returns(string memory, string memory, /*uint256*/string memory, string memory, string memory) {
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
