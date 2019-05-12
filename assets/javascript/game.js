var targetScore = 61; // randomized variable for target # player is trying to achieve
    Math.round(Math.random())
$("#target-number").text(targetScore); // displays target # on page

var counter = 0; // value points will increase by different increments here, starts at zero

var numberOptions = [12,7,4,9]; // assigns different # values to each coin - randomized
var images = ["unit-4-game/assets/images/Blue_Coins.jpg", "images/Gold_Star_Coins.jpg", "images/Green_Coins.jpg" , "images/Red_Coin.png"]; // array of images length of # value array

for (var i = 0; i < numberOptions.length; i++){  // for loop thru the array of # options

    var imageCoin = $("<img>"); // creates new image set to each coin

    imageCoin.addClass("coin-image"); // new class for each coin

    imageCoin.attr("src", images[i]); //link to coin images
        
    imageCoin.attr("data-coinvalue", numberOptions[i]); // coin data set value set to array value

    $("#coins").append(imageCoin); // displays on page after for loop goes thru and adds class/image for each coin

}

for (var i = 0; i < numberOptions.length; i++){  // for loop thru the array of # options

    var imageCoin = $("<img>"); // creates new image set to each coin

    imageCoin.addClass("coin-image"); // new class for each coin

    imageCoin.attr("src", ""); //link to coin images
        
    imageCoin.attr("data-coinvalue", numberOptions[i]); // coin data set value set to array value

    $("#coins").append(imageCoin); // displays on page after for loop goes thru and adds class/image for each coin

}

$(".coin-image").on("click", function() { // on click event for coin images

    var coinValue = ($(this).attr("data-coinvalue"));

    coinValue = parseInt(coinValue); // changes string values from HTML to integers for counter

    counter += coinValue; // changes by the varied increments values stored in coinValue

    alert("New score: " + counter); // alert out as score changes

    if (counter === targetScore) {   
      alert("You are Superb! You win!");  // hit target score, alert win
    }

    else if (counter >= targetScore) {
      alert("Sorry, better luck next time!"); // goes above target score, alert loss
    }

});

 // reset counter after win/loss alerts w/o refreshing
 // wins/losses counter, changes after each round
 // reset coin values 
 // link images each to different coin
 // directions for game at top of screen