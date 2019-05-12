var targetScore = Math.round(Math.random() * (120 - 19) + 19); // randomized variable for target # player is trying to achieve (b/w 19-120)
$("#target-number").text(targetScore); // displays target # on page

var counter = 0; // value points will increase by different increments here, starts at zero
var wins = 0; // tallies score wins/losses, starting value of both at zero unless page refreshed
var losses = 0;

var goldCoin = 0;
var blueCoin = 0;
var redCoin = 0;
var rainbowCoin = 0;

function generateRandomNumber(){
    return Math.floor(Math.random() * 12 +1);
}

function updateScore(){
    $("#current-score").text(counter);
    $("#win-record").text(wins);
    $("#loss-record").text(losses);
}

function checkScore(){
    if (counter === targetScore) {
        wins++;
        $("#win-record").text(wins);

        alert("You are Superb! You win!");  // hit target score, alert win
    } else if (counter > targetScore) {
        losses++;
        $("#loss-record").text(losses);
        alert("Sorry, better luck next time!"); // goes above target score, alert loss
    }
}

function initializeGame(){
    goldCoin = generateRandomNumber();
    blueCoin = generateRandomNumber();
    redCoin = generateRandomNumber();
    rainbowCoin = generateRandomNumber();
}
initializeGame();

$("#blue-coin").on("click", function (){
    console.log("Blue coin clicked.");
    console.log(blueCoin);
    counter = counter + blueCoin;
    console.log(counter);
    updateScore();
    checkScore();
})

$("#gold-coin").on("click", function (){
    console.log("gold coin clicked.");
    counter = counter + goldCoin;
    console.log(goldCoin);
    updateScore();
    checkScore();
})

$("#red-coin").on("click", function (){
    console.log("red coin clicked.");
    counter = counter + redCoin;
    console.log(redCoin);
    updateScore();
    checkScore();
})

$("#rainbow-coin").on("click", function (){
    console.log("rainbow coin clicked.");
    counter = counter + rainbowCoin;
    console.log(rainbowCoin);
    updateScore();
    checkScore();
})

 // reset counter after win/loss alerts w/o refreshing
 // wins/losses counter, changes after each round
 // reset coin values 
 // link images each to different coin
 // directions for game at top of screen
 // add a sound to each click on a coin