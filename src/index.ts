import figlet from 'figlet';
import { Command } from 'commander';
import fs from 'fs';
import path from 'path';

// add the command
const program = new Command();

console.log(figlet.textSync("Dev Compose"));

// default configuration
const defaultConfigFileName : string = "devcompose.json"

// metadata of the program
program
    .name("devcompose")
    .description("An CLI utility to setup a local environment for testing and development")
    .version("1.0.0")

// commands
program.command('config')
    .description("It is to create the config for the devcompose")
    // .argument("<string>", 'action')
    .option('--list, -l', 'List all the configs')
    .action(
        (str, options) => {
            switch (str) {
                case "init":
                    if(fs.existsSync(defaultConfigFileName)) {
                        console.info("Devcompose config already exists.");
                        // remove the file
                        fs.rm(defaultConfigFileName, (err) => {
                            if ( err ) {
                                console.error('Something went wrong.');
                            }
                            else {
                                console.info("File deleted successfully");
                            }
                        });
                        process.exit(1);    
                    }
                    // call the init function just create a sample config json file in the current dir
                    fs.writeFile(defaultConfigFileName, '', (err) => {
                        console.log("Config created successfully.")
                    })
                    break;
                default:
                    console.log('Not a valid action')
                    break;
            }
        }
    )


program.command('env')

// options for the commander program
// program
//     .option("-l, --ls [val]", "List all the directory")
//     .option("init", "Initialize a configuration file for the environment setup")
//     .parse(process.argv);

// const options = program.opts();

// async function listDirContents(filePath: string) {
//     try {
//         const files = await fs.promises.readdir(filePath);
//         const detailFilePromises = files.map(async (file: string) => {
//             let fileDetails = await fs.promises.lstat(path.resolve(filePath, file));
//             const { size, birthtime } = fileDetails;
//             return {filename: file, "size(kb)": size, createdAt: birthtime};
//         });
//         const detailedFiles = await Promise.all(detailFilePromises);
//         console.table(detailedFiles);
//     } catch(error) {
//         console.error("Error occurred : ",error)
//     }
// }

// if ( options.ls ) {
//     const filepath = typeof options.ls === "string"? options.ls : __dirname;
//     listDirContents(filepath);
// }

// if ( options.init ) {
//     // create the config file
// }

// if ( options.start ) {
//     // setup the local containers
// }

// if ( options.stop ) {
//     // stop the local containers
// }

// if ( options.clean ) {
//     // clean the local containers and attach a new volume
// }


if (!process.argv.slice(2).length) {
    program.outputHelp();
}
