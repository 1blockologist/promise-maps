/****************************
 * HLS - High Level Storage
 * @param lowLevelStorage
 * @returns {Storage}
 *
 * Makes Asynchronous Promise based operations around a map, because you hate callbacks.
 *
 * Example usage:
 *
 * const HLS = require('./highlevelstorage');
 * let wrap = (map) => {
 *   return HLS.wrap(map);
 * }
 *
 * const highLevelStorage = wrap(lowLevelStorage);
 * highLevelStorage.put('a', 1) // returns a Promise
 * highLevelStorage.get('a')     // returns a Promise
 * highLevelStorage.del('a')     // returns a Promise
 * highLevelStorage.batchPut([   // returns a Promise
 * { key: 'a', value: 1 },
 * { key: 'b', value: 2 },
 * ]);
 ***************************/



let wrap = (lowLevelStorage) => {

    class Storage {

        internalStore = new Map();


        /**
         * Constructor expects a Map() and converts all entries into a standardized form for internal storage.
         * @param map
         */
        constructor(map){
            let res = [];
            map.forEach(function(val, key) {
                res.push({ key: key, value: val });
            });
            this.batchPut(res)
                .catch(error => console.log(error));
        }

        /**
         * Get allows a user to retrieve an entry asynchronously
         * @param keyRequested
         * @returns {Promise<[any, any][] | void>}
         */
        get = async keyRequested => {

            return Promise.all(this.internalStore.entries())
                .then(data => {
                    for (const [key, value] of Object.entries(data)) {
                        if(value[0] == keyRequested) return value[1];
                    }
                })
                .catch(error => console.log(error));
        };
        /**
         * Put allows a user to add an entry asynchronously
         * @param key
         * @param value
         * @returns {Promise<[any, any][] | void>}
         */
        put = async (key, value) => {
            return Promise.all(this.internalStore.set(key, value)).catch(error => console.log(error));
        };

        /**
         * Del allows a user to delete an entry asynchronously
         * @param key
         * @returns {Promise<boolean | void>}
         */
        del = async key => {
            return Promise.resolve(this.internalStore.delete(key))
                .catch(error => console.log(error));
        };

        /**
         * BatchPut allows a user to add multiple entries to the data store
         * @param map
         * @returns {Promise<Uint8Array | BigInt64Array | any[] | Float64Array | Int8Array | Float32Array | Int32Array | Uint32Array | Uint8ClampedArray | BigUint64Array | Int16Array | Uint16Array | void>}
         */
        batchPut = async map => {
            return Promise.resolve(map.map(elem => this.internalStore.set(elem.key, elem.value)))
                .catch(error => console.log(error));
        };

    }


    return new Storage(lowLevelStorage);
};

module.exports = { wrap };


