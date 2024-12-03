const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const result = document.getElementById("result");

function calculateAge() {
    const birthdayValue = birthdayEl.value;
    if (birthdayValue === "") {
        alert("empty value");
    } else {
        const age = getAge(birthdayValue);
        result.innerText = `Your age is ${age} ${age > 1? "years" : "year"} old`;
    }
}

function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);

    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();
    
    // Adjust age if birthday hasn't occurred yet this year
    if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
        age--;
    }

    return age;
}

// Add event listener correctly (without calling the function)
btnEl.addEventListener("click", calculateAge);
