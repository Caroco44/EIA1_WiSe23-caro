stories = ["Hello, your computer has a virus. Do you want me to help? Yes or no",
    "Ok, first, do you agree to send me 500 dollars? Yes or no",
    "What do you mean no. For being rude, you owe me 500 dollars. Will you give it to me? Yes or no",
    "Ok thank you, your computer has been restored, and the money has been sent.",
    "Well then, got no choice, I gotta hack your bank account.",
    "Thank you very much, you are nice after all. I got the money, and you got a good computer.",
    "Ok fine, I'll just go hack someone else.",
    "Invalid input. Type 'yes' or 'no'."]


// Setze gameSection = 1 -> Start der Story; Variable speichert aktuellen Abschnitt des Spiels
let gameSection = 1; 


// Funktion welche den Output anzeigt
function updateOutput(message) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
}

// Funktion welche die Benutzereingabe verarbeitet
function processInput() {
    const inputElement = document.getElementById('input');
    const inputValue = inputElement.value.toLowerCase().trim();



    // Erster Teil
    if (gameSection === 1) {
        if (inputValue === "yes") {
            // wenn gameSection = 1 und "yes", dann zeige stories[1] und setze gameSection = 2
            updateOutput(stories[1]);
            gameSection = 2;
        } else if (inputValue === "no") {
            // sonst wenn gameSection = 1 und "no", dann zeige stories[2] und setze gameSection = 3
            updateOutput(stories[2]);
            gameSection = 3;
        } else {
            // sonst zeige stories[7]
            updateOutput(stories[7]);
        }


    // Zweiter Teil für "yes"
    } else if (gameSection === 2) {
        if (inputValue === "yes") {
            // wenn gameSection = 2 und "yes", dann zeige stories[3] an und setze gameSection = 0 -> Ende des Spiels
            updateOutput(stories[3]);
            gameSection = 0;
        } else if (inputValue === "no") {
            // wenn gameSection = 2 und "no", dann zeige stories[4] an und setze gameSection = 0 -> Ende des Spiels
            updateOutput(stories[4]);
            gameSection = 0;
        } else {
            // sonst zeige stories[7]
            updateOutput(stories[7]);
        }


    // Zweiter Teil für "no"
    } else if (gameSection === 3) {
        if (inputValue === "yes") {
            // wenn gameSection = 3 und "yes", dann zeige stories[5] an und setze gameSection = 0 -> Ende des Spiels
            updateOutput(stories[5]);
            gameSection = 0;
        } else if (inputValue === "no") {
            // wenn gameSection = 3 und "no", dann zeige stories[6] an und setze gameSection = 0 -> Ende des Spiels
            updateOutput(stories[6]);
            gameSection = 0;
        } else {
            // sonst zeige stories[7]
            updateOutput(stories[7]);
        }
    }

    inputElement.value = ""; // Eingabefeld leeren
}

// Zu Beginn zeige stories[0]
updateOutput(stories[0]);


