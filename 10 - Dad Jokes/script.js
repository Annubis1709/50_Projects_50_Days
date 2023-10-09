const jokeElement = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

const generateJoke = async () => {
    try {
        const response = await fetch('https://icanhazdadjoke.com', {
            headers: {
                Accept: 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error("Couldn't get the joke");
        }

        const data = await response.json();
        jokeElement.innerHTML = data.joke;
    } catch (error) {
        console.error(error);
    }
}

jokeBtn.addEventListener('click', generateJoke);
generateJoke();