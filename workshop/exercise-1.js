// -------------------------------------------------------------
// String Methods Exercises
// ----------
// note: need to have covered string methods for these exercises
// -------------------------------------------------------------

// Write to the console, the desired length of each of the following strings.
// When this exercise is complete, it should write all of the answers to the console one after the other.

// Given the following data to answer the questions.
const smartGuy = 'Rick Sanchez';
const rickSaying = 'wubba lubba dub dub';
const grandson = 'Morty Antoine Smith';
const enemies =
  'Tammy Gueterman, Evil Morty, Zeep Xanflorp, Galactic Federation, Council of Ricks, Phoenixperson, Scary Terry, Abradolf Lincler, Supernova';
const alternateRicks =
  'Simple Rick, Slow Rick, Tall Rick, Cop Rick, Doofus Rick, Past Rick, Replacement Rick, Insurance Rick, Sales Rick, Supervisor Rick, Cool Rick, Cowboy Rick, Tiny Rick, Cronenberg Rick, Teacher Rick, Farmer Rick, Future Rick, Rick J22, Evil Rick, Toxic Rick, Crunk Rick, Pickle Rick, The Scientist Formerly Known as Rick, Rick C-137';
const secret =
  "summerlobaconokfamily ascaryt mintergalactice, I'jerrym Pimortybethckle Rick!";
const notCode = [
  'summer',
  'bacon',
  'scary',
  'intergalactic',
  'jerry',
  'morty',
  'beth',
  'family',
];

// Q1.1
// How many names does Morty have? (use grandson)

const mortyNamesSplit = grandson.split(' ');
const mortyNames = mortyNamesSplit.length;
console.log(`1.1 Morty has ${mortyNames} names.`);

// Q1.2
// Convert the alternateRicks string to an array. Console that array.

const alternateRicksArr = alternateRicks.split(', ')
console.log('1.2', alternateRicksArr);

// Q1.3
// How many Ricks have been named in alternateRicks?

let numberOfRicks = 0;
for (let i = 0; i < alternateRicksArr.length; i++) {
  if (alternateRicksArr[i].includes('Rick')) {
    numberOfRicks++;
  }
}
console.log(`1.3 ${numberOfRicks} Ricks have been named in alternateRicks`);

// Q1.4
// How many characters are there in rickSaying (without spaces)?

const rickSayingReplace = rickSaying.split(' ').join('');
// 2nd way:
// const rickSayingReplace = rickSaying.replace(/\s+/g, '');
console.log(`1.4 There are ${rickSayingReplace.length} letters within rickSaying (without spaces)`);


// Q1.4
// Morty doesn't actually have a middle name. Console Morty's name without "Antoine".

const mortyNoMiddle = grandson.replace('Antoine ','');
console.log(`1.4 ${mortyNoMiddle}`)

// Q1.5
// Decode and console. the secret!
// To do so, you will need to remove all of the notCode words.

let decodedMsg = secret;
for (let i = 0; i < notCode.length; i++) {
  decodedMsg = decodedMsg.replace(notCode[i],'');
}
console.log('1.5', decodedMsg);

// Q1.6 (Stretch Goal)
// Scary Terry is actually not an enemy. Remove him from the list and console only Rick's true enemies.

const noScaryTerry = enemies.replace('Scary Terry, ','');
console.log(`1.6 ${noScaryTerry}`)