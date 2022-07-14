import input from "input"; 
import chalk from "chalk"; 

async function pegaInput() {

    const arr = [];
    let perguntaCss;

    do {
        perguntaCss ? arr.push(perguntaCss) : '';

        perguntaCss = (await input.text("Digite uma propriedade CSS:")).toLowerCase();

    } while (perguntaCss != "sair");

    console.log(chalk.green.bold(`Propriedades CSS: ${arr.sort()}`));
}

pegaInput();