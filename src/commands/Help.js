// @flow
import type { Command } from "./Command";
import type { CLI, CommandList } from "../types";
import { getCommands } from "./index";

export default class Help implements Command {
	run(cli: CLI): any {
		const availableCommands: CommandList = getCommands();
		// if we got here, it was asked a help of a certain command
		const [_, target] = cli.input; //eslint-disable-line

		if (!availableCommands[target]) {
			throw new Error(`Help for command ${target} not found`);
		}
		console.log(availableCommands[target].help());
	}

	help() {
		return;
	}
}
