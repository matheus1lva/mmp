import Inquirer from "inquirer";
import path from "path";
import fs from "fs";
import { Command } from ".";
import { CliProps } from "../cli";

interface Results {
  [option: string]: any;
}

const transpilerOptions = [
  {
    name: "Babel"
  },
  {
    name: "TS"
  }
];

const boolean = [
  {
    name: "YEP!",
    value: true
  },
  {
    name: "NOP",
    value: false
  }
];

export default class Init implements Command {
  async promptTranspilers(answer: any) {
    const results: {
      [key: string]: any;
    } = {};

    switch (answer) {
      case "Babel": {
        const babelPresets = [
          {
            name: "flow",
            value: "@babel/preset-flow"
          },
          {
            name: "I just i want it to work everywhere!",
            value: "@babel/preset-env"
          }
        ];
        const babelPlugins = [
          {
            name: "class-properties",
            value: "@babel/plugin-proposal-class-properties"
          },
          {
            name: "optional-chaining",
            value: "@babel/plugin-proposal-optional-chaining"
          },
          {
            name: "async await!!!",
            value: "@babel/plugin-transform-async-to-generator"
          }
        ];
        const babelAdditions = await Inquirer.prompt([
          {
            type: "checkbox",
            message: "Which presets do you want on your babel config?",
            name: "babelPresets",
            choices: babelPresets
          },
          {
            type: "checkbox",
            message: "Which plugins do you want need??",
            name: "babelPlugins",
            choices: babelPlugins
          }
        ]);

        results["babel"] = babelAdditions;
        break;
      }
      case "TS": {
        const targetOptions = [
          { name: "ES5", value: "es5" },
          { name: "ES2015", value: "es2015" },
          { name: "ES2016", value: "es2016" },
          { name: "ES2017", value: "es2017" },
          { name: "ES2018", value: "es2018" },
          { name: "ESNEXT", value: "esnext" }
        ];

        const modules = [
          { name: "none", value: "none" },
          { name: "commonjs", value: "commonjs" },
          { name: "amd", value: "amd" },
          { name: "system", value: "system" },
          { name: "umd", value: "umd" },
          { name: "es2015", value: "es2015" },
          { name: "ESNext", value: "ESNext" }
        ];

        const typescriptConfiguration = await Inquirer.prompt([
          {
            type: "list",
            message: "What is your target?",
            name: "target",
            choices: targetOptions
          },
          {
            type: "list",
            message: "What type of module?",
            name: "moduleType",
            choices: modules
          },
          {
            type: "list",
            message: "React?",
            name: "jsx",
            choices: boolean
          }
        ]);
        results["ts"] = typescriptConfiguration;
        break;
      }
    }
    return results;
  }

  async useLinter() {
    const useLinters = await Inquirer.prompt([
      {
        type: "list",
        message: "Do you wan't a linter?",
        name: "useLinter",
        choices: boolean
      }
    ]);

    // @ts-ignore
    return useLinters.useLinter;
  }

  async run(cli: CliProps) {
    const folderName: string = cli.input[1]; //eslint-disable-line
    const results: Results = {};

    const transpilers: {
      transpilers?: any;
    } = await Inquirer.prompt([
      {
        type: "list",
        message: "Select one type of transpiler/compiler",
        name: "transpilers",
        choices: transpilerOptions
      }
    ]);

    const transpilersResults = await this.promptTranspilers(
      transpilers.transpilers
    );

    const useLinter = await this.useLinter();

    console.log({
      useLinter,
      transpilersResults
    });
  }

  processOptions = (results: any, targetFolder: string = "./") => {
    const target = path.resolve(path.relative(process.cwd(), targetFolder));
    // create initial folder if needed
    if (targetFolder !== "./" && !fs.existsSync(target)) {
      fs.mkdirSync(target);
    }
  };

  help() {
    return "Hi from init";
  }
}
