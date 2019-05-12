var targetScore = 61; // randomized variable for target # player is trying to achieve

$("#target-number").text(targetScore); // displays target # on page

var counter = 0; // value points will increase by different increments here, starts at zero

var numberOptions = [12,7,4,9]; // assigns different # values to each coin - randomized

for (var i = 0; i < numberOptions.length; i++){  // for loop thru the array of # options

    var imageCoin = $("<img>"); // creates new image set to each coin

    imageCoin.addClass("coin-image"); // new class for each coin

    imageCoin.attr("src", "https://i.etsystatic.com/12866593/d/il/44c7f2/1870001984/il_340x270.1870001984_4gbc.jpg?version=0", "http://world-of-cliparts.com/images2/super-smash-bros/2/kisspng-new-super-mario-bros-super-paper-mario-mario-bros-coin-5acb3fce12b890.7008038415232695820767.jpg"); //link to coin images
        
    imageCoin.attr("data-coinvalue", numberOptions[i]); // coin data set value set to array value

    $("#coins").append(imageCoin); // displays on page after for loop goes thru and adds class/image for each coin

}

$(".coin-image").on("click", function() { // on click event for coin images

    var coinValue = ($(this).attr("data-coinvalue"));

    coinValue = parseInt(coinValue); // changes string values from HTML to integers for counter

    counter += coinValue; // changes by the varied increments values stored in coinValue

    alert("New score: " + counter); // alert out as score changes

    if (counter === targetNumber) {
      alert("You are Super! You win!");
    }

    else if (counter >= targetNumber) {
      alert("Sorry, better luck next time!");
    }

});