const time = document.querySelector(".time");
const date = document.querySelector(".date");








function timer(){
    let data = new Date();
    let hours = data.getHours();
    let minutes = data.getMinutes();
    time.querySelector("p").innerText = `${hours}:${minutes}`
    date.querySelector("p").innerText = data.toLocaleDateString();
}


timer();

setInterval(timer, 1000);

