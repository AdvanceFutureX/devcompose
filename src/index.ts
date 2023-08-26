import figlet from 'figlet';
import { Command } from 'commander';
import fs from 'fs';
import path from 'path';

// add the command
const program = new Command();

console.log(figlet.textSync("Dev Compose"));

program
    .version("1.0.0")
    .description("An CLI utility to setup a local environment for testing and development")
    .option("-l, --ls [val]", "List all the directory")
    .option("init", "Initialize a configuration file for the environment setup")
    .parse(process.argv);

const options = program.opts();

async function listDirContents(filePath: string) {
    try {
        const files = await fs.promises.readdir(filePath);
        const detailFilePromises = files.map(async (file: string) => {
            let fileDetails = await fs.promises.lstat(path.resolve(filePath, file));
            const { size, birthtime } = fileDetails;
            return {filename: file, "size(kb)": size, createdAt: birthtime};
        });
        const detailedFiles = await Promise.all(detailFilePromises);
        console.table(detailedFiles);
    } catch(error) {
        console.error("Error occurred : ",error)
    }
}

if ( options.ls ) {
    const filepath = typeof options.ls === "string"? options.ls : __dirname;
    listDirContents(filepath);
}

if (!process.argv.slice(2).length) {
    program.outputHelp();
}