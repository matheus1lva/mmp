// @flow
import type { Cli } from "../types";
export interface Command {
	// todo: TO BE UPDATED
	run(cli: Cli): void;
	help(): string | void;
}
