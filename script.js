"use strict";

// variables
const fullName = `Andrea Hoffman`;
let age = 29;
const birthday = `September 9`;
let detroitGC = false;
let lifeEvents = [
  `I was born in Kalamazoo`,
  `I went to Western Michigan University`,
  `I ran my first marathon in 2012`,
  `I moved to Portland, OR in 2015`,
];

// if else statement
if (detroitGC) {
  console.log(
    `My name is ${fullName} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  console.log(
    `My name is ${fullName} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}

// for loop
for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

// counter
let counter = 0;

// while loop
while (true) {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  if (randomNumber != 5) {
    counter++;
    console.log(`${randomNumber} != 5`);
  } else {
    counter++;
    console.log(
      `5 === 5 it took ${counter} iterations to randomly generate the number 5`
    );
    break;
  }
}
