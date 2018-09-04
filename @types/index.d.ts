interface CLI {
	input: Array<any>;
	flags: any;
	argv?: any;
	commands: any;
}

interface Command {
	run(cli: CLI): void | any;
	help(): string;
}

interface CommandList {
	[commandName: string]: Command
}

interface Flag {
	type: string;
	desc?: string;
	alias?: string;
}

interface Flags {
	[flagIdentifier: string] : Flag
}
