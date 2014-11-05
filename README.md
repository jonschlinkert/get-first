# get-first [![NPM version](https://badge.fury.io/js/get-first.svg)](http://badge.fury.io/js/get-first)

> Pass an array of object paths (e.g. `a.b.c`) and get the first non-undefined value if the property exists, or null if it does not.

## Install
#### Install with [npm](npmjs.org):

```bash
npm i get-first --save-dev
```

## Run tests

```bash
npm test
```

## Related

 - [get-value](https://github.com/jonschlinkert/get-value)
 - [set-value](https://github.com/jonschlinkert/set-value)

## Usage

```js
var getFirst = require('get-first');

getFirst({a: 'b'}, 'a');
//=> 'b'

getFirst({a: 'b'}, ['a']);
//=> 'b'

getFirst({a: {b: 'c'}}, 'a.b');
//=> 'c'

getFirst({a: {b: 'c'}}, ['a.b']);
//=> 'c'

getFirst({a: {b: 'c'}, x: {b: 'd'}}, ['a.b', 'x.b']);
//=> 'c'

getFirst({a: {b: 'c'}, x: {b: 'd'}}, ['x.b', 'a.b']);
//=> 'd'

getFirst({a: {b: {c: 'd'}}}, ['a.b', 'x.y.z']);
//=> {c: 'd'}

getFirst({a: {b: {c: 'd'}, e: 'f'}}, ['a.c', 'a.e']);
//=> 'f'
```

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue][issues].

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License
Copyright (c) 2014 Jon Schlinkert, contributors.
Released under the MIT license

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on November 04, 2014._

[issues]: https://github.com/jonschlinkert/get-first/issues
