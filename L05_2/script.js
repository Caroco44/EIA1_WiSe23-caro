
let myArray = ["hello ur computer has virus, u want me to help? yes or no",
    "Ok, first, you agree to send me 500dollars? Yes or no",
    "Ok thank you, ur computer has been restored, the money has been send.",
    "well then, got no choice, I gotta hack ur bank account",
    "What do you mean no. For being rude u owe me 500dollars. Will u give it to me? Yes or no",
    "Thank you very much, u are nice after all. I got the money and you got good compi",
    "Ok fine, ill just go hack someone else"
]

function VirusAttack() {
    const text1 = prompt(myArray[0]);

    // Variable zum Speichern des Ergebnisses der Benutzerinteraktionen
    let result;

    if (text1 == "yes") {
        // Bei ja, wird Array 1 angezeigt
        const text2 = prompt(myArray[1]);

        if (text2 == "yes") {
            result = prompt(myArray[2]);
        } else {
            result = prompt(myArray[3]);
        }
    } else if (text1 == "no") {
        // Bei nein, wird Array 4 angezeigt
        const text2 = prompt(myArray[4]);

        if (text2 == "yes") {
            result = prompt(myArray[5]);
        } else {
            result = prompt(myArray[6]);
        }
    }

    // Ergebnis wird in console ausgegeben
    console.log(result);
    // Ergebnis wird zurückgegeben
    return result;
}

// Die Funktion wird aufgerufen
VirusAttack();