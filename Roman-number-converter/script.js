const numberEl = document.getElementById("number");
const buttonEl = document.getElementById("convert-btn");
const output = document.querySelector(".output");

function convertToRoman(num){
    const romanNumerals = [
        {value: 1000, symbol:"M"},
        {value: 900, symbol:"CM"},
        {value: 500, symbol:"D"},
        {value: 400, symbol:"CD"},
        {value: 100, symbol:"C"},
        {value: 90, symbol:"XC"},
        {value: 50, symbol:"L"},
        {value: 40, symbol:"XL"},
        {value: 10, symbol:"X"},
        {value: 9, symbol:"IX"},
        {value: 5, symbol:"V"},
        {value: 4, symbol:"IV"},
        {value: 1, symbol:"I"},
    ];
    let results="";

    for(let i = 0; i < romanNumerals.length; i++){
        while(num >= romanNumerals[i].value){
            results += romanNumerals[i].symbol;
            num -= romanNumerals[i].value;
        }
    }

    return results;
}

buttonEl.addEventListener("click",()=>{
    const inputText = numberEl.value;
    const result = convertToRoman(inputText);

    if(inputText === ""){
        output.innerHTML  = "Please enter a valid number";
    } else if (inputText < 1){
        output.innerHTML  = "Please enter a number greater than or equal to 1";
    } else if(inputText > 3999){
        output.innerHTML  = "Please enter a number less than or equal to 3999";
        
    } else {
        output.innerHTML = result;
    }
    output.classList.remove("hidden");


})