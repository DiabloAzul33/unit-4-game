var targetScore = 61; // variable for target # player is trying to achieve

$("#target-number").text(targetScore); // displays target # on page

var counter = 0; // value points will increase by

var numberOptions = [12,7,4,9]; // assigns different # values to each crystal

for (var i = 0; i < numberOptions.length; i++){  // for loop thru the array of # options

    var imageCrystal = $("<img>"); // creates new image set to each crystal

    imageCrystal.addClass("crystal-image"); // new class for each crystal

    imageCrystal.attr("src", "jpg"); //link to crystal image
        
    imageCrystal.attr("data-crystalvalue", numberOptions[i]); // 



}
