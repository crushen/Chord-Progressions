// Each key has an array of all chords found in key
// Key: C
const cMaj = ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bdim'];
const cMin = ['Cm', 'Ddim', 'E♭', 'Fm', 'Gm', 'A♭', 'B♭'];
const cSharpMaj = ['C♯', 'D♯m', 'E♯m', 'F♯', 'G♯', 'A♯m', 'B♯dim'];
const cSharpMin = ['C♯m', 'D♯dim', 'E', 'F♯m', 'G♯m', 'A', 'B'];
const cFlatMaj = ['C♭', 'D♭m', 'E♭m', 'F♭', 'G♭', 'A♭m', 'B♭dim'];
const cFlatMin = ['C♭m', 'D♭dim', 'E♭♭', 'F♭m', 'G♭m', 'A♭♭', 'B♭♭'];
// Key: D 
const dMaj = ['D', 'Em', 'F♯m', 'G', 'A', 'Bm', 'C♯dim'];
const dMin = ['Dm', 'Edim', 'F', 'Gm', 'Am', 'B♭', 'C'];
const dSharpMaj = ['D♯', 'E♯m', 'F♯♯m', 'G♯', 'A♯', 'B♯m', 'C♯♯dim'];
const dSharpMin = ['D♯m', 'E♯dim', 'F♯', 'G♯m', 'A♯m', 'B', 'C♯'];
const dFlatMaj = ['D♭', 'E♭m', 'Fm', 'G♭', 'A♭', 'B♭m', 'Cdim'];
const dFlatMin = ['D♭m', 'E♭dim', 'F♭', 'G♭m', 'A♭m', 'B♭♭', 'C♭'];
// Key: E
const eMaj = ['E', 'F♯m', 'G♯m', 'A', 'B', 'C♯m', 'D♯dim'];
const eMin = ['Em', 'F♯dim', 'G', 'Am', 'Bm', 'C', 'D'];
const eSharpMaj = ['E♯', 'F♯♯m', 'G♯♯m', 'A♯', 'B♯', 'C♯♯m', 'D♯♯dim'];
const eSharpMin = ['E♯m', 'F♯♯dim', 'G♯', 'A♯m', 'B♯m', 'C♯', 'D♯'];
const eFlatMaj = ['E♭', 'Fm', 'Gm', 'A♭', 'B♭', 'Cm', 'Ddim'];
const eFlatMin = ['E♭m', 'Fdim', 'G♭', 'A♭m', 'B♭m', 'C♭', 'D♭'];
// Key: F
const fMaj = ['F', 'Gm', 'Am', 'B♭', 'C', 'Dm', 'Edim'];
const fMin = ['Fm', 'Gdim', 'A♭', 'B♭m', 'Cm', 'D♭', 'E♭'];
const fSharpMaj = ['F♯', 'G♯m', 'A♯m', 'B', 'C♯', 'D♯m', 'E♯dim'];
const fSharpMin = ['F♯m', 'G♯dim', 'A', 'Bm', 'C♯m', 'D', 'E'];
const fFlatMaj = ['F♭', 'G♭m', 'A♭m', 'B♭♭', 'C♭', 'D♭m', 'E♭dim'];
const fFlatMin = ['F♭m', 'G♭dim', 'A♭♭', 'B♭♭m', 'C♭m', 'D♭♭', 'E♭♭'];
// Key: G
const gMaj = ['G', 'Am', 'Bm', 'C', 'D', 'Em', 'F♯dim'];
const gMin = ['Gm', 'Adim', 'B♭', 'Cm', 'Dm', 'E♭', 'F'];
const gSharpMaj = ['G♯', 'A♯m', 'B♯m', 'C♯', 'D♯', 'E♯m', 'F♯♯dim'];
const gSharpMin = ['G♯m', 'A♯dim', 'B', 'C♯m', 'D♯m', 'E', 'F♯'];
const gFlatMaj = ['G♭', 'A♭m', 'B♭m', 'C♭', 'D♭', 'E♭m', 'Fdim'];
const gFlatMin = ['G♭m', 'A♭dim', 'B♭♭', 'C♭m', 'D♭m', 'E♭♭', 'F♭'];
// Key: A
const aMaj = ['A', 'Bm', 'C♯m', 'D', 'E', 'F♯m', 'G♯dim'];
const aMin = ['Am', 'Bdim', 'C', 'Dm', 'Em', 'F', 'G'];
const aSharpMaj = ['A♯', 'B♯m', 'C♯♯m', 'D♯', 'E♯', 'F♯♯m', 'G♯♯dim'];
const aSharpMin = ['A♯m', 'B♯dim', 'C♯', 'D♯m', 'E♯m', 'F♯', 'G♯'];
const aFlatMaj = ['A♭', 'B♭m', 'Cm', 'D♭', 'E♭', 'Fm', 'Gdim'];
const aFlatMin = ['A♭m', 'B♭dim', 'C♭', 'D♭m', 'E♭m', 'F♭', 'G♭'];
// Key: B
const bMaj = ['B', 'C♯m', 'D♯m', 'E', 'F♯', 'G♯m', 'A♯dim'];
const bMin = ['Bm', 'C♯dim', 'D', 'Em', 'F♯m', 'G', 'A'];
const bSharpMaj = ['B♯', 'C♯♯m', 'D♯♯m', 'E♯', 'F♯♯', 'G♯♯m', 'A♯♯dim'];
const bSharpMin = ['B♯m', 'C♯♯dim', 'D♯', 'E♯m', 'F♯♯m', 'G♯', 'A♯'];
const bFlatMaj = ['B♭', 'Cm', 'Dm', 'E♭', 'F', 'Gm', 'Adim'];
const bFlatMin = ['B♭m', 'Cdim', 'D♭', 'E♭m', 'Fm', 'G♭', 'A♭'];

const chordsArray = [];
const randomChordsArray = [];
// Shuffles array items
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
// Shuffles chords and pushes 4 chords to randomChordsArray
function getRandomChords(key) {
  // Reset array lengths to stop chords from more than one key being pushed
  chordsArray.length = 0;
  randomChordsArray.length = 0;
  for (let i = 0; i < key.length; i += 1) {
    chordsArray.push(key[i]);
  }
  shuffle(chordsArray);
  for (let i = 0; i < 4; i += 1) {
    randomChordsArray.push(chordsArray[i]);
  }
}
// Takes the note, sharpOrFlat, majOrMin and key - then generates random chords of that key
function chooseKey(n, sOf, mOm, key) {
  const note = document.getElementById('note-selector').value;
  const sharpOrFlat = document.getElementById('sharp-flat').value;
  const majOrMin = document.getElementById('major-minor').value;
  if (note === n && sharpOrFlat === sOf && majOrMin === mOm) {
    getRandomChords(key);
  }
}
// Generates 4 random chords for selected key
function keySelect() {
  const container = document.querySelector('.chord-box-container');
  // Reset the container every time so that boxes don't repeat
  container.innerHTML = '';
  // Key: C
  chooseKey('C', 'none', 'major', cMaj);
  chooseKey('C', 'none', 'minor', cMin);
  chooseKey('C', 'sharp', 'major', cSharpMaj);
  chooseKey('C', 'sharp', 'minor', cSharpMin);
  chooseKey('C', 'flat', 'major', cFlatMaj);
  chooseKey('C', 'flat', 'minor', cFlatMin);
  // Key: D
  chooseKey('D', 'none', 'major', dMaj);
  chooseKey('D', 'none', 'minor', dMin);
  chooseKey('D', 'sharp', 'major', dSharpMaj);
  chooseKey('D', 'sharp', 'minor', dSharpMin);
  chooseKey('D', 'flat', 'major', dFlatMaj);
  chooseKey('D', 'flat', 'minor', dFlatMin);
  // Key: E
  chooseKey('E', 'none', 'major', eMaj);
  chooseKey('E', 'none', 'minor', eMin);
  chooseKey('E', 'sharp', 'major', eSharpMaj);
  chooseKey('E', 'sharp', 'minor', eSharpMin);
  chooseKey('E', 'flat', 'major', eFlatMaj);
  chooseKey('E', 'flat', 'minor', eFlatMin);
  // Key: F
  chooseKey('F', 'none', 'major', fMaj);
  chooseKey('F', 'none', 'minor', fMin);
  chooseKey('F', 'sharp', 'major', fSharpMaj);
  chooseKey('F', 'sharp', 'minor', fSharpMin);
  chooseKey('F', 'flat', 'major', fFlatMaj);
  chooseKey('F', 'flat', 'minor', fFlatMin);
  // Key: G
  chooseKey('G', 'none', 'major', gMaj);
  chooseKey('G', 'none', 'minor', gMin);
  chooseKey('G', 'sharp', 'major', gSharpMaj);
  chooseKey('G', 'sharp', 'minor', gSharpMin);
  chooseKey('G', 'flat', 'major', gFlatMaj);
  chooseKey('G', 'flat', 'minor', gFlatMin);
  // Key: A
  chooseKey('A', 'none', 'major', aMaj);
  chooseKey('A', 'none', 'minor', aMin);
  chooseKey('A', 'sharp', 'major', aSharpMaj);
  chooseKey('A', 'sharp', 'minor', aSharpMin);
  chooseKey('A', 'flat', 'major', aFlatMaj);
  chooseKey('A', 'flat', 'minor', aFlatMin);
  // Key: B
  chooseKey('B', 'none', 'major', bMaj);
  chooseKey('B', 'none', 'minor', bMin);
  chooseKey('B', 'sharp', 'major', bSharpMaj);
  chooseKey('B', 'sharp', 'minor', bSharpMin);
  chooseKey('B', 'flat', 'major', bFlatMaj);
  chooseKey('B', 'flat', 'minor', bFlatMin);
  // Display 4 random chords inside chord box divs
  for (let chord in randomChordsArray) {
    const newElement = document.createElement('div');
    newElement.className = 'chord-box';
    newElement.innerHTML = randomChordsArray[chord];
    container.appendChild(newElement);
  } 
}

keySelect();