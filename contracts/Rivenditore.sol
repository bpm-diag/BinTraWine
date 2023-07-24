// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Distributore.sol";

contract Rivenditore {

    //dati per autorizzazioni alle chiamate delle funzioni
    address public owner;
    mapping(address => bool) public authorized;

    Distributore distributoreContract;

    constructor(address _distributoreContractAddress) {
        owner = msg.sender;
        authorized[owner] = true; //solo per fare test, oppure è un'opzione valida se il deploy viene fatto da ogni singolo attore in maniera indipendente.
        distributoreContract = Distributore(_distributoreContractAddress);
    }

    struct DatiRivenditore {

        //inserimento automatico
        string tipologiaQuantita;
    }

    mapping(uint256 => DatiRivenditore) lotti;

    //funzioni di autorizzazione 
    function addAuthorized(address _address) public {
        //require(msg.sender == owner);
        authorized[_address] = true;
    }

    function removeAuthorized(address _address) public {
        require(msg.sender == owner);
        authorized[_address] = false;
    }

    uint256 serialtest = 1;
    //inserimento automatico
    function setSensoriRivenditore(uint256 _idLotto, string memory _tipologiaQuantita) public {

        lotti[_idLotto].tipologiaQuantita = _tipologiaQuantita;
        splitString(_tipologiaQuantita);
        if(tipologieQuantita[splitType[serialtest]] != 0 || tipologieQuantita[splitType[serialtest]]==0){
            uint256 temp = tipologieQuantita[splitType[serialtest]] + stringToUint(splitQuantity[serialtest]); /*_quantita;*/
            tipologieQuantita[splitType[serialtest]] = temp;
        }

        serialtest++;
        
    }

    //funzioni get
    function getDatiSensoriRivenditore(uint256 _idLotto) public view returns(string memory) {
        require(authorized[msg.sender]);
        return lotti[_idLotto].tipologiaQuantita;
    }

    //funzioni get da Distributore
    function getDatiVendita(uint256 _idLotto) public view returns(string memory, string memory, /*string memory*/uint256, string memory, string memory) {
        require(authorized[msg.sender]);
        return distributoreContract.getDatiVendita(_idLotto);
    }

    /* supporto per data aggregation*/
    struct SplitResult {
        string firstPart;
        string secondPart;
    }

    //SplitResult[] splits;
    mapping(uint256=>string) splitType;
    mapping(uint256=>string) splitQuantity;
    mapping(string=>uint256) tipologieQuantita;
    uint256 serial = 1;
    
    function splitString(string memory input) public {
        
        uint256 commaIndex = findCommaIndex(input);
        require(commaIndex > 0 && commaIndex < bytes(input).length - 1, "Invalid string format");

        string memory firstPart = substring(input, 0, commaIndex);
        string memory secondPart = substring(input, commaIndex + 2, bytes(input).length);

        splitType[serial] = firstPart;
        splitQuantity[serial] = secondPart;

        serial++;
        /*SplitResult memory result;
        result.firstPart = firstPart;
        result.secondPart = secondPart;
        splits.push(result);*/
    }

    function findCommaIndex(string memory input) private pure returns (uint256) {
        bytes memory inputBytes = bytes(input);
        for (uint256 i = 0; i < inputBytes.length; i++) {
            if (inputBytes[i] == bytes1(',')) {
                return i;
            }
        }
        return 0;
    }

    function substring(string memory input, uint256 startIndex, uint256 endIndex) private pure returns (string memory) {
        bytes memory inputBytes = bytes(input);
        require(startIndex < endIndex && endIndex <= inputBytes.length, "Invalid substring indices");

        bytes memory result = new bytes(endIndex - startIndex);
        for (uint256 i = startIndex; i < endIndex; i++) {
            result[i - startIndex] = inputBytes[i];
        }

        return string(result);
    }
    
    function getResult(uint256 index) public view returns (string memory, string memory) {
        //require(index < splits.length, "Invalid index");
        //return (splits[index].firstPart, splits[index].secondPart);
        return(splitType[index], splitQuantity[index]);
    }

    function getSerial() public view returns(uint256){
        return serial;
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

    function getMappaLottiLength() public view returns(uint256){
        uint256 count = 0;
    for (uint256 i = 1; i < type(uint256).max; i++) {
        if (bytes(lotti[i].tipologiaQuantita).length == 0) {
            break;
        }
        count++;
    }
    return count;
    }

    function queryTipologiaQuantita() public view returns (string[] memory, string[] memory) {
        
        uint256 length = getMappaLottiLength();
        string[] memory resultTipologia = new string[](length);
        string[] memory resultQuantita = new string[](length);

        string[] memory usedTipologia = new string[](length);
        uint256 uniqueCount = 0; // Counter for unique names

        for (uint256 i = 1; i <= length; i++) {
            string memory nomeTipologia = splitType[i];
            bool isUsed = false;

        // Check if the name has already been used
        for (uint256 j = 0; j < uniqueCount; j++) {
            if (keccak256(abi.encodePacked(usedTipologia[j])) == keccak256(abi.encodePacked(nomeTipologia))) {
                isUsed = true;
                break;
            }
        }

        if (!isUsed) {
            usedTipologia[uniqueCount] = nomeTipologia;
            resultTipologia[uniqueCount] = nomeTipologia;
            resultQuantita[uniqueCount] = uintToString(tipologieQuantita[nomeTipologia]);/*splitQuantity[uniqueCount+1];*/
            uniqueCount++;
        }
    }

    // Resize the arrays to remove unused slots
    assembly {
        mstore(resultTipologia, uniqueCount)
        mstore(resultQuantita, uniqueCount)
    }

        return (resultTipologia, resultQuantita);
    }     

}