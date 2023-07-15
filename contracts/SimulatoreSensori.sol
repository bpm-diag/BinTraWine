// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Agronomo.sol";
import "./Viticoltore.sol";
import "./Produttore.sol";
import "./Imbottigliatore.sol";
//import "./EnteCertificatore.sol";
import "./Distributore.sol";
import "./Rivenditore.sol";

contract SimulatoreSensori {

    Agronomo agronomoContract;
    Viticoltore viticoltoreContract;
    Produttore produttoreContract;
    Imbottigliatore imbottigliatoreContract;
    //EnteCertificatore EnteCertificatoreContract;
    Distributore distributoreContract;
    Rivenditore rivenditoreContract;
    
    constructor(address agronomoContractAddr, address viticoltoreContractAddr, address produttoreContractAddr, address imbottigliatoreContractAddr,
    address distributoreContractAddr, address rivenditoreContractAddr)  {

        agronomoContract = Agronomo(agronomoContractAddr);
        viticoltoreContract = Viticoltore(viticoltoreContractAddr);
        produttoreContract = Produttore(produttoreContractAddr);
        imbottigliatoreContract = Imbottigliatore(imbottigliatoreContractAddr);
        distributoreContract = Distributore(distributoreContractAddr);
        rivenditoreContract = Rivenditore(rivenditoreContractAddr);
    }

    function setSensoriAgronomo(uint256 _idTerreno, string memory _superficie, string memory _umiditaTerreno, string memory _temperaturaTerreno, string memory _pioggia) public {

        agronomoContract.setSensoriAgronomo(_idTerreno, _superficie, _umiditaTerreno, _temperaturaTerreno, _pioggia);
    }

    function setSensoriViticoltore(uint256 _idTerreno, string memory _quantitaUvaRaccolta, string memory _tipologiaUva, string memory _umidita, string memory _temperatura, string memory _quantitaFertilizzanti) public {

        viticoltoreContract.setSensoriViticoltore(_idTerreno, _quantitaUvaRaccolta, _tipologiaUva, _umidita, _temperatura, _quantitaFertilizzanti);
    }

    function setSensoriProduttore(uint256 _idLotto, string memory _pesoArrivo, string memory _pesoProdottoFinito, string memory _idContainer, string memory _temperaturaContainer) public {

        produttoreContract.setSensoriProduttore(_idLotto, _pesoArrivo, _pesoProdottoFinito, _idContainer, _temperaturaContainer);
    }

    function setSensoriImbottigliatore(uint256 _idLotto, string memory _quantitaProdottoRicevuta, string memory _quantitaVinoImbottigliata, string memory _gradazioneAlcolica) public {

        imbottigliatoreContract.setSensoriImbottigliatore(_idLotto, _quantitaProdottoRicevuta, _quantitaVinoImbottigliata, _gradazioneAlcolica);
    }

    function setSensoriDistributore(uint256 _idLotto, string memory _quantitaTrasportata, string memory _temperaturaTrasporto) public {

        distributoreContract.setSensoriDistributore(_idLotto, _quantitaTrasportata, _temperaturaTrasporto);
    }

    function setSensoriRivenditore(uint256 _idLotto, string memory _tipologiaQuantita) public {

        rivenditoreContract.setSensoriRivenditore(_idLotto, _tipologiaQuantita);
    }

}
