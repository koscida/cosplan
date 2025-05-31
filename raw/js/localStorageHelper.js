/*
 * localStorageHelper
 * 		local storage
 */
const _lsh = {
	prefix: "cosplan",

	_load(key) {
		// console.log("-_lsh._load(key): ", key);
		const stored = localStorage.getItem(`${this.prefix}-${key}`);
		return stored ? JSON.parse(stored) : null;
	},
	_store(key, value) {
		// console.log("-_lsh._store(key, value): ", key, " || ", value);
		localStorage.setItem(`${this.prefix}-${key}`, JSON.stringify(value));
	},
	_modify(key, fn) {
		// console.log("-_lsh._modify(key, fn): ", key, " || ");
		this._store(key, fn(this._load(key)));
	},
};
const lsh = {
	get: (key) => {
		// console.log("-_lsh.get(key): ", key);
		return key ? _lsh._load(key) : null;
	},
	getByID: (key, id) => {
		if (key) {
			const stored = _lsh._load(key);
			if (stored) return stored[id];
		}
		return null;
	},
	addToArray: (item, key) => {
		// console.log("-_lsh.appendItemToArray(item, key): ", item, " || ", key);
		_lsh._modify(key, (storage = []) => [...storage, item]);
	},
	deleteFromArray: (item, key) => {
		// console.log("-_lsh.removeItemFromArray(item, key): ", item, " || ", key);
		_lsh._modify(key, (storage = []) => storage.filter((s) => s !== item));
	},

	addToObject: (item, key) => {
		// console.log("-_lsh.addItemToObject(item, key): ", item, " || ", key);
		let newID = 0;
		_lsh._modify(key, function (storage = {}) {
			// console.log("-_lsh._modify(fn): ", storage, " || ", key);
			if (storage) newID = parseInt(Math.max(Object.keys(storage))) + 1;
			return { ...storage, [newID]: item };
		});
		return newID;
	},
};

export default lsh;
