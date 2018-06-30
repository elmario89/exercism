var DnaTranscriber = function () {};
const DNA = ['A', 'C', 'G', 'T'];
const RNA = ['A', 'C', 'G', 'U'];

DnaTranscriber.prototype.toRna = function (DNAchain) {
	const DNA_TO_RNA = { 'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U'};

	if (/[^GCTA]/.test(DNAchain)) {
		throw new Error('Invalid input')
	}

	return DNAchain
		.split('')
		.map(c => DNA_TO_RNA[c])
		.join('');
};

module.exports = DnaTranscriber;