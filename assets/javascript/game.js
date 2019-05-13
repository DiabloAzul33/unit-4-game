var targetScore = Math.round(Math.random() * (120 - 19) + 19); // randomized variable for target # player is trying to achieve (b/w 19-120)
$("#target-number").text(targetScore); // displays target # on page

var counter = 0; // value points will increase by different increments here, starts at zero
var wins = 0; // tallies score wins/losses, starting value of both at zero unless page refreshed
var losses = 0;

var goldCoin = 0; // each coin color variable - to be set each round with randomnly generated number
var blueCoin = 0;
var redCoin = 0;
var rainbowCoin = 0;

function generateRandomNumber(){ // generates # from 1-12 for coin values each round
    return Math.floor(Math.random() * 12 +1);
}

function initializeGame(){ // sets random # for each coin 
    goldCoin = generateRandomNumber();
    blueCoin = generateRandomNumber();
    redCoin = generateRandomNumber();
    rainbowCoin = generateRandomNumber();
}
initializeGame(); // calls for game to start by running fxn above

function updateScore(){  // adds into HTML new current score counter
    $("#current-score").text(counter);
    $("#win-record").text(wins);
    $("#loss-record").text(losses);
}

function checkScore(){
    if (counter === targetScore) {
        wins++;
        $("#win-record").text(wins);
        alert("YOU WIN! You are SUPERB!!");  // hit target score, alert win
        initializeGame();
    } else if (counter > targetScore) {
        losses++;
        $("#loss-record").text(losses);
        alert("GAME OVER, better luck next time!!"); // goes above target score, alert loss
        initializeGame();
    }  
}

$("#blue-coin").on("click", function (){ // click events for each coin
    console.log("Blue coin clicked.");
    console.log(blueCoin);
    counter = counter + blueCoin; // adds to blue coin counter
    console.log(counter);
    updateScore(); // updates current score counter
    checkScore(); //
});

$("#gold-coin").on("click", function (){
    console.log("gold coin clicked.");
    counter = counter + goldCoin;
    console.log(goldCoin);
    updateScore();
    checkScore();
});

$("#red-coin").on("click", function (){
    console.log("red coin clicked.");
    counter = counter + redCoin;
    console.log(redCoin);
    updateScore();
    checkScore();
});

$("#rainbow-coin").on("click", function (){
    console.log("rainbow coin clicked.");
    counter = counter + rainbowCoin;
    console.log(rainbowCoin);
    updateScore();
    checkScore();
});

 // reset counter after win/loss alerts w/o refreshing
 // add a sound to each click on a coin, game over, game won