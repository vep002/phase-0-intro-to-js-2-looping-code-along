// Code your solutions in this file
/*for (let age=30; age<40; age++) {
   console.log (`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i=0; i<gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}

wrapGifts(gifts)

const names= ["Sam", "Fergus", "Naomi", "Wazzername"]
const messages= []
function writeCards(names,string) {
    for (let i=0; i<names.length; i++) {
        messages.push(`${names[i]}, please join me for my ${string} celebration!`)
    }
    console.log(messages)
}
writeCards(["Sam", "Fergus", "Naomi", "Wazzername"], "Halloween")


const gifts=["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
    let i=0;
    while (i<gifts.lenght) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        i++;
    }
    return gifts;
}
wrapGifts(gifts)

let countup = 0;
while (countup < 10) {
  console.log(countup++);
}

for (let countup = 0; countup < 10; countup++) {
    console.log(countup);
  }*/

  function countDown(n) {
      let countdown = n;
      while (countdown>=0) {
          console.log(countdown--);
      }
  }
  countDown(50);
