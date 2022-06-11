const fs = require('fs');
let inquirer = require('inquirer');
const {spawn} = require('child_process');

const contractDir = 'migrations/';
getFiles = async (path) => {
    const dir = await fs.readdirSync(path, 'utf-8');
    let files = [{name: 'deploy all', value: 'all'}];
    dir.forEach((filename, index) => {
        const _filename = filename.split("_");
        const num = _filename[0];
        files[num] = {name: filename, value: num};
    })
    return files;
}
main = async () => {
    const files = await getFiles(contractDir);
    inquirer.prompt([
        {
            type: 'list',
            name: 'step1',
            message: 'choose a contract',
            choices: files,
        }
    ]).then(answers => {
        let argv;
        if (answers.step1 !== 'all') {
            argv = ["migrate", "--f", answers.step1, "--to", answers.step1];
        } else {
            argv = ["migrate", "--reset"];
        }
        spawn("truffle", argv, {
            stdio: 'inherit',
            shell: true
        });
    });
}

main();
