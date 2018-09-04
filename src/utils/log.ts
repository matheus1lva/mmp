import chalk from "chalk";

const log = console.log;

export class Log {
	static error(message) {
		return log(chalk`{red ${message}}`);
	}

	static success(message) {
		return log(chalk`{green ${message}}`);
	}

	static warning(message) {
		return log(chalk`{yellow ${message}}`);
	}
}
