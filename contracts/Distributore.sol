// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Imbottigliatore.sol";

contract Distributore {

    //dati per autorizzazioni alle chiamate delle funzioni
    address public owner;
    mapping(address => bool) public authorized;

    Imbottigliatore imbottigliatoreContract;

    constructor(address _imbottigliatoreContractAddress) {
        owner = msg.sender;
        authorized[owner] = true; //solo per fare test, oppure è un'opzione valida se il deploy viene fatto da ogni singolo attore in maniera indipendente.
        imbottigliatoreContract = Imbottigliatore(_imbottigliatoreContractAddress);
    }

    struct DatiDistributore {

        //dati manuali
        string destinazione;
        
        //dati automatici
        string quantitaTrasportata;
        string temperaturaTrasporto;
        string lotto;
    }

    struct datiVendita {
        string prezzoVendita;
        string nomeProdotto;
        //string quantita;
        uint256 quantita;
        string nomeCliente;
        string dataVendita;
    }

    mapping(uint256 => DatiDistributore) lotti;
    mapping(uint256 => datiVendita) vendite;
    mapping(uint => mapping(address => bool)) allowedAddressesVendite; //mapping per le autirizzazioni sulle get di vendita
    mapping(string => uint256) nomiQuantita; // MAPPA DI TEST PER DATA AGGREGATION
   
    /*identificativi funzioni lotti e vendite*/
    uint256 idDestinazioneSerial = 1;
    uint256 idVenditaSerial = 1;

    //funzioni di autorizzazione 
    function addAuthorized(address _address) public {
        //require(msg.sender == owner);
        authorized[_address] = true;
    }

    function removeAuthorized(address _address) public {
        require(msg.sender == owner);
        authorized[_address] = false;
    }

    //inserimento manuale
    function setDestinazione(string memory _destinazione) public {
        require(authorized[msg.sender]);
        lotti[idDestinazioneSerial].destinazione = _destinazione;
        idDestinazioneSerial++;
    }

    function setDatiVendita(string memory _prezzoVendita, string memory _nomeProdotto, uint256 _quantita/*string memory _quantita*/, string memory _nomeCliente, 
        string memory _dataVendita, address[] memory _addresses) public {
        require(authorized[msg.sender]);
        vendite[idVenditaSerial].prezzoVendita = _prezzoVendita;
        vendite[idVenditaSerial].nomeProdotto = _nomeProdotto;
        vendite[idVenditaSerial].quantita = _quantita;
        vendite[idVenditaSerial].nomeCliente = _nomeCliente;
        vendite[idVenditaSerial].dataVendita = _dataVendita;

        //nomiQuantita[_nomeCliente] = _quantita; //TEST PER DATA AGGREGATION
        if(nomiQuantita[_nomeCliente] != 0 || nomiQuantita[_nomeCliente]==0){
            uint256 temp = nomiQuantita[_nomeCliente] + _quantita;
            nomiQuantita[_nomeCliente] = temp;
        }
        
        for(uint i=0; i<_addresses.length; i++){ //ciclo necessario a definire gli address forniti in input come "trusted"
            if(_addresses[i] != address(0)){ //entra in azione solo de gli address forniti sono diversi dall'address nullo (0x0000000000000...)
                allowedAddressesVendite[idVenditaSerial][_addresses[i]] = true; //salva gli address inseriti e li definisce "trusted" attraverso il parametro booleano "true"
            }
        }
        
        idVenditaSerial++;
    }

    //inserimento automatico
    function setSensoriDistributore(uint256 _idLotto, string memory _quantitaTrasportata, string memory _temperaturaTrasporto) public {

        lotti[_idLotto].quantitaTrasportata = _quantitaTrasportata;
        lotti[_idLotto].temperaturaTrasporto = _temperaturaTrasporto;
    }

    /*query e funzioni di appoggio per data analysis*/
    function getMappaLottiLength() public view returns(uint256){
        uint256 count = 0;
    for (uint256 i = 1; i < type(uint256).max; i++) {
        if (bytes(lotti[i].quantitaTrasportata).length == 0) {
            break;
        }
        count++;
    }
    return count;
    }

    function queryQuantitaTrasportataPerLotto() public view returns(string[] memory, uint256[] memory){
        
        uint256 length = getMappaLottiLength();
        string[] memory result = new string[](length);
        uint256[] memory resultLotti = new uint256[](length);

        for(uint256 i=1; i<=length; i++){
            resultLotti[i-1] = i;
            result[i-1] = lotti[i].quantitaTrasportata;
        }
        return (result, resultLotti);
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

    //mapping(string => bool) usedNomi; // Keep track of used names
    function queryNomiClientiQuantita() public view returns (string[] memory, uint256[] memory) {
        
        uint256 length = getMappingVenditeLength();
        string[] memory resultNomi = new string[](length);
        uint256[] memory resultQuantita = new uint256[](length);

       /* for (uint256 i = 1; i <= length; i++) {
            //resultNomi[i-1] = vendite[i].nomeCliente;
            //resultQuantita[i-1] = vendite[i].quantita;
            
            resultNomi[i-1] = vendite[i].nomeCliente;
            resultQuantita[i-1] = nomiQuantita[vendite[i].nomeCliente]; 
        }*/
        
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

    //funzioni get
    function getIdDestinazioneSerial() public view returns(uint256) {
        require(authorized[msg.sender]);
        return idDestinazioneSerial;
    }

    function getIdVenditaSerial() public view returns(uint256) {
        require(authorized[msg.sender]);
        return idVenditaSerial;
    }

    function getDestinazione(uint256 _idLotto) public view returns(string memory) {
        require(authorized[msg.sender]);
        return lotti[_idLotto].destinazione;
    }

    function getDatiVendita(uint256 _idVendita) public view returns(string memory, string memory, uint256/*string memory*/, string memory, string memory) {
        require(authorized[msg.sender]);

        if (allowedAddressesVendite[_idVendita][msg.sender] == true) { //"msg.sender" rappresenta l'address di chi sta chiamando il metodo.
            return (vendite[_idVendita].prezzoVendita, vendite[_idVendita].nomeProdotto, vendite[_idVendita].quantita, vendite[_idVendita].nomeCliente,
            vendite[_idVendita].dataVendita);
        } else {
            revert("Utente non autorizzato"); //revert() interrompe l'esecuzione della transazione e la annulla, in questo caso mostra anche un messaggio di warning.
        }
        
    }

    function getDatiSensoriDistributore(uint256 _idLotto) public view returns(string memory, string memory) {
        require(authorized[msg.sender]);
        return (lotti[_idLotto].quantitaTrasportata, lotti[_idLotto].temperaturaTrasporto);
    }

    //funzioni di get da Imbottigliatore
    function getCodiceBarre(uint256 _idLotto) public view returns(string memory) {
        return imbottigliatoreContract.getCodiceBarre(_idLotto);
    }

}