// @flow
import type { CLI } from "../types";
export interface Command {
	run(cli: CLI): void | any;
	help(): string | void;
}
