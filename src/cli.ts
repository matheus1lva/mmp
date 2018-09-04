import meow from "meow";
import { getCommands } from "./commands";
import { flags, getOptions } from "./flags";

const commands: CommandList = getCommands();

const cli = meow(`
	Usage:
	 $ mmp <input>

	Commands: 
	 $ help <commandName>       Displays help for a given command
	 $ init <projectName>       Starts the scaffolding for your new project

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
