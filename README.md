A collection of useful tools developed to help other programmers.

# Installation

install via npm
```bash
npm i yousef
```

install via bun
```bash
bun add yousef
```

# How To Use?
```js
import * as Util from 'yousef'
```

# API

- flatten
```js
const array = ['item1', ['item2', 'item3', ['item4']]]

Util.flatten(array); //= ['item1', 'item2', 'item3', 'item4']
Util.flatten(array, { depth: 1 }); //= ['item1', 'item2', 'item3', ['item4']]
```

- moment: Parse, validate, manipulate, and display dates and times in JavaScript.

([see this for more info](https://momentjs.com/))

- md5: MD5 password hash for pure javascript

([see this for more info](https://npmjs.com/package/@yousefhusain/md5))

- prettyBytes: Convert bytes to a human readable string: 1337 → 1.34 kB

([see this for more info](https://www.npmjs.com/package/pretty-bytes))

- ms: Convert various time formats to milliseconds.

([see this for more info](https://www.npmjs.com/package/ms))

# Feedback

- pretty-bytes
- moment
- ms