let age = 0;
let hunger = 1;
let boredom = 1;
let sleepiness = 1;



const currentImage = $(".currentImage");
const currentTitle = $(".currentTitle");
// Increase petAge
// setInterval(updateTimer, 1000);
const increaseAge = () => {
    age++;
    $("#petAge").text('Age: ' + age);

    // Changing Current Image
    if (age === 10) {
        currentTitle.text('Stage 2: Charmeleon');
        currentImage.attr("src", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fusercontent2.hubstatic.com%2F13811955_f1024.jpg&f=1&nofb=1");
    }
    if (age === 20) {
        currentTitle.text('Stage 3: Charizard');
        currentImage.attr("src", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette2.wikia.nocookie.net%2Fsonicpokemon%2Fimages%2Fb%2Fbf%2FCharizard_AG_anime.png%2Frevision%2Flatest%3Fcb%3D20130714192025&f=1&nofb=1");
    }
}





// Increase petStats to reflect growing hunger,boredom,and sleepiness.
const increaseHunger = () => {
    // console.log("this function will increase stats incrementally every 10 seconds until the hunger is 10");
    hunger++;
    $("#hungerStat").text('Hunger: ' + hunger);
    if (hunger === 10) {
        alert("Your dino has ran away. You will never see them again. Refresh the page to restart the game.");
    }
}
const increaseBoredom = () => {
    // console.log("this function will increase stats incrementally every 10 seconds until the boredom is 10");
    boredom++;
    $("#boredomStat").text('Boredom: ' + boredom);
    if (boredom === 10) {
        alert("Your dino has ran away. You will never see them again. Refresh the page to restart the game.");
    }
}
const increaseSleepiness = () => {
    // console.log("this function will increase stats incrementally every 10 seconds until the sleepiness is 10");
    sleepiness++;
    $("#sleepinessStat").text('Sleepiness: ' + sleepiness);
    if (sleepiness === 10) {
        alert("Your dino has ran away. You will never see them again. Refresh the page to restart the game.");
    }
}




// Start Button
const startButton = $(".startButton");
startButton.on("click", () => {
    increaseAge();
	increaseHunger();
    increaseBoredom();
    increaseSleepiness();
    setInterval(increaseAge, 500);
	setInterval(increaseHunger, 1000);
    setInterval(increaseBoredom, 1000);
    setInterval(increaseSleepiness, 1000);
});


// Feed, play, lights off buttons
const feed = $(".feed");
feed.on("click", (event) =>{
    hunger--;
});

const play = $(".play");
play.on("click", (event) =>{
    boredom--;
});

const lightsOff = $(".lightsOff");
lightsOff.on("click", (event) =>{
    sleepiness--;
});



