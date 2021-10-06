// Text Adventure Game
const enter = "Please enter 1 or 2 for your answer";

const gameOver = "Sorry GAME OVER!";

const start = `Welcome to the Ashley's Hair Salon Adventure Game. Click 'OK' to start the game.`;

const q1 = `You have a new client call and ask to make an appointment for this week. Your schedule is pretty full this week. Should you...
1. Fit her in between two usual clients on a busy day
OR
2. Explain to her you have a day open next week to give you more time to dedicate to her.
${enter}`;

const gameOver1 = `Client shows up, you get overwhelmed trying to take care of everyone. New client gets upset and leaves. ${gameOver}`;

const q2 = `Client agrees and makes appointment for following week. She shows up and asks for blonde highlights and a perm. Should you...
1. Explain to client there is a risk of hair falling out if she gets both services done. Convince her to just go with the blonde highlights.
OR
2. Give client what they want.
${enter}`;

const gameOver2 = `Clients hair comes out by the handfuls while rinsing perm solution. She leaves a bad review on your salon. ${gameOver}`;

const q3 = `Since clients hair is dark you explain it will not be easy to get to blonde. Should you...
1. Decide to try the strongest 40 volume developer hoping it will lighten the hair faster
OR
2. Use a 20 or 30 volume developer and do a double process on hair which will take twice as long for you.
${enter}`;

const gameOver3 = `Using the 40 volume developer damages the clients hair beyond repair. She has to cut it short and swears to tell all her friends not to use your salon. ${gameOver}`;

const q4 = `While clients hair is processing, you have some free time. Should you...
1. Offer client a free brow wax as a thanks for being a new customer
OR
2. Call up a friend and talk to her leaving client in chair alone. 
${enter}`;

const gameOver4 = `Client feels neglected. She allows you to finish her hair but decides she will not be coming back again. ${gameOver}`;

const q5 = `Client is very pleased with her brow wax and says she will come to you for her brows from now on. When you rinse out second round of lightener you notice her hair has a slight yellow tone. Should you...
1. Apply a toner to see if it helps
OR
2. Just leave it, She started with black and you got it close enough.
${enter}`;

const gameOver5 = `Client is not happy with her hair color. Tells all her friends how bad you are. ${gameOver}`;

const win = `The toner worked. You shampoo and style her beautiful blonde hair and she informs you that you now have a client for life!`;


alert(start);

let userInput = prompt(q1);
if (userInput == 2) {
  userInput = prompt(q2);

  if (userInput == 1){
    userInput = prompt(q3);

    if (userInput == 2) {
      userInput = prompt(q4);

      if (userInput == 1){
        userInput = prompt(q5);

        if (userInput == 1) {
          alert(win);
        } else {
          alert(gameOver5);
        }

      } else {
        alert(gameOver4);
      }

    } else {
      alert(gameOver3);
    }

  } else {
    alert(gameOver2);
  }

} else {
  alert(gameOver1);
}
