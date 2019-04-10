// Each key has an array of all chords found in key
// Key: C
var cMaj = ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bdim'];
var cMin = ['Cm', 'Ddim', 'E♭', 'Fm', 'Gm', 'A♭', 'B♭'];
var cFlatMaj = ['C♭', 'D♭m', 'E♭m', 'F♭', 'G♭', 'A♭m', 'B♭dim'];
var cSharpMaj = ['C♯', 'D♯m', 'E♯m', 'F♯', 'G♯', 'A♯m', 'B♯dim'];
var cFlatMin = ['C♭m', 'D♭dim', 'E♭♭', 'F♭m', 'G♭m', 'A♭♭', 'B♭♭'];
var cSharpMin = ['C♯m', 'D♯dim', 'E', 'F♯m', 'G♯m', 'A', 'B'];
// Key: D 
var dMaj = ['D', 'Em', 'F♯m', 'G', 'A', 'Bm', 'C♯dim'];
var dMin = ['Dm', 'Edim', 'F', 'Gm', 'Am', 'B♭', 'C'];
var dFlatMaj = ['D♭', 'E♭m', 'Fm', 'G♭', 'A♭', 'B♭m', 'Cdim'];
var dSharpMaj = ['D♯', 'E♯m', 'F♯♯m', 'G♯', 'A♯', 'B♯m', 'C♯♯dim'];
var dFlatMin = ['D♭m', 'E♭dim', 'F♭', 'G♭m', 'A♭m', 'B♭♭', 'C♭'];
var dSharpMin = ['D♯m', 'E♯dim', 'F♯', 'G♯m', 'A♯m', 'B', 'C♯'];
// Key: E
var eMaj = ['E', 'F♯m', 'G♯m', 'A', 'B', 'C♯m', 'D♯dim'];
var eMin = ['Em', 'F♯dim', 'G', 'Am', 'Bm', 'C', 'D'];
var eFlatMaj = ['E♭', 'Fm', 'Gm', 'A♭', 'B♭', 'Cm', 'Ddim'];
var eSharpMaj = ['E♯', 'F♯♯m', 'G♯♯m', 'A♯', 'B♯', 'C♯♯m', 'D♯♯dim'];
var eFlatMin = ['E♭m', 'Fdim', 'G♭', 'A♭m', 'B♭m', 'C♭', 'D♭'];
var eSharpMin = ['E♯m', 'F♯♯dim', 'G♯', 'A♯m', 'B♯m', 'C♯', 'D♯'];
// Key: F
var fMaj = ['F', 'Gm', 'Am', 'B♭', 'C', 'Dm', 'Edim'];
var fMin = ['Fm', 'Gdim', 'A♭', 'B♭m', 'Cm', 'D♭', 'E♭'];
var fFlatMaj = ['F♭', 'G♭m', 'A♭m', 'B♭♭', 'C♭', 'D♭m', 'E♭dim'];
var fSharpMaj = ['F♯', 'G♯m', 'A♯m', 'B', 'C♯', 'D♯m', 'E♯dim'];
var fFlatMin = ['F♭m', 'G♭dim', 'A♭♭', 'B♭♭m', 'C♭m', 'D♭♭', 'E♭♭'];
var fSharpMin = ['F♯m', 'G♯dim', 'A', 'Bm', 'C♯m', 'D', 'E'];
// Key: G
var gMaj = ['G', 'Am', 'Bm', 'C', 'D', 'Em', 'F♯dim'];
var gMin = ['Gm', 'Adim', 'B♭', 'Cm', 'Dm', 'E♭', 'F'];
var gFlatMaj = ['G♭', 'A♭m', 'B♭m', 'C♭', 'D♭', 'E♭m', 'Fdim'];
var gSharpMaj = ['G♯', 'A♯m', 'B♯m', 'C♯', 'D♯', 'E♯m', 'F♯♯dim'];
var gFlatMin = ['G♭m', 'A♭dim', 'B♭♭', 'C♭m', 'D♭m', 'E♭♭', 'F♭'];
var gSharpMin = ['G♯m', 'A♯dim', 'B', 'C♯m', 'D♯m', 'E', 'F♯'];
// Key: A
var aMaj = ['A', 'Bm', 'C♯m', 'D', 'E', 'F♯m', 'G♯dim'];
var aMin = ['Am', 'Bdim', 'C', 'Dm', 'Em', 'F', 'G']
var aFlatMaj = ['A♭', 'B♭m', 'Cm', 'D♭', 'E♭', 'Fm', 'Gdim'];
var aSharpMaj = ['A♯', 'B♯m', 'C♯♯m', 'D♯', 'E♯', 'F♯♯m', 'G♯♯dim'];
var aFlatMin = ['A♭m', 'B♭dim', 'C♭', 'D♭m', 'E♭m', 'F♭', 'G♭'];
var aSharpMin = ['A♯m', 'B♯dim', 'C♯', 'D♯m', 'E♯m', 'F♯', 'G♯'];
// Key: B
var bMaj = ['B', 'C♯m', 'D♯m', 'E', 'F♯', 'G♯m', 'A♯dim'];
var bMin = ['Bm', 'C♯dim', 'D', 'Em', 'F♯m', 'G', 'A'];
var bFlatMaj = ['B♭', 'Cm', 'Dm', 'E♭', 'F', 'Gm', 'Adim'];
var bSharpMaj = ['B♯', 'C♯♯m', 'D♯♯m', 'E♯', 'F♯♯', 'G♯♯m', 'A♯♯dim'];
var bFlatMin = ['B♭m', 'Cdim', 'D♭', 'E♭m', 'Fm', 'G♭', 'A♭'];
var bSharpMin = ['B♯m', 'C♯♯dim', 'D♯', 'E♯m', 'F♯♯m', 'G♯', 'A♯'];

// Empty array to store 4 random chords
var chordsArray = [];
// Div that chords will be displayed in
var chordBox = document.getElementById('chord-box');

// Randomly generate a chord
function getRandomChord(key) {
    var randomChord = key[Math.floor(Math.random() * key.length)];
    return randomChord;
}

// Generates random chord depending on which key is selected
// and adds to new array - currently only working for C major and 
// C♯ major whilst testing.
function keySelect() {
  var note = document.getElementById('note-selector').value;
  var sharpOrFlat = document.getElementById('sharp-flat').value;
  var majOrMin = document.getElementById('major-minor').value;
  if (note === 'C' && sharpOrFlat === 'sharp' && majOrMin === 'major') {
    //chordBox.innerHTML = (getRandomChord(cSharpMaj));
    for (var i = 0; i < 4; i += 1) {
      chordsArray.push(getRandomChord(cSharpMaj)); 
    }
  } else if (note === 'C' && sharpOrFlat === 'none' && majOrMin === 'major') {
    //chordBox.innerHTML = (getRandomChord(cMaj));
  } else {
    chordBox.innerHTML = 'nope';
  }
}

keySelect();

// Next step - get items send to chordsArray to not repeat
// and then display 4 chords in their own chord box.