// Each key has an array of all chords found in key
// Key: C
const cMaj = ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bdim'];
const cMin = ['Cm', 'Ddim', 'E♭', 'Fm', 'Gm', 'A♭', 'B♭'];
const cFlatMaj = ['C♭', 'D♭m', 'E♭m', 'F♭', 'G♭', 'A♭m', 'B♭dim'];
const cSharpMaj = ['C♯', 'D♯m', 'E♯m', 'F♯', 'G♯', 'A♯m', 'B♯dim'];
const cFlatMin = ['C♭m', 'D♭dim', 'E♭♭', 'F♭m', 'G♭m', 'A♭♭', 'B♭♭'];
const cSharpMin = ['C♯m', 'D♯dim', 'E', 'F♯m', 'G♯m', 'A', 'B'];
// Key: D 
const dMaj = ['D', 'Em', 'F♯m', 'G', 'A', 'Bm', 'C♯dim'];
const dMin = ['Dm', 'Edim', 'F', 'Gm', 'Am', 'B♭', 'C'];
const dFlatMaj = ['D♭', 'E♭m', 'Fm', 'G♭', 'A♭', 'B♭m', 'Cdim'];
const dSharpMaj = ['D♯', 'E♯m', 'F♯♯m', 'G♯', 'A♯', 'B♯m', 'C♯♯dim'];
const dFlatMin = ['D♭m', 'E♭dim', 'F♭', 'G♭m', 'A♭m', 'B♭♭', 'C♭'];
const dSharpMin = ['D♯m', 'E♯dim', 'F♯', 'G♯m', 'A♯m', 'B', 'C♯'];
// Key: E
const eMaj = ['E', 'F♯m', 'G♯m', 'A', 'B', 'C♯m', 'D♯dim'];
const eMin = ['Em', 'F♯dim', 'G', 'Am', 'Bm', 'C', 'D'];
const eFlatMaj = ['E♭', 'Fm', 'Gm', 'A♭', 'B♭', 'Cm', 'Ddim'];
const eSharpMaj = ['E♯', 'F♯♯m', 'G♯♯m', 'A♯', 'B♯', 'C♯♯m', 'D♯♯dim'];
const eFlatMin = ['E♭m', 'Fdim', 'G♭', 'A♭m', 'B♭m', 'C♭', 'D♭'];
const eSharpMin = ['E♯m', 'F♯♯dim', 'G♯', 'A♯m', 'B♯m', 'C♯', 'D♯'];
// Key: F
const fMaj = ['F', 'Gm', 'Am', 'B♭', 'C', 'Dm', 'Edim'];
const fMin = ['Fm', 'Gdim', 'A♭', 'B♭m', 'Cm', 'D♭', 'E♭'];
const fFlatMaj = ['F♭', 'G♭m', 'A♭m', 'B♭♭', 'C♭', 'D♭m', 'E♭dim'];
const fSharpMaj = ['F♯', 'G♯m', 'A♯m', 'B', 'C♯', 'D♯m', 'E♯dim'];
const fFlatMin = ['F♭m', 'G♭dim', 'A♭♭', 'B♭♭m', 'C♭m', 'D♭♭', 'E♭♭'];
const fSharpMin = ['F♯m', 'G♯dim', 'A', 'Bm', 'C♯m', 'D', 'E'];
// Key: G
const gMaj = ['G', 'Am', 'Bm', 'C', 'D', 'Em', 'F♯dim'];
const gMin = ['Gm', 'Adim', 'B♭', 'Cm', 'Dm', 'E♭', 'F'];
const gFlatMaj = ['G♭', 'A♭m', 'B♭m', 'C♭', 'D♭', 'E♭m', 'Fdim'];
const gSharpMaj = ['G♯', 'A♯m', 'B♯m', 'C♯', 'D♯', 'E♯m', 'F♯♯dim'];
const gFlatMin = ['G♭m', 'A♭dim', 'B♭♭', 'C♭m', 'D♭m', 'E♭♭', 'F♭'];
const gSharpMin = ['G♯m', 'A♯dim', 'B', 'C♯m', 'D♯m', 'E', 'F♯'];
// Key: A
const aMaj = ['A', 'Bm', 'C♯m', 'D', 'E', 'F♯m', 'G♯dim'];
const aMin = ['Am', 'Bdim', 'C', 'Dm', 'Em', 'F', 'G']
const aFlatMaj = ['A♭', 'B♭m', 'Cm', 'D♭', 'E♭', 'Fm', 'Gdim'];
const aSharpMaj = ['A♯', 'B♯m', 'C♯♯m', 'D♯', 'E♯', 'F♯♯m', 'G♯♯dim'];
const aFlatMin = ['A♭m', 'B♭dim', 'C♭', 'D♭m', 'E♭m', 'F♭', 'G♭'];
const aSharpMin = ['A♯m', 'B♯dim', 'C♯', 'D♯m', 'E♯m', 'F♯', 'G♯'];
// Key: B
const bMaj = ['B', 'C♯m', 'D♯m', 'E', 'F♯', 'G♯m', 'A♯dim'];
const bMin = ['Bm', 'C♯dim', 'D', 'Em', 'F♯m', 'G', 'A'];
const bFlatMaj = ['B♭', 'Cm', 'Dm', 'E♭', 'F', 'Gm', 'Adim'];
const bSharpMaj = ['B♯', 'C♯♯m', 'D♯♯m', 'E♯', 'F♯♯', 'G♯♯m', 'A♯♯dim'];
const bFlatMin = ['B♭m', 'Cdim', 'D♭', 'E♭m', 'Fm', 'G♭', 'A♭'];
const bSharpMin = ['B♯m', 'C♯♯dim', 'D♯', 'E♯m', 'F♯♯m', 'G♯', 'A♯'];
// Array of all chord boxes
const chordBoxes = document.querySelectorAll('.chord-box');
// Empty array to store 4 random chords
const chordsArray = [];
const uniqueChordsArray = [];


// Randomly generate a chord
// function getRandomChord(key) {
//   const randomChord = key[Math.floor(Math.random() * key.length)];
//   return randomChord;
// }


const myArray = [1,2,3,4,5];

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

shuffle(myArray);

console.log(myArray);


const array = [];

function getRandomChords(key) {
  for (let i = 0; i < key.length; i += 1) {
    array.push(key[i]);
  }
  shuffle(array);
  for (let i = 0; i < 4; i += 1) {
    uniqueChordsArray.push(array[i]);
  }
  
  // let start = 0;
  // const end = array.length;
  // for (let i = 0; i < 4; i++) {
  //   // Random index from range [start, end)
  //   const randomIndex = Math.floor(Math.random() * (end - start)) + start;
  //   // Get the random element
  //   const x = array[randomIndex];
  //   // Swap the random element
  //   array[randomIndex] = array[start];
  //   array[start] = x;
  //   // Increment the start range
  //   start++;
  //   console.log(x);
  //   chordsArray.push(x);
  // }
  // if(array.length > 0) {
  //   var index = Math.floor(Math.random() * array.length)
  //   var chord = array[index];
  //   array.push(index, 1);
  //  }
}

// Generates random chord depending on which key is selected
// and adds to new array - currently only working for C # major and D # major
function keySelect() {
  const note = document.getElementById('note-selector').value;
  const sharpOrFlat = document.getElementById('sharp-flat').value;
  const majOrMin = document.getElementById('major-minor').value;
  const container = document.querySelector('.chord-box-container');
  // Reset the container every time so that boxes don't repeat
  chordsArray.length = 0;
  container.innerHTML = '';
  if (note === 'C' && sharpOrFlat === 'sharp' && majOrMin === 'major') {
    getRandomChords(cSharpMaj);
  } else if (note === 'D' && sharpOrFlat === 'sharp' && majOrMin === 'major') {
    getRandomChords(dSharpMaj);
  } else {
    chordsArray.push('none');
  }
  for (let chord in chordsArray) {
    const newElement = document.createElement('div');
    newElement.className = 'chord-box';
    newElement.innerHTML = chordsArray[chord];
    container.appendChild(newElement);
  } 
}

keySelect();


// Next step - get items send to chordsArray to not repeat

// function hasDuplicates(array) {
//   return (new Set(array)).size !== array.length;
// }

// console.log(hasDuplicates(chordsArray));

// if (a.indexOf(value)==-1) a.push(value);

console.log(array);
console.log(uniqueChordsArray);