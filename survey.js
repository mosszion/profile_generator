const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable: ", (answer1) => {
  rl.question("what's an activity you like doing?", (answer2) => {
    rl.question("what do you listen to while doing that?", (answer3) => {
      rl.question("which meal is your favourite(e.g dinner, brunch,etc.)?", (answer4) => {
        rl.question("what's you favorite thing to eat for the meal?", (answer5) => {
          rl.question("which sport is your absolute favourite?", (answer6) => {
            rl.question("what's your superpower? In a few words, tell us what you are amazing at!", (answer7) => {
              console.log(`${answer1}. ${answer2}. ${answer3}. ${answer4}. ${answer5}. ${answer6}. ${answer7}.`);
              rl.close();
            });
          });
        });
      });
    
    });
  });
});


