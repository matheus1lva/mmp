// @flow
import type { Command } from "./Command";
import type { CLI } from "../types";
import Inquirer from "inquirer";
import path from 'path';
import fs from 'fs';

const transpilerOptions = [
	{
		name: "Babel"
	},
	{
		name: "TS"
	}
];

export default class Init implements Command {
	async run(cli: CLI) {
		const folderName = cli.input[1];

		const transpilers = await Inquirer.prompt([
			{
				type: "list",
				message: "Select one type of transpiler/compiler",
				name: "transpilers",
				choices: transpilerOptions,
			}
		]);

		switch (transpilers.transpilers) {
			case "Babel": {
				const babelPresets = [
					{
						name: "flow",
						value: "@babel/preset-flow"
					},
					{
						name: "I just i want it to work everywhere!",
						value: "@babel/preset-env"
					}
				];
				const babelPlugins = [
					{
						name: "class-properties",
						value: "@babel/plugin-proposal-class-properties"
					},
					{
						name: "optional-chaining",
						value: "@babel/plugin-proposal-optional-chaining",
					},
					{
						name: "async await!!!",
						value: "@babel/plugin-transform-async-to-generator",
					}
				];
				const babelAdditions = await Inquirer.prompt([
					{
						type: "checkbox",
						message: "Which presets do you want on your babel config?",
						name: "babelPresets",
						choices: babelPresets
					},
					{
						type: "checkbox",
						message: "Which plugins do you want need??",
						name: "babelPlugins",
						choices: babelPlugins
					}
				]);

				results["transpilers"]["babel"] = babelAdditions;
				break;
			}
			case "TS": {
				break;
			}
		}

		const eslintChoices = [
			{
				name: "None",
				value: "none"
			},
			{
				name: "Node",
				value: "plugin:node/recommended"
			},
			{
				name: "React",
				value: "plugin:react/recommended"
			}
		];

		const linterOptions = await Inquirer.prompt([
			{
				type: "checkbox",
				message: "What options do you want in your eslint config",
				name: "eslint",
				choices: eslintChoices
			}
		]);
		results["linter"] = linterOptions.eslint;

	}

	generateOptions = ({results, targetFolder}) => {
		if (targetFolder) {
			if (!fs.existsSync(path.resolve(targetFolder))) {
				// add mode
				fs.mkdirSync(path.resolve(path.join(process.cwd(), targetFolder)))
			}
		}
	}

	help() {
		return "Hi from init";
	}
}
