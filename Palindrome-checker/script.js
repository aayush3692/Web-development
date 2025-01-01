const word = document.getElementById("text-input");
const checkBtn = document.querySelector(".palindrome-btn");
const results = document.querySelector(".results-div");


checkBtn.addEventListener("click", ()=>{
    const inputText = word.value; // Get input value
    if(inputText === ""){
        alert("Please input a character");
    }
    const cleanedText = inputText.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(); // Remove non-alphanumeric characters and convert to lowercase
    const reversedText = cleanedText.split('').reverse().join(''); // Reverse the cleaned text

    if (cleanedText === reversedText) {
        results.innerHTML = `${inputText} is a palindrome`;
    } else {
        results.innerHTML = `${inputText} is not a palindrome`;
    }

    results.classList.remove("hidden");
    
})