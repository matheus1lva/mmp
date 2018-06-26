// @flow

export type Cli = {
	input: Array<any>;
	flags: any;
	argv: any;
	commands: any;
}

export interface Command {
	// todo: TO BE UPDATED
	run(cli: Cli): void;
	help(): string | void;
};