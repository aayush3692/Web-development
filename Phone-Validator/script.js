const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const output = document.querySelector(".output");

function validatePhone(number) {
    const regexNumber = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;

    return regexNumber.test(number);
}

checkBtn.addEventListener("click", () => {
    const input = userInput.value;

    if (input === "") {
        alert("Please provide a phone number");
    }
    if (validatePhone(input)) {
        output.innerHTML = `Valid US number: ${input}`;
    } else {
        output.innerHTML = `Invalid US number: ${input}`;
    }

    output.classList.remove("hidden");

});
clearBtn.addEventListener("click", () => {
    userInput.value = "";
    output.innerHTML = "";
    output.classList.add("hidden");
});