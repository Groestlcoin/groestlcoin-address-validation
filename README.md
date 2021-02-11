# groestlcoin-address-validation

Validate Groestlcoin addresses - Bech32, P2PKH and P2SH! Available for ES6 and Node.js.

```js
validate('bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4');

{
  bech32: true,
  network: 'mainnet',
  address: 'bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4',
  type: 'p2wpkh'
}
```

## Installation
Add `groestlcoin-address-validation` to your Javascript project dependencies using Yarn:
```bash
yarn add groestlcoin-address-validation
```
Or NPM:
```bash
npm install groestlcoin-address-validation --save
```

## Usage

### Importing
Import using ES6:

```js
import validate from 'groestlcoin-address-validation';
```

Or AMD:

```js
var validate = require('groestlcoin-address-validation');
```

### Validating addresses

Validation is done using the `validate(address)` function.
```js
validate('17VZNX1SN5NtKa8UQFxwQbFeFc3iqRYhem')

{
  address: '17VZNX1SN5NtKa8UQFxwQbFeFc3iqRYhem',
  type: 'p2pkh',
  network: 'mainnet',
  bech32: false
}
```

#### Bech32 Example

```js
validate('bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4');

{
  bech32: true,
  network: 'mainnet',
  address: 'bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4',
  type: 'p2wpkh'
}
```

#### Invalid addresses

`validate(address)` will return `false` for any invalid address, regardless of the address type:

```js
validate('bc1qw508d6qejxtdg4y5r3zrrvary0c5xw7kv8f3t4')

false
```

### Networks

This library supports 3 different types of networks: `mainnet`, `testnet` and `regtest`.

> **Note:** When dealing with traditional (non-bech32) addresses, all `regtest` addresses will be recognized as `testnet` addresses.

## Author

Forked from https://github.com/ruigomeseu/bitcoin-address-validation

## License

The MIT License (MIT). Please see [LICENSE file](https://github.com/Groestlcoin/groestlcoin-address-validation/blob/master/LICENSE.md) for more information.
