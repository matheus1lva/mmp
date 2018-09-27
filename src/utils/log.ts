import chalk from "chalk";

const log = console.log;

export class Log {
	static error(message: string) {
		return log(chalk`{red ${message}}`);
	}

	static success(message: string) {
		return log(chalk`{green ${message}}`);
	}

	static warning(message: string) {
		return log(chalk`{yellow ${message}}`);
	}
}
