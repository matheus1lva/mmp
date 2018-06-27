// @flow
import type { Command } from "./commands/Command";
export type Cli = {
	input: Array<any>;
	flags: any;
	argv: any;
	commands: any;
}

export type AllCommands = {
	[commandName: string]: Command
}
