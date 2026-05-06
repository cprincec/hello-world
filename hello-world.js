const mainElement = document.getElementById("main");
let countDownValue = 3;

// Countdown
function playCountDown() {
    const intervalId = setInterval(() => {
        if (countDownValue <= 0) {
            mainElement.classList.add("pop");
            mainElement.textContent = "Hello World!";
            clearInterval(intervalId);

            return;
        }

        mainElement.textContent = countDownValue;
        mainElement.classList.add("pop");

        setTimeout(() => {
            mainElement.classList.remove("pop");
        }, 400);

        countDownValue--;
    }, 1000);
}

playCountDown();
