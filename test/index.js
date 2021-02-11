const { assert } = require('chai');
const validate = require('../lib/index.cjs.js');

describe('Validator', () => {
  it('validates Mainnet P2PKH', () => {
    const address = 'FqLDjQPjguc5SHwM2RxMbX24fsc8WmQoBA';

    assert.isNotFalse(validate(address));
    assert.include(validate(address), { type: 'p2pkh', network: 'mainnet', bech32: false });
  });

  it('validates Testnet P2PKH', () => {
    const address = 'muCVFTRDC6JVHuYx3qupeQ6hraoM8ENGUy';

    assert.isNotFalse(validate(address));
    assert.include(validate(address), { type: 'p2pkh', network: 'testnet', bech32: false });
  });

  it('fails on invalid P2PKH', () => {
    const address = 'FqLDjQPjguc5SHwMMRxMbX24fsc8WmQoBA';

    assert.isFalse(validate(address));
  });

  it('validates Mainnet P2SH', () => {
    const address = '3B36sX2yoULBTrQhrjzWHrhyvv65zX8Z2a';

    assert.isNotFalse(validate(address));
    assert.include(validate(address), { type: 'p2sh', network: 'mainnet', bech32: false });
  });

  it('validates Testnet P2SH', () => {
    const address = '2MyzRukiQBPKpRDzMbKxRQSRVWVMEHozoxR';

    assert.isNotFalse(validate(address));
    assert.include(validate(address), { type: 'p2sh', network: 'testnet', bech32: false });
  });

  it('fails on invalid P2SH', () => {
    const address = 'FqLDjQPjguc5SHwMMRxMbX24fsc8WmQoBA';

    assert.isFalse(validate(address));
  });

  it('handles null address', () => {
    const address = null;

    assert.isFalse(validate(address));
  });

  it('handles bogus address', () => {
    const address = 'x';

    assert.isFalse(validate(address));
  });

  it('validates Mainnet Bech32 P2WPKH', () => {
    const addresses = [
      'grs1q509twc95s820qrufx2wm8gyqfgjreasdu354gf',
      'grs1q6th7xh96acyalv5r2ktejdfqkl4p5l9klq0ftx',
    ];

    assert.isNotFalse(validate(addresses[0]));
    assert.include(validate(addresses[0]), { bech32: true, type: 'p2wpkh', network: 'mainnet' });

    assert.isNotFalse(validate(addresses[1]));
    assert.include(validate(addresses[1]), { bech32: true, type: 'p2wpkh', network: 'mainnet' });
  });

  it('validates Testnet Bech32 P2WPKH', () => {
    const address = 'tgrs1q3uzttcfwdj6g0hx84m3lmxl6xlypxw44mgqtxw';

    assert.isNotFalse(validate(address));
    assert.include(validate(address), { bech32: true, type: 'p2wpkh', network: 'testnet' });
  });

  it('validates Regtest Bech32 P2WPKH', () => {
    const address = 'grsrt1qsy5cknjmfmuc6vrnlyspk7n48727fcevjhe2t7';

    assert.isNotFalse(validate(address));
    assert.include(validate(address), { bech32: true, type: 'p2wpkh', network: 'regtest' });
  });

  it('validates Mainnet Bech32 P2WSH', () => {
    const address = 'grs1qy9ce8yhtgwqxmy3ez6y88yznlndnsfwextdu4gfke5s2gzfn7y4s709qce';

    assert.isNotFalse(validate(address));
    assert.include(validate(address), { bech32: true, type: 'p2wsh', network: 'mainnet' });
  });

  it('validates Testnet Bech32 P2WSH', () => {
    const address = 'tgrs1qy9ce8yhtgwqxmy3ez6y88yznlndnsfwextdu4gfke5s2gzfn7y4s4qp78v';

    assert.isNotFalse(validate(address));
    assert.include(validate(address), { bech32: true, type: 'p2wsh', network: 'testnet' });
  });

  it('validates Regtest Bech32 P2WSH', () => {
    const address = 'grsrt1qmdqzzny25ujs7cdau9kr6et9u8s8wd00jd3qsl6zkhtumtzj845sx8q4m2';

    assert.isNotFalse(validate(address));
    assert.include(validate(address), { bech32: true, type: 'p2wsh', network: 'regtest' });
  });

  it('fails on invalid Bech32', () => {
    const address = 'grs1q509twc95s820qruxx2wm8gyqfgjreasdu354gf';

    assert.isFalse(validate(address));
  });
});

describe('Strict Validator', () => {
  it('validates Mainnet P2PKH', () => {
    const address = 'FqLDjQPjguc5SHwM2RxMbX24fsc8WmQoBA';

    assert.isTrue(validate(address, 'mainnet'));
  });

  it('validates Testnet P2PKH', () => {
    const address = 'muCVFTRDC6JVHuYx3qupeQ6hraoM8ENGUy';

    assert.isTrue(validate(address, 'testnet'));
  });

  it('fails on invalid P2PKH', () => {
    const address = 'FqLDjQPjguc5SHwMMRxMbX24fsc8WmQoBA';

    assert.isFalse(validate(address, 'mainnet'));
  });

  it('validates Mainnet P2SH', () => {
    const address = '3B36sX2yoULBTrQhrjzWHrhyvv65zX8Z2a';

    assert.isTrue(validate(address, 'mainnet'));
  });

  it('validates Testnet P2SH', () => {
    const address = '2MyzRukiQBPKpRDzMbKxRQSRVWVMEHozoxR';

    assert.isTrue(validate(address, 'testnet'));
  });

  it('fails on invalid P2SH', () => {
    const address = 'FqLDjQPjguc5SHwMMRxMbX24fsc8WmQoBA';

    assert.isFalse(validate(address, 'mainnet'));
  });

  it('handles null address', () => {
    const address = null;

    assert.isFalse(validate(address, 'mainnet'));
  });

  it('handles bogus address', () => {
    const address = 'x';

    assert.isFalse(validate(address, 'mainnet'));
  });

  it('validates Mainnet Bech32 P2WPKH', () => {
    const addresses = [
      'grs1q509twc95s820qrufx2wm8gyqfgjreasdu354gf',
      'grs1q6th7xh96acyalv5r2ktejdfqkl4p5l9klq0ftx',
    ];

    assert.isTrue(validate(addresses[0], 'mainnet'));

    assert.isTrue(validate(addresses[1], 'mainnet'));
  });

  it('validates Testnet Bech32 P2WPKH', () => {
    const address = 'tgrs1q3uzttcfwdj6g0hx84m3lmxl6xlypxw44mgqtxw';

    assert.isTrue(validate(address, 'testnet'));
  });

  it('validates Regtest Bech32 P2WPKH', () => {
    const address = 'grsrt1qsy5cknjmfmuc6vrnlyspk7n48727fcevjhe2t7';

    assert.isTrue(validate(address, 'regtest'));
  });

  it('validates Mainnet Bech32 P2WSH', () => {
    const address = 'grs1qy9ce8yhtgwqxmy3ez6y88yznlndnsfwextdu4gfke5s2gzfn7y4s709qce';

    assert.isTrue(validate(address, 'mainnet'));
  });

  it('validates Testnet Bech32 P2WSH', () => {
    const address = 'tgrs1qy9ce8yhtgwqxmy3ez6y88yznlndnsfwextdu4gfke5s2gzfn7y4s4qp78v';

    assert.isTrue(validate(address, 'testnet'));
  });

  it('validates Regtest Bech32 P2WSH', () => {
    const address = 'grsrt1qmdqzzny25ujs7cdau9kr6et9u8s8wd00jd3qsl6zkhtumtzj845sx8q4m2';

    assert.isTrue(validate(address, 'regtest'));
  });

  it('fails on invalid Bech32', () => {
    const address = 'grs1q509twc95s820qruxx2wm8gyqfgjreasdu354gf';

    assert.isFalse(validate(address, 'mainnet'));
  });
});
