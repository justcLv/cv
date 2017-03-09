'use strict';
require('../public/index.html');
import 'babel-polyfill';
import './global.scss';

console.log('1. script starts here');

const loop = document.querySelector('.loop');
var loopText = ['<.../>', '< HTML5 />', 'CSS3{}', 'JavaScript{}'];

var i = 0;
setInterval(function () {
  i += 1;
  if (i >= loopText.length) {
    i = 0;
  }
  loop.innerHTML = loopText[i];
  // console.log(i);
}, 600);
// loop end         DO NOT DELETE!!!

// accordion

var accordionItems = [ ];

function init () { // eslint-disable-line no-unused-vars
  // Grab the accordion items from the page
  var divs = document.getElementsByTagName('div');
  for (var i = 0; i < divs.length; i++) {
    if (divs[i].className === 'accordionItem') accordionItems.push(divs[i]);
  }
  // Assign onclick events to the accordion item headings
  for (var i = 0; i < accordionItems.length; i++) { // eslint-disable-line no-redeclare
    var h2 = getFirstChildWithTagName(accordionItems[i], 'H2');
    h2.onclick = toggleItem;
  }
  // Hide all accordion item bodies except the first
  for (var i = 1; i < accordionItems.length; i++) { // eslint-disable-line no-redeclare
    accordionItems[i].className = 'accordionItem hide';
  }
}

function toggleItem () {
  var itemClass = this.parentNode.className;
  // Hide all items
  for (var i = 0; i < accordionItems.length; i++) {
    accordionItems[i].className = 'accordionItem hide';
  }
  // Show this item if it was previously hidden
  if (itemClass === 'accordionItem hide') {
    this.parentNode.className = 'accordionItem';
  }
}

function getFirstChildWithTagName (element, tagName) {
  for (var i = 0; i < element.childNodes.length; i++) {
    if (element.childNodes[i].nodeName === tagName) return element.childNodes[i];
  }
}

init();

// accordion end

console.log('2.script ends here');
