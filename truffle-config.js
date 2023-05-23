// File: `truffle-config.js` (edited for 7nodes example)
// File: `truffle-config.js`
module.exports = {
  compilers: {
    solc: {
      version: "0.8.0" // or any other version you want to use
    }
  },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 22006, // was 8545
      network_id: "*", // Match any network id
      gasPrice: 0,
      gas: 5000000,
      type: "quorum", // needed for Truffle to support Quorum
    },
    nodetwo: {
      host: "127.0.0.1",
      port: 22001, // was 8545
      network_id: "*", // Match any network id
      gasPrice: 0,
      gas: 4500000,
      type: "quorum", // needed for Truffle to support Quorum
    },
    nodethree: {
      host: "127.0.0.1",
      port: 22002, // was 8545
      network_id: "*", // Match any network id
      gasPrice: 0,
      gas: 4500000,
      type: "quorum", // needed for Truffle to support Quorum
    },
    nodefour: {
      host: "127.0.0.1",
      port: 22003,
      network_id: "*", // Match any network id
      gasPrice: 0,
      gas: 4500000,
      type: "quorum", // needed for Truffle to support Quorum
    },
    nodefive: {
      host: "127.0.0.1",
      port: 22004, // was 8545
      network_id: "*", // Match any network id
      gasPrice: 0,
      gas: 4500000,
      type: "quorum", // needed for Truffle to support Quorum
    },
    nodesix: {
      host: "127.0.0.1",
      port: 22005, // was 8545
      network_id: "*", // Match any network id
      gasPrice: 0,
      gas: 4500000,
      type: "quorum", // needed for Truffle to support Quorum
    },
    nodeseven: {
      host: "127.0.0.1",
      port: 22000,
      network_id: "*", // Match any network id
      gasPrice: 0,
      gas: 4500000,
      type: "quorum", // needed for Truffle to support Quorum
    },
  },
};
