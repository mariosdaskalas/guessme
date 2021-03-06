let country = {
    "0": [{"name": "Afghanistan", "image": "./flags/Afghanistan.png"}
],
"1": [{"name": "Afghanistan", "image": "./flags/Afghanistan.png"}
],
"2": [{"name": "Albania", "image": "./flags/Albania.png"}
],
"3": [{"name": "Algeria", "image": "./flags/Algeria.png"}
],
"4": [{"name": "Andorra", "image": "./flags/Andorra.png"}
],
"5": [{"name": "Angola", "image": "./flags/Angola.png"}
],
"6": [{"name": "Anguilla", "image": "./flags/Anguilla.png"}
],
"7": [{"name": "Argentina", "image": "./flags/Argentina.png"}
],
"8": [{"name": "Armenia", "image": "./flags/Armenia.png"}
],
"9": [{"name": "Aruba", "image": "./flags/Aruba.png"}
],
"10": [{"name": "Australia", "image": "./flags/Australia.png"}
],
"11": [{"name": "Austria", "image": "./flags/Austria.png"}
],
"12": [{"name": "Azerbaijan", "image": "./flags/Azerbaijan.png"}
],
"13": [{"name": "Bahamas", "image": "./flags/Bahamas.png"}
],
"14": [{"name": "Bahrain", "image": "./flags/Bahrain.png"}
],
"15": [{"name": "Bangladesh", "image": "./flags/Bangladesh.png"}
],
"16": [{"name": "Barbados", "image": "./flags/Barbados.png"}
],
"17": [{"name": "Belarus", "image": "./flags/Belarus.png"}
],
"18": [{"name": "Belgium", "image": "./flags/Belgium.png"}
],
"19": [{"name": "Belize", "image": "./flags/Belize.png"}
],
"20": [{"name": "Benin", "image": "./flags/Benin.png"}
],
"21": [{"name": "Bermuda", "image": "./flags/Bermuda.png"}
],
"22": [{"name": "Bhutan", "image": "./flags/Bhutan.png"}
],
"23": [{"name": "Bolivia", "image": "./flags/Bolivia.png"}
],
"24": [{"name": "Bosnia", "image": "./flags/Bosnia.png"}
],
"25": [{"name": "Botswana", "image": "./flags/Botswana.png"}
],
"26": [{"name": "Brazil", "image": "./flags/Brazil.png"}
],
"27": [{"name": "Brunei", "image": "./flags/Brunei.png"}
],
"28": [{"name": "Bulgaria", "image": "./flags/Bulgaria.png"}
],
"29": [{"name": "Burundi", "image": "./flags/Burundi.png"}
],
"30": [{"name": "Cambodia", "image": "./flags/Cambodia.png"}
],
"31": [{"name": "Cameroon", "image": "./flags/Cameroon.png"}
],
"32": [{"name": "Canada", "image": "./flags/Canada.png"}
],
"33": [{"name": "Chad", "image": "./flags/Chad.png"}
],
"34": [{"name": "Chile", "image": "./flags/Chile.png"}
],
"35": [{"name": "China", "image": "./flags/China.png"}
],
"36": [{"name": "Colombia", "image": "./flags/Colombia.png"}
],
"37": [{"name": "Comoros", "image": "./flags/Comoros.png"}
],
"38": [{"name": "Croatia", "image": "./flags/Croatia.png"}
],
"39": [{"name": "Cuba", "image": "./flags/Cuba.png"}
],
"40": [{"name": "Cyprus", "image": "./flags/Cyprus.png"}
],
"41": [{"name": "Denmark", "image": "./flags/Denmark.png"}
],
"42": [{"name": "Djibouti", "image": "./flags/Djibouti.png"}
],
"43": [{"name": "Dominica", "image": "./flags/Dominica.png"}
],
"44": [{"name": "Ecuador", "image": "./flags/Ecuador.png"}
],
"45": [{"name": "Egypt", "image": "./flags/Egypt.png"}
],
"46": [{"name": "Eritrea", "image": "./flags/Eritrea.png"}
],
"47": [{"name": "Estonia", "image": "./flags/Estonia.png"}
],
"48": [{"name": "Ethiopia", "image": "./flags/Ethiopia.png"}
],
"49": [{"name": "Fiji", "image": "./flags/Fiji.png"}
],
"50": [{"name": "Finland", "image": "./flags/Finland.png"}
]
    };

// Define variables
let random;
let randomFlag;
let randomName;
let img;
let rightChoice = 0;
let wrongChoice = 0;
let count = 0;
let arr = [];

// Call function with button pressed
document.getElementById("startGameBtn").addEventListener("click", startGame);
let startGameButton = document.getElementById("startGameBtn");

// Call function with button pressed
document.getElementById("guessBtn").addEventListener("click", guessCountry);
let guessButton = document.getElementById("guessBtn");

function startGame() {
    console.log("Game Starts!");
    document.getElementById("score-item").style.display = "block";
    
    // Generates random number from 0 till array length
    random = Math.floor(Math.random() * Object.keys(country).length);
    // Randomly pick from country value-key pair image and name
    randomFlag = country[random][0].image;
    randomName = country[random][0].name;
    console.log(`Random Name: ${randomName}`);

    // Record counter in order to set to empty input field
    count++;
    if (count > 1) {
        document.getElementById("guessCountry").value = "";   
    }
    // Remove img element if image already exists
    if (img) {
        img.remove();
    }

    // Display image on click event
    img = document.createElement("IMG");
    img.setAttribute("src", randomFlag);
    img.setAttribute("alt", "Try to find out!");
    document.getElementById("computer-country").appendChild(img);
    startGameButton.innerHTML = "Next";

    // Disable button but enable the guess button
    this.disabled = true;
    document.getElementById("guessBtn").disabled = false;
    document.getElementById("computer-item").style.display = "block";

    // Convert to uppercase, so in the next steps
    // can be equal with input text field
    // no matter if user types lowercase / uppercase
    randomName = randomName.toUpperCase();
    document.getElementById("computer-item").style.display = "block";
}

function guessCountry() {
    let userTyped = document.getElementById("guessCountry").value;
    console.log(`User typed: ${userTyped}`);
    // If user typed the correct missing country
    if (userTyped.toUpperCase() == randomName) {
        rightChoice++;
        // Push the correct guessed word to the array
        arr.push(randomName);
        console.log(arr);
        document.getElementById("user-score").innerHTML = rightChoice;
        document.getElementById("message").innerHTML = `Correct! Country was: /${randomName}/`;
    }
    // Check if input field is empty
    else if (userTyped == "") {
        document.getElementById("message").innerHTML = "Please type a country! You lost your turn!";
    }
    else {
        wrongChoice++;
        document.getElementById("computer-score").innerHTML = wrongChoice;
        document.getElementById("message").innerHTML = `Wrong! Correct Country: /${randomName}/`;
    }
    // Disable button but enable the start button
    this.disabled = true;
    document.getElementById("startGameBtn").disabled = false;
}
// Resets the webpage
function reset() {
    location.reload();
}
// Shows all the correct guessed numbers
function showHistory() {
    if (arr === undefined || arr.length == 0) {
        document.getElementById("history").innerHTML = "You did not find correctly any country yet. Please try again!";
    }
    else {
        document.getElementById("history").innerHTML = `Correct Guesses: ${arr}`;
    }
}