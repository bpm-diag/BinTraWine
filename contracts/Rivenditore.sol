// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Distributore.sol";

contract Rivenditore {

    //dati per autorizzazioni alle chiamate delle funzioni
    address public owner;
    mapping(address => bool) public authorized;

    Distributore distributoreContract;

    constructor(address _distributoreContractAddress)  {
        owner = msg.sender;
        authorized[owner] = true; //solo per fare test, oppure è un'opzione valida se il deploy viene fatto da ogni singolo attore in maniera indipendente.
        distributoreContract = Distributore(_distributoreContractAddress);
        distributoreContract.addAuthorized(address(this));
    }

    struct DatiRivenditore {

        //inserimento automatico
        string tipologiaQuantita;
    }

    mapping(uint256 => DatiRivenditore) lotti;

    //funzioni di autorizzazione
    function addAuthorized(address _address) public {
        //require(msg.sender == owner); Da tenere solo per testing e comodità, a lavoro definitivo va levata.
        authorized[_address] = true;
    }

    function removeAuthorized(address _address) public {
        require(msg.sender == owner);
        authorized[_address] = false;
    }

    //inserimento automatico
    function setSensoriRivenditore(uint256 _idLotto, string memory _tipologiaQuantita) public {

        lotti[_idLotto].tipologiaQuantita = _tipologiaQuantita;
    }

    //funzioni get
    function getDatiSensoriRivenditore(uint256 _idLotto) public view returns(string memory) {
        require(authorized[msg.sender]);
        return lotti[_idLotto].tipologiaQuantita;
    }

    //funzioni get da Distributore
    function getDatiVendita(uint256 _idLotto) public view returns(string memory, string memory, string memory, string memory, string memory) {
        require(authorized[msg.sender]);
        return distributoreContract.getDatiVendita(_idLotto);
    }

}
