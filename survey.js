const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? ', (name) => {
  rl.question('What\'s an activity you like doing? ', (activity) => {
    rl.question('What do you listen to while doing that? ', (music) => {
      rl.question('Which meal is your favourite? ', (meal) => {
        rl.question('What\'s your favourite thing to eat for that meal? ', (food) => {
          rl.question('Which sport is your absolute favourite? ', (sport) => {
            rl.question('What is your superpower? ', (power) => {
              
              console.log('Your autoprofile:');
              let str = `Hello! My name is ${name}, I like ${activity} and ${music}. I also like ${meal}, specifically ${food}. My favorit sport is ${sport} and my superpower is ${power}. Thanks for visiting my profile!`;
              console.log(str);
              rl.close();
            });
          });
        });
      });
    });
  });
});