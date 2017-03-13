// Put text on screen
/* Using Text as Array
 var text = ['How', 'vexingly', 'quick', 'daft', 'zebras', 'jump!'] */

var text = "How vexingly quick daft zebras jump!"
var phrase = text
var textArray = phrase.split('')
var textArrayLength = textArray.length
var error = 0

// function to create single letters into individual <span>'s
//Issue - its creating a span of the whole array of individual letters

var divCenter = document.createElement('div')
divCenter.classList.add ('center')

for (var i = 0; i < textArrayLength; i++) {
  var $text = document.createElement('span')
  $text.className = 'character'
  $text.textContent = text[i]
  divCenter.appendChild($text)
}
// need to nest 'center' into div to be able to center
document.body.appendChild (divCenter)


// Style the current letter
var $firstLetter = document.querySelector ('span')
$firstLetter.classList.add ('current')

var keySelector = function (event) {
  var $current = document.querySelector('.current')
  var $currentCharacter = $current.textContent
  if (event.key === $currentCharacter) {
    $current.classList.remove ('current')
    if ($current.nextSibling) {
      $current.nextSibling.classList.add('current')
    }
    $current.classList.remove ('wrong')
    $current.classList.add ('done')
  }
  else {
    $current.classList.add ('wrong')
    error++
  }

  var doneLength = document.querySelectorAll('.done').length
  if (doneLength === textArrayLength) {
    showScore()
  }
}

document.addEventListener ('keypress', keySelector)

function showScore() {
  window.alert('You made ' + error + ' mistakes')
}
