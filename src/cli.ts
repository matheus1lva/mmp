import meow, { Result } from "meow";
import { getCommands, CommandList } from "./commands";
import { flags, getOptions } from "./flags";

export interface CliProps extends Result {
  argv?: Result["flags"];
  commands?: CommandList;
}

const commands: CommandList = getCommands();

const cli: CliProps = meow(
  `
	Usage:
	 $ mmp <input>

	Commands: 
	 $ help <commandName>       Displays help for a given command
	 $ init <projectName>       Starts the scaffolding for your new project

	Options:
	 ${getOptions()}
`,
  {
    flags: flags
  }
);

cli.argv = cli.flags;
cli.commands = commands;
const [command] = cli.input;
commands[command].run(cli);
