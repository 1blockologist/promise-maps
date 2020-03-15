const HLS = require('../highlevelstorage');
let wrap = (map) => {
   return HLS.wrap(map);
}

test('highLevelStorage: sets up map, applies to highlevelstorage, checks for key existing and its value matching',  async () => {
   let lowLevelStorage = new Map();
   lowLevelStorage.set("a", "d");
   lowLevelStorage.set("z", "p");
   let highLevelStorage = wrap(lowLevelStorage);

   expect.assertions(1);
   await expect(highLevelStorage.get("a")).resolves.toEqual("d");
});

test('highLevelStorage: checks for non-existing key and fail with error',  async () => {
   let lowLevelStorage = new Map();
   lowLevelStorage.set("a", "d");
   lowLevelStorage.set("z", "p");
   let highLevelStorage = wrap(lowLevelStorage);

   expect.assertions(1);
   await expect(highLevelStorage.get("hello")).resolves.toEqual(undefined)
});

test('highLevelStorage: adds a key to the map',  async () => {
   let lowLevelStorage = new Map();
   lowLevelStorage.set("a", "d");
   lowLevelStorage.set("z", "p");

   let highLevelStorage = wrap(lowLevelStorage);
   await highLevelStorage.put("hello", "world");
   await expect(highLevelStorage.get("hello")).resolves.toEqual("world");

});

test('highLevelStorage: removes a key from the map',  async () => {
   let lowLevelStorage = new Map();
   lowLevelStorage.set("a", "d");
   lowLevelStorage.set("z", "p");

   let highLevelStorage = wrap(lowLevelStorage);
   await highLevelStorage.del("a");
   await expect(highLevelStorage.get("a")).resolves.toEqual(undefined);

});

test('highLevelStorage: add multiple keys to the map',  async () => {
   let lowLevelStorage = new Map();
   lowLevelStorage.set("a", "d");
   lowLevelStorage.set("z", "p");

   let highLevelStorage = wrap(lowLevelStorage);
   await highLevelStorage.batchPut([   // returns a Promise
      { key: 'c', value: 1 },
      { key: 'hello', value: "world" },
   ]);
   await expect(highLevelStorage.get("c")).resolves.toEqual(1);

});

