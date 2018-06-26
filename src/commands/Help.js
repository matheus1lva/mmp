// @flow
import type { Cli, Command } from './Command';

export default class Help implements Command{
	run(cli: Cli) {
		// if we got here, it was asked a help of a certain command
		const [_, target] = cli.input;
		console.log('here');
	}

	help() {
		return;
	}
}