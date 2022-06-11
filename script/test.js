const fs = require('fs');
let inquirer = require('inquirer');
const { spawn } = require('child_process');

const contractDir = 'test/';
getFiles = async (path) => {
    const dir = await fs.readdirSync(path, 'utf-8');
    let files = [{name:'test all',value:'all'}];

    dir.map(async el=>{
        let stat = fs.statSync(path + el);
        if(el !== 'inc'){
            if (stat.isDirectory()) {
                let dirFiles = await fs.readdirSync(path + el + '/', 'utf-8');
                dirFiles.map(sub => files.push(el + '/' + sub));
            } else {
                files.push(el);
            }
        }
    })
    return files;
}
main = async () => {
    const files = await getFiles(contractDir);

    inquirer.prompt([
        {
            type: 'list',
            name: 'step1',
            message: 'choose a test contract',
            choices: files,
        }
    ])
        .then(answers => {
            let argv;
            if(answers.step1 !== 'all'){
                // console.log("\033[33mRun:\033[39m " + "truffle test " + contractDir + answers.step1);
                argv = ["mocha","--exit","--recursive",contractDir + answers.step1];
                //argv = ["truffle","test",contractDir + answers.step1];
            }else{
                argv = ["mocha","--exit","--recursive"];
                //argv = ["truffle","test"];
                // console.log("\033[33mRun:\033[39m " + "truffle test ");
            }
            spawn("npx",argv, {
                stdio: 'inherit',
                shell: true
            });
        });
}

main();
