const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Name: ', (name) => {
  rl.question('Email: ', (email) => {
    rl.question('Twitter: ', (twitter) => {
      rl.question('Discord: ', (discord) => {
        const data = `Name: ${name}\nEmail: ${email}\nTwitter: ${twitter}\nDiscord: ${discord}\n`;

        fs.writeFile('Link.txt', data, (err) => {
          if (err) {
            console.error(err);
            return;
          }
          console.log('Data has been successfully saved to Link.txt');
          rl.close();
        });
      });
    });
  });
});
