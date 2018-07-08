// @flow
import type { Command } from "./commands/Command";

export type CLI = {
	input: Array<any>;
	flags: any;
	argv: any;
	commands: any;
}

export type CommandList = {
	[commandName: string]: Command
}
