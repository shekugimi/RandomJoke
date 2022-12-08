const joke = document.querySelector(".joke");
const btn = document.querySelector(".jokeBtn");

let getJoke = () => {
    fetch("https://v2.jokeapi.dev/joke/Any")
        .then(data => data.json())
        .then(item => {
            if (item.joke == undefined) {
                getJoke();
            } else {
                joke.innerHTML = `${item.joke}`;
            }
        })
        .catch(err => console.log(err));
}

btn.addEventListener('click', getJoke);
getJoke();
