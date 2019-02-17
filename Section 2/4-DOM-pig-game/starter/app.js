/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
//01.
/*

    // How to create our fundamental game variables;
    // How to generate a random number;
    // How to manipulate the DOM;
    // How to read from the DOM;
    // How to change CSS Style.

*/
var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

document.querySelector('.dice').style.display = 'none';


/*

    ** Events ** : Notifications that are sent to notify the code that something happened on the webpage;
        Clicking a button, resizing a window, scrolling down or pressing a key;
    ** Event listener ** : a function that performs an action based on a certain event. It waits for a specific event to happen.
    ***https://developer.mozilla.org/en-US/docs/Web/Events
    
    ** An anonymous function ** is a function that was declared without any named identifier to refer to it. - 
*/

/*
function btn(){
    //do something here
    
}
btn();
*/

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.btn-roll').addEventListener('click', function () {
//1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;

//2. Display the result     
    var diceDom =  document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';

//3. Update the round score If the rolled number was
    if (dice !== 1) {
        
        // Add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        // Next player
        
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
        
        document.querySelector('.dice').style.display = 'none';
    }
        
});



/*
    ** What the ternary operator is;
    
    ** How to add, remove and toggle HTML classes.
*/















//dice = Math.floor(Math.random() * 6) + 1;
//'only text'
//document.querySelector('#current-' + activePlayer).textContent = dice;
//'we can use html tags'
//document.querySelector('#current-' + activePlayer).InnerHTML = '<em>' + dice + </em>

//var x = document.querySelector('#score-0').textContent;

//'console.log(x);







