function fetchJoke() {
    fetch("https://icanhazdadjoke.com/slack")
        .then((data) => data.json())
        .then((jokeData) => {
            const jokeText = jokeData.attachments[0].text;
            const jokeElement = document.getElementById("joke_element");

            jokeElement.innerHTML = jokeText;
        });
}

document.body.addEventListener("click", fetchJoke);

fetchJoke();
