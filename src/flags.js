import { getCommands } from './commands'

export const flags = {
	test: {
		type: 'boolean',
		desc: 'test123 bla nla'
	}
}

export const getOptions = () : string => {
	const optionsWithDescription = [];
	Object.keys(flags).forEach((flag) => {
		const description = flags[flag].desc;
		if (flags[flag].alias) {
			optionsWithDescription.push(`--${flag}, --${flags[flag].alias}  -  ${description}`);
		} else {
			optionsWithDescription.push(`--${flag} - ${description}`);
		}
	});

	return optionsWithDescription.join('\n');
}