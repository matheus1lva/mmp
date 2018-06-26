// @flow
import type { Command } from './Command';
import Inquirer from 'inquirer';

const initOptions = [
	{
		name: 'T1'
	},
	{
		name: 'T2'
	},
	{
		name: 'T3'
	}
]

export default class Init implements Command {
	async run(cli: any) {
		const answers = await Inquirer.prompt([
			{
				type: 'checkbox',
				message: "Select things",
				name: "thingsToAdd",
				choices: initOptions,
			}
		]);

		console.log(answers);
	}

	help() {
		return "Hi from init"
	}
}