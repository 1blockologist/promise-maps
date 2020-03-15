# Promise Maps
#### Make Asynchronous Promise based operations around a map, because you hate callbacks.

### Install:
First install everything with 'npm install' as the project uses `Jest` for mocks 
and Babel to access classes.

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

Run tests with `npm test`
