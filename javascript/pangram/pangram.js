var Pangram = function (text) {
	this.text = text;
};

const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

Pangram.prototype.isPangram = function () {
	if (this.text === '') return false;

	this.text = this.text.toLowerCase().replace(/[^a-zA-Z]+/mg, "");
	const set = [...new Set(this.text)].sort().join('');

	return ALPHABET == set;
};

module.exports = Pangram;