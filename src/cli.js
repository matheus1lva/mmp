// @flow
import meow from "meow";
import { getCommands, getCommandsList } from "./commands";
import { flags, getOptions } from "./flags";
import type { CommandList } from "./types";

const commands: CommandList = getCommands();

const cli = meow(`
	Usage:
	 $ mmp <input>

	Commands: 
	 ${getCommandsList()}

	Options:
	 ${getOptions()}
`, {
	flags,
	input: [Object.keys(commands).sort()]
}
);

cli.argv = cli.flags;
cli.commands = commands;
const [command]: string = cli.input;
commands[command].run(cli);
