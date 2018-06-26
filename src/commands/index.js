// @flow
import fs from "fs";
import path from "path";

export const getCommands = (): any => {
	const nonCommands = ["index", "Command"];
	const files = fs.readdirSync(path.resolve(__dirname), "utf8");
	const commands = {};
	for (let file of files) {
		const filenameWithoutExt = file.split(".")[0];
		const commandName = filenameWithoutExt.toLocaleLowerCase();
		if (!nonCommands.includes(filenameWithoutExt)) {
			const commandPath: string = path.resolve(__dirname, file);
			const CommandClass = require(commandPath).default;
			commands[commandName] = new CommandClass();
		}
	}
	return commands;
};

export const getCommandsList = (): string => {
	const commands = getCommands();
	return Object.keys(commands)
		.sort()
		.map((commandName) => {
			return `$ ${commandName}`;
		})
		.join("\n  ");
};
