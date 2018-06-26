module.exports = {
	presets: [
		["@babel/preset-env",
			{
				targets: {
					node: 6
				},
				useBuiltIns: "usage"
			}
		],
		"@babel/preset-flow"
	],
	plugins: [
		"@babel/plugin-proposal-class-properties"
	]
};
