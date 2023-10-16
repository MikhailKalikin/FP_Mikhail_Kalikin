const body = document.body.style;
const palinSubmit = document.getElementById("palinSubmit");
const showResult = document.getElementById("showResult");
const palinCheck = document.getElementById("palinCheck");
let testWord = ["b", "b", "o", "o", "b", "b"];
let palinTests = [
    testWord,
    ["e", "e", "r", "e", "e"],
    ["g", "k", "w", "i", "u", "y", "t"],
    "baaaabr",
    [0,3,4,4,3,0],
    7778889888777,
    54546546666677,
    "049355",
    "",
    [],
    // {}   // uncomment for custom error to throw when this submission is reached
];
let i = 0;

// Palindrome function. Checks if any string, array, or number is a palindrome:

function palin (possiblePalin) {    
    'use strict';
    try {
        if (possiblePalin == {}) throw `This is a/an ${possiblePalin}. Please try again with a filled array, string, or a number`;
    }
    catch(err) {
        showResult.innerHTML = err;
        body.backgroundColor = "yellow";
    }
    if (Array.isArray(possiblePalin) && possiblePalin.length !== 0) {
        let word = possiblePalin;
        let wordHalfLength = Math.floor(word.length / 2);
        let firstHalf = word.slice(0, wordHalfLength);
        let secondHalf = word.slice(wordHalfLength, word.length);
        let reverseSecondHalf = secondHalf.reverse();
        console.log(wordHalfLength); // logs out stages of the operation, so. . .
        console.log(firstHalf); // . . .these line are not. . .
        console.log(reverseSecondHalf); // . . .necessary for the end result
            if (firstHalf.join() == reverseSecondHalf.join()) {
                console.log(`${word.join("")} IS a palindrome.`);
                showResult.innerHTML = `${word.join("")} palindrome.`;
                body.backgroundColor = "green";             
            } else if (firstHalf.join() != reverseSecondHalf.join()) {
                reverseSecondHalf.pop();
                    if (firstHalf.join() == reverseSecondHalf.join()) {
                    console.log(`${word.join("")} palindrome.`);
                    showResult.innerHTML = `${word.join("")} IS a palindrome.`;
                    body.backgroundColor = "green";                    
                    } else {
                    console.log(`${word.join("")} Не палидром.`);
                    showResult.innerHTML = `${word.join("")} is NOT a palindrome.`;
                    body.backgroundColor = "red";                    
                    }
            }            
    } else if (!Array.isArray(possiblePalin) && typeof possiblePalin !== "number" && possiblePalin.length !== 0) {
        possiblePalin.trim();
        let word = Array.from(possiblePalin.toLowerCase());
        let wordHalfLength = Math.floor(word.length / 2);
        let firstHalf = word.slice(0, wordHalfLength);
        let secondHalf = word.slice(wordHalfLength, word.length);
        let reverseSecondHalf = secondHalf.reverse();  
            console.log(wordHalfLength); // logs out stages of the operation, so. . .
        console.log(firstHalf); // . . .these line are not. . .
        console.log(reverseSecondHalf); // . . .necessary for the end result
            if (firstHalf.join() == reverseSecondHalf.join()) {
                console.log(`${word.join("")} palindrome.`);
                showResult.innerHTML = `${word.join("")} palindrome.`;
                body.backgroundColor = "green";               
            } else if (firstHalf.join() != reverseSecondHalf.join()) {
                reverseSecondHalf.pop();
                    if (firstHalf.join() == reverseSecondHalf.join()) {
                    console.log(`${word.join("")} palindrome.`);
                    showResult.innerHTML = `${word.join("")} palindrome.`;
                    body.backgroundColor = "green";  
                    } else {
                    console.log(`${word.join("")} Not palindrome.`);
                    showResult.innerHTML = `${word.join("")} Not palindrome.`;
                    body.backgroundColor = "red";                   
                    }
            }           
    } else if (typeof possiblePalin === "number" && possiblePalin.length !== 0) {
        let toString = possiblePalin.toString()
        let word = Array.from(toString);
        let wordHalfLength = Math.floor(word.length / 2);
        let firstHalf = word.slice(0, wordHalfLength);
        let secondHalf = word.slice(wordHalfLength, word.length);
        let reverseSecondHalf = secondHalf.reverse();  
            console.log(wordHalfLength); // logs out stages of the operation, so. . .
        console.log(firstHalf); // . . .these line are not. . .
        console.log(reverseSecondHalf); // . . .necessary for the end result
            if (firstHalf.join() == reverseSecondHalf.join()) {
                console.log(`${word.join("")}  palindrome.`);
                showResult.innerHTML = `${word.join("")} palindrome.`;
                body.backgroundColor = "green";                
            } else if (firstHalf.join() != reverseSecondHalf.join()) {
                reverseSecondHalf.pop();
                    if (firstHalf.join() == reverseSecondHalf.join()) {
                    console.log(`${word.join("")} IS a palindrome.`);
                    showResult.innerHTML = `${word.join("")} palindrome.`;
                    body.backgroundColor = "green";                   
                    } else {
                    console.log(`${word.join("")} is NOT a palindrome.`);
                    showResult.innerHTML = `${word.join("")} Not palindrome.`;
                    body.backgroundColor = "red";
                    }
            }    
    } else {
        showResult.innerHTML = `Пустое значение. Пожалуйста, повторите попытку с заполненным массивом, строкой или числом.`;
        body.backgroundColor = "yellow";
    }
}

// add click event where every time the button is clicked:
// - an item from the array palinTests is processed through function palin()
// - the next item in the array will be processed the next time the button is clicked
// - the input position on the list resets to the beginning of the list once all items on the list have been processed once

/* function palinTestIter() {
if (i < palinTests.length) {
        palin(palinTests[i]);
        return i++;
    } else {
        showResult.innerHTML = "End of tests; resetting to first test.";
        return i = 0;
    }
}
palinSubmit.addEventListener("click", palinTestIter); */

//takes in user input and feeds it through the palindrome checker function, palin()

palinSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    if (palinCheck !== "") {
        palin(palinCheck.value);
    }
})
