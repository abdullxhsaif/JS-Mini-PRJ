const button = document.getElementById(`changeBtn`);

button.addEventListener(`click`, function() {
    const colours = [`red`,`blue`,`green`,`purple`,`orange`];
    const randomcolours = colours[Math.floor(Math.random() * colours.length)];
    document.body.style.backgroundColor = randomcolours;
} )