'use strict';

/**
   Homework Assignment #8: Events
   
 */

 /** 
  * Draws an X or O mark in a table cell if is empty
  * 
  * @param id 
  */

let cell1 = document.getElementById('C1');
let cell2 = document.getElementById('C2');
let cell3 = document.getElementById('C3');

let cell4 = document.getElementById('C4');
let cell5 = document.getElementById('C5');
let cell6 = document.getElementById('C6');

let cell7 = document.getElementById('C7');
let cell8 = document.getElementById('C8');
let cell9 = document.getElementById('C9');

let clickCount = 0;


function drawMark(id) {

  const element = document.getElementById(id);

  clickCount++;

    // if table cell is empty
    if (element.innerText === '') {
      if ((clickCount%2 === 1) || 
          (clickCount === 1)) {
          element.innerText = 'X';
          element.className = 'ex';
      } else {
        element.innerText = 'O';
        element.className = 'ou';
      }
    }
    console.log(clickCount);
  checkIfWon();
}


/**
 * Checks if there are 3 same marks next to each other
 * 
 */

function checkIfWon() {
  
  let won = false;
  let end = false, winner = '';

    // horizontal check
    if ((cell1.innerText === cell2.innerText) && (cell2.innerText
        === cell3.innerText) && (cell1.innerText !== '')) { 
        won = true; winner = cell1.innerText;
    }
    if ((cell4.innerText === cell5.innerText) && (cell5.innerText 
        === cell6.innerText) && (cell4.innerText !== '')) { 
        won = true; winner = cell4.innerText;
    }
    if ((cell7.innerText === cell8.innerText) && (cell8.innerText 
        === cell9.innerText) && (cell7.innerText !== '')) { 
        won = true; winner = cell7.innerText;
    }
  
    // vertical check
    if ((cell1.innerText === cell4.innerText) && (cell4.innerText 
        === cell7.innerText) && (cell1.innerText !== '')) { 
        won = true; winner = cell1.innerText;
    }
    if ((cell2.innerText === cell5.innerText) && (cell5.innerText 
        === cell8.innerText) && (cell2.innerText !== '')) { 
        won = true; winner = cell2.innerText;
    }
    if ((cell3.innerText === cell6.innerText) && (cell6.innerText 
        === cell9.innerText) && (cell3.innerText !== '')) {
        won = true; winner = cell3.innerText;
    }

    // diagonal check
    if ((cell1.innerText === cell5.innerText) && (cell5.innerText 
        === cell9.innerText) && (cell1.innerText !== '')) { 
        won = true; winner = cell1.innerText;
    }
    if ((cell3.innerText === cell5.innerText) && (cell5.innerText 
        === cell7.innerText) && (cell3.innerText !== '')) { 
        won = true; winner = cell4.innerText;
    }

    // if someone wins
    if (won) {
        window.alert(winner + ' has won!');
        end = true;
        clickCount = 0;
    }
    
    // check if noone won
    if ((clickCount === 9) && (!won)) {
        window.alert('Cats game!');
        end = true;
        clickCount = 0;
    }

    if (won || end) {
        cell1.innerText = ''; cell2.innerText = ''; 
        cell3.innerText = ''; cell4.innerText = ''; 
        cell5.innerText = ''; cell6.innerText = '';
        cell7.innerText = ''; cell8.innerText = ''; 
        cell9.innerText = '';
    }
}

