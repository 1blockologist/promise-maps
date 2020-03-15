const HLS = require('./highlevelstorage');
let wrap = (map) => {
    return HLS.wrap(map);
}

let lowLevelStorage = new Map();
lowLevelStorage.set("a", "d");
lowLevelStorage.set("z", "p");

const highLevelStorage = wrap(lowLevelStorage);
highLevelStorage.put('a', 1) // returns a Promise
highLevelStorage.get('a')     // returns a Promise
highLevelStorage.del('a')     // returns a Promise
highLevelStorage.batchPut([   // returns a Promise
    { key: 'a', value: 1 },
    { key: 'b', value: 2 },
]);

console.log(highLevelStorage.internalStore);