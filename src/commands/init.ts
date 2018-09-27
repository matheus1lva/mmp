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

export default class Init implements Command {
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

    switch (transpilers.transpilers) {
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

        results["transpilers"] = {};
        results["transpilers"]["babel"] = babelAdditions;
        break;
      }
      case "TS": {
        break;
      }
    }

    const eslintChoices = [
      {
        name: "None",
        value: "none"
      },
      {
        name: "Node",
        value: "plugin:node/recommended"
      },
      {
        name: "React",
        value: "plugin:react/recommended"
      }
    ];

    const linterOptions: {
      eslint?: any;
    } = await Inquirer.prompt([
      {
        type: "checkbox",
        message: "What options do you want in your eslint config",
        name: "eslint",
        choices: eslintChoices
      }
    ]);
    results["linter"] = linterOptions.eslint;

    this.processOptions(results, folderName);
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
