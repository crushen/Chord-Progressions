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

// Empty array to store 4 random chords
const chordsArray = [];
// Array of all chord boxes
const chordBoxes = document.querySelectorAll('.chord-box');

// Randomly generate a chord
function getRandomChord(key) {
    const randomChord = key[Math.floor(Math.random() * key.length)];
    return randomChord;
}

// Generates random chord depending on which key is selected
// and adds to new array - currently only working for C major and 
// C♯ major whilst testing.
function keySelect() {
  const note = document.getElementById('note-selector').value;
  const sharpOrFlat = document.getElementById('sharp-flat').value;
  const majOrMin = document.getElementById('major-minor').value;
  if (note === 'C' && sharpOrFlat === 'sharp' && majOrMin === 'major') {
    for (let i = 0; i < 4; i += 1) {
      chordsArray.push(getRandomChord(cSharpMaj)); 
    }
    // chordsArray.forEach((chord, index) => {
    //   for (let i = 0; i < chordBoxes.length; i += 1) {
    //     chordBoxes[i].innerHTML = chord;
    //   }
    // });
  } 
}

keySelect();

for (let chord in chordsArray) {
    const newElement = document.createElement('div');
    newElement.innerHTML = chordsArray[chord];
    document.body.appendChild(newElement);
    console.log(newElement);
} 

// Next step - get items send to chordsArray to not repeat
// and then display 4 chords in their own chord box.

