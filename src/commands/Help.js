// @flow
import type { Command } from "./Command";
import type { Cli, AllCommands } from "../types";
import { getCommands } from "./index";

export default class Help implements Command {
	run(cli: Cli) {
		const availableCommands: AllCommands = getCommands();
		// if we got here, it was asked a help of a certain command
		const [_, target] = cli.input; //eslint-disable-line

		if (!availableCommands[target]) {
			throw new Error(`Help for command ${target} not found`);
		}

		availableCommands[target].help();
	}

	help() {
		return;
	}
}
