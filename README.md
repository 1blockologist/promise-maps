# Promise Maps
[![CircleCI](https://circleci.com/gh/1blockologist/promise-maps.svg?style=svg)](https://circleci.com/gh/1blockologist/promise-maps)
#### Make Asynchronous Promise based operations around a map, because you hate callbacks.

### Install:
First install everything with `npm install` as the project uses `Jest` for mocks 
and Babel to access classes.

Without Babel installed properly, the following error could occur during tests
`Support for the experimental syntax 'classProperties' isn't currently enabled`

### Example:
Run `npm start` to execute access.js for an example implementation 

### Usage:

If you wish to run your own project here are code snippets to help you get started

```
const HLS = require('./highlevelstorage');
let wrap = (map) => {
   return HLS.wrap(map);
}
 
const highLevelStorage = wrap(lowLevelStorage);
highLevelStorage.put('a', 1) // returns a Promise
highLevelStorage.get('a')     // returns a Promise
highLevelStorage.del('a')     // returns a Promise
highLevelStorage.batchPut([   // returns a Promise
  { key: 'a', value: 1 },
  { key: 'b', value: 2 },
]);
```

### Tests

Run tests with `npm test`, upon successful execution the follow output should be logged

```
 PASS  test/highlevelstorage.test.js
 PASS  test/lowlevelstorage.test.js

Test Suites: 2 passed, 2 total
Tests:       7 passed, 7 total
Snapshots:   0 total
Time:        1.068s
Ran all test suites.
```
