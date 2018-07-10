'use strict';

module.exports = {
	allowCustomScopes: true,
	scopes: [],
	types: [
		{ value: "break", name: "break: changes that break the behaviour of the cli" },
		{ value: "chore", name: "chore:	Updating deps, docs, linting, etc" },
		{ value: "docs", name: "docs:		Documentation" },
		{ value: "feat", name: "feat:		A new feature" },
		{ value: "fix", name: "fix:		Bugs, typos, etc" },
		{ value: "misc", name: "misc:		Other formats like tweaks and such" },
		{ value: "tests", name: "tests:	Tests of any type" }
	]
};