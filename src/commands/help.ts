import { getCommands, Command, CommandList } from "./index";
import { Log } from "../utils/log";
import { CliProps } from "../cli";

export default class Help implements Command {
	run(cli: CliProps): any {
		const availableCommands: CommandList = getCommands();

		// if we got here, it was asked a help of a certain command
		const [_, target] = cli.input; //eslint-disable-line

		if (!availableCommands[target]) {
			return Log.error(`Help for command ${target} not found`);
		}
		return Log.success(availableCommands[target].help());
	}

	help() {
		return "";
	}
}
