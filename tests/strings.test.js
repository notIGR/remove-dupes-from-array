const noDupes = require("../script")

const tests = [
	{
		initial: ["baz", "foo", "bar", "baz", "bar"],
		expectedLen: 3
	},
	{
		initial: ["foo", "bar", "baz"],
		expectedLen: 3
	}, {
		initial: ["5", "5", "6", "7", "7", "8"],
		expectedLen: 4
	}
]

test('Can remove number duplicates', () => {
	for (const test of tests) {
		expect(noDupes(test.initial).length).toBe(test.expectedLen);
	}
});
