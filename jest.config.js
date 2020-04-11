module.exports = {
	"roots": [
		"<rootDir>/tests"
	],
	"transform": {
		"^.+\\.tsx?$": "ts-jest"
	},
	"setupFilesAfterEnv": [
		'./setupTests.ts'
	],
	"testRegex": "(/tests/.*|(\\.|/)(test|spec))\\.tsx?$",
	"moduleFileExtensions": [
		"ts",
		"tsx",
		"js",
		"jsx",
		"json",
		"node"
	]
};
