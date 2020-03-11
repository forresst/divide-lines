# divide-lines

Divide the lines of a string in a lines object array

[![Coverage Status](https://coveralls.io/repos/github/forresst/divide-lines/badge.svg)](https://coveralls.io/github/forresst/divide-lines)
[![version](https://img.shields.io/npm/v/divide-lines.svg?style=flat-square)](https://www.npmjs.com/package/divide-lines)
[![node-version](https://img.shields.io/badge/node-%3E%3D%208.0-orange.svg?style=flat-square)](https://nodejs.org)
[![downloads](https://img.shields.io/npm/dm/divide-lines.svg?style=flat-square)](http://npm-stat.com/charts.html?package=divide-lines)

[![MIT License](https://img.shields.io/npm/l/divide-lines.svg?style=flat-square)](https://github.com/forresst/divide-lines/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Code of Conduct](https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square)](https://github.com/forresst/divide-lines/blob/master/CODE_OF_CONDUCT.md)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

[![Watch on GitHub](https://img.shields.io/github/watchers/forresst/divide-lines.svg?style=social)](https://github.com/forresst/divide-lines/watchers)
[![Star on GitHub](https://img.shields.io/github/stars/forresst/divide-lines.svg?style=social)](https://github.com/forresst/divide-lines/stargazers)


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  * [Node.js](#nodejs)
- [API](#api)
  * [divideLines(input)](#dividelinesinput)
    + [input](#input)
    + [return](#return)
    + [Example](#example)
- [LICENSE](#license)

## Installation

This module is distributed via [npm](https://www.npmjs.com/) which is bundled with [node](https://nodejs.org) and should be installed as one of your project's `devDependencies`:

```console
npm install --save-dev divide-lines
```

## Usage

### Node.js

```js
const divideLines = require('divide-lines');

console.log(divideLines('\n\rHello \r\n\n The\n\nNice World  '));
/*	=>
	{
		originalString: '\n\rHello \r\n\n The\n\nNice World  ',
		lines: [
			{
				lineBreak: '\n',
				originalLine: '\n'
			},
			{
				whitespaceStart: '\r',
				whitespaceEnd: ' ',
				content: 'Hello',
				lineBreak: '\r\n',
				originalLine: '\rHello \r\n'
			},
			{
				lineBreak: '\n',
				originalLine: '\n'
			},
			{
				whitespaceStart: ' ',
				content: 'The',
				lineBreak: '\n',
				originalLine: ' The\n'
			},
			{
				lineBreak: '\n',
				originalLine: '\n'
			},
			{
				whitespaceEnd: '  ',
				content: 'Nice World',
				originalLine: 'Nice World  '
			}
		]
	}
*/
```

## API

### divideLines(input)

Divide the lines of a string in a lines object array Returns a `array`.

#### input

Type: `string`

The string to divide.

#### return

Type: `array`

The lines object array.

#### Example

`index.js`:

> ```js
>
> const divideLines = require('divide-lines');
>
> console.log(divideLines(''));
> //=> { originalString: '', lines: [ { originalLine: '' } ] }
>
> console.log(divideLines('a'));
> /*	=>
>	{
>		originalString: 'a',
>		lines: [
>			{
>				content: 'a',
>				originalLine: 'a'
>			}
>		]
>	}
> */
>
> console.log(divideLines('\n\rHello \r\n\n The\n\nNice World  '));
> /*	=>
>	{
>		originalString: '\n\rHello \r\n\n The\n\nNice World  ',
>		lines: [
>			{
>				lineBreak: '\n',
>				originalLine: '\n'
>			},
>			{
>				whitespaceStart: '\r',
>				whitespaceEnd: ' ',
>				content: 'Hello',
>				lineBreak: '\r\n',
>				originalLine: '\rHello \r\n'
>			},
>			{
>				lineBreak: '\n',
>				originalLine: '\n'
>			},
>			{
>				whitespaceStart: ' ',
>				content: 'The',
>				lineBreak: '\n',
>				originalLine: ' The\n'
>			},
>			{
>				lineBreak: '\n',
>				originalLine: '\n'
>			},
>			{
>				whitespaceEnd: '  ',
>				content: 'Nice World',
>				originalLine: 'Nice World  '
>			}
>		]
>	}
> */
> ```

## LICENSE

MIT
