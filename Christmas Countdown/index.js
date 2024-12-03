const dayEl = document.getElementById("day")
hourEl = document.getElementById("hour")
minuteEL = document.getElementById("minute")
secondEl = document.getElementById("second")

christmasTime = new Date("25 Dec, 2024 00:00:00").getTime()

console.log(christmasTime);

updateCountdown()

function updateCountdown(){
    const now = new Date().getTime()
    gap = christmasTime - now
    console.log(gap)

    second = 1000
    minute = second * 60
    hour = minute * 60
    day = hour * 24

    d = Math.floor(gap/day)
    console.log(d)
    h = Math.floor((gap % day)/hour)
    console.log(h)
    m = Math.floor((gap % hour)/minute)
    console.log(m)
    s = Math.floor((gap % minute)/second)
    console.log(s)

    dayEl.innerText = d
    hourEl.innerText = h
    minuteEL.innerText = m
    secondEl.innerText = s

    setTimeout(updateCountdown, 1000)
}
