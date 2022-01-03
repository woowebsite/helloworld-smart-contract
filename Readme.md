# Setup

install `truffle` and `ganache`
Truffle use to compile, deploy Solidity source code
Ganache use to testing

```sh
npm install -g truffle
npm install -g ganache-cli
```

# Initial
Initial truffle into a project folder
```sh
mkdir truffle-demo
truffle init
```
Config truffle-config.js as below
```js
module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*' // match any netwrok id
    }
  }
};
```

# Write Smart contract
Write a smart contract 
```console
truffle create contract HelloWorld
```

Write a migration, to deploy on blockchain
```console
truffle create migration deploy_hello_world
truffle migrate
```

# Compile
```sh
truffle compile
```

# Testing
```sh
truffle create test HelloWorld
geneche-cli
```