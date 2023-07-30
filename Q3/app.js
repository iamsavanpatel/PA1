const readline = require('readline');
const { getName } = require('./namebot');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function promptUser() {
  rl.question('Please Enter Your Name: ', (name) => {
    if (name.trim() === '') {
      console.log('Name Cannot Be Empty. Please Try Again.');
      promptUser();
    } else {
      const nameData = getName(name);
      console.log(`Your Name is ${nameData.name} !!`);
      rl.close();
    }
  });
}

console.log('Welcome To The Name bot!');
promptUser();
