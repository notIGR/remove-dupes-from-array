const noDupes = require("../script")

const tests = [
	{
		initial: [5, 6, 6, 7, 8],
		expectedLen: 4
	},
	{
		initial: [87, 9, 32343, 43432, 43432, 87, 876],
		expectedLen: 5
	}, {
		initial: [5, 10, 15, 15, 20, 5],
		expectedLen: 4
	}
]

test('Can remove number duplicates', () => {
	for (const test of tests) {
		expect(noDupes(test.initial).length).toBe(test.expectedLen);
	}
});
