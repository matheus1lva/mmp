// @flow
import meow from "meow";
import { getCommands, getCommandsList } from "./commands";
import { flags, getOptions } from "./flags";

const commands = getCommands();

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
const [command] = cli.input;
commands[command].run(cli);
