test('lowLevelStorage: create a map with a key "hello" and value "world", return value', () => {
    let lowLevelStorage = new Map();
    lowLevelStorage.set("hello", "world");
    lowLevelStorage.set("z", "p");

    expect(lowLevelStorage.get("hello")).toBe("world");
});

test('lowLevelStorage: remove a key, return undefined value of prior key', () => {
    let lowLevelStorage = new Map();
    lowLevelStorage.set("z", "p");
    lowLevelStorage.delete("z");

    expect(lowLevelStorage.get("z")).toBe(undefined);
});