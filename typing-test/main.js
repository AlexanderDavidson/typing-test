// Put text on screen
/* Using Text as Array
 var text = ['How', 'vexingly', 'quick', 'daft', 'zebras', 'jump!'] */

var text = "How vexingly quick daft zebras jump!"

var phrase = text
var textArray = phrase.split('')
var textArrayLength = textArray.length
var blank = []

// function to create single letters into individual <span>'s
//Issue - its creating a span of the whole array of individual letters

var $divCenter = document.createElement('div')

for (var i = 0; i < textArrayLength; i++) {
  var $text = document.createElement('span')
  $text.className = 'center'
  $text.textContent = text[i]
  document.getElementById('testText').appendChild($text)
}
// need to nest 'center' into div to be able to center

document.addEventListener('DOMContentLoaded')


/* g
function sentence(characters) {
  var results = []
  function () {
    .forEach( function (character) {
      result.push(letter(character))
    })
  }
  return result
}


/* function letter(character) {
  var $character = document.createElement('span') //$character === new <span>
  $character


  //$character.textContent = character
  //return $character
}

$text.querySelector ('span').classList.add('currentLetter')

sentence(textArray).forEach( function (letter) {
  $text.appendChild(letter)
})
*/
