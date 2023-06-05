// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Imbottigliatore.sol";
import "./Customer.sol";

contract Distributore {

    //dati per autorizzazioni alle chiamate delle funzioni
    address public owner;
    mapping(address => bool) public authorized;

    Imbottigliatore imbottigliatoreContract;
    Customer customerContract;

    constructor(address _imbottigliatoreContractAddress/*, address _customerContractAddress*/)  {
        owner = msg.sender;
        authorized[owner] = true; //solo per fare test, oppure è un'opzione valida se il deploy viene fatto da ogni singolo attore in maniera indipendente.
        imbottigliatoreContract = Imbottigliatore(_imbottigliatoreContractAddress);
        //customerContract = Customer(_customerContractAddress);
        imbottigliatoreContract.addAuthorized(address(this));
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
        string quantita;
        string nomeCliente;
        string dataVendita;
    }

    mapping(uint256 => DatiDistributore) lotti;
    mapping(uint256 => datiVendita) vendite;
    mapping(uint => mapping(address => bool)) allowedAddressesVendite; //mapping per le autirizzazioni sulle get di vendita

    /*identificativi funzioni lotti e vendite*/
    uint256 idDestinazioneSerial = 1;
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

    //inserimento manuale
    function setDestinazione(string memory _destinazione) public {
        require(authorized[msg.sender]);
        lotti[idDestinazioneSerial].destinazione = _destinazione;
        idDestinazioneSerial++;
    }

    function setDatiVendita(string memory _prezzoVendita, string memory _nomeProdotto, string memory _quantita, string memory _nomeCliente,
        string memory _dataVendita, address[] memory _addresses) public {
        require(authorized[msg.sender]);
        vendite[idVenditaSerial].prezzoVendita = _prezzoVendita;
        vendite[idVenditaSerial].nomeProdotto = _nomeProdotto;
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
    }

    //inserimento automatico
    function setSensoriDistributore(uint256 _idLotto, string memory _quantitaTrasportata, string memory _temperaturaTrasporto) public {

        lotti[_idLotto].quantitaTrasportata = _quantitaTrasportata;
        lotti[_idLotto].temperaturaTrasporto = _temperaturaTrasporto;
        //customerContract.setTemperaturaTrasporto(_idLotto, _temperaturaTrasporto);
    }

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

    function getDatiVendita(uint256 _idVendita) public view returns(string memory, string memory, string memory, string memory, string memory) {
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
