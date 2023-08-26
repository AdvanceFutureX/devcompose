# 🚀 Dev Compose CLI Utility

Dev Compose is a Command Line Interface (CLI) utility designed to help you set up a local environment for testing and development purposes. It provides various commands to assist with listing directory contents and initializing a configuration file.


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [List Directory Contents](#list-directory-contents)
  - [Initialize Configuration](#initialize-configuration)
- [Contributing](#contributing)
- [License](#license)

## Installation

To use Dev Compose, you'll need to have Node.js installed on your system.

1. Clone this repository or download the source code.

2. Install the required dependencies using npm:

   ```bash
   npm install
   ```

## Usage

You can run the Dev Compose CLI using the following commands:

### List Directory Contents 📂

To list the contents of a directory, use the `-l` or `--ls` flag followed by the directory path:

```bash
node index.js -l /path/to/directory
```

This command will display a table containing detailed information about the files and directories within the specified directory.

### Initialize Configuration ⚙️

To initialize a configuration file for environment setup, use the following command:

```bash
node index.js init
```

This command will create a configuration file that you can customize for your specific testing and development environment requirements.

## Contributing 👥

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request in this repository.

## License 📜

This project is licensed under the [ISC License](LICENSE). Feel free to use, modify, and distribute this code as needed.
