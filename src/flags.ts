export interface Flags {
  [name: string]: any;
}

export const flags: Flags = {
  test: {
    type: "boolean",
    desc: "test123 bla nla"
  }
};

export const getOptions = (): string => {
  const optionsWithDescription: Array<any> = [];
  Object.keys(flags).forEach(flag => {
    const description = flags[flag].desc || "default description";
    if (flags[flag].alias) {
      optionsWithDescription.push(
        `--${flag}, --${flags[flag].alias}  -  ${description}`
      );
    } else {
      optionsWithDescription.push(`--${flag} - ${description}`);
    }
  });

  return optionsWithDescription.join("\n");
};
