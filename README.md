# BIC (Business Identifier Code)
[![npm](https://img.shields.io/npm/v/swift-bic.svg?style=flat-square)](https://npmjs.com/package/swift-bic)
[![npm license](https://img.shields.io/npm/l/swift-bic.svg?style=flat-square)](https://npmjs.com/package/swift-bic)
[![npm downloads](https://img.shields.io/npm/dm/swift-bic.svg?style=flat-square)](https://npmjs.com/package/swift-bic)
[![build status](https://img.shields.io/travis/jhermsmeier/node-swift-bic/master.svg?style=flat-square)](https://travis-ci.org/jhermsmeier/node-swift-bic)

## Install via [npm](https://npmjs.com)

```sh
$ npm install --save swift-bic
```

## Usage

```js
var BIC = require( 'swift-bic' )
```

```js
> BIC.isValid( 'HELADEF1JEN' )
< true
```

```js
> BIC.parse( 'HELADEF1JEN' )
< BIC {
  institution: 'HELA',
  country: 'DE',
  location: 'F1',
  branch: 'JEN'
}
```

```js
> var sparkasse = BIC.parse( 'HELADEF1JEN' )
> sparkasse.isValid()
< true
```

```js
> sparkasse.toString()
< 'HELADEF1JEN'
```

## Related Modules

- [fints-institute-db](https://github.com/jhermsmeier/fints-institute-db)
