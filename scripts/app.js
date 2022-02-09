let age = 0;
let hunger = 1;
let boredom = 1;
let sleepiness = 1;




// Increase petAge
// setInterval(updateTimer, 1000);
const increaseAge = () => {
    age++;
    $("#petAge").text('Age: ' + age);
    }


// Increase petStats to reflect growing hunger,boredom,and sleepiness.
const increaseHunger = () => {
    // console.log("this function will increase stats incrementally every 10 seconds until the hunger is 10");
    hunger++;
    $("#hungerStat").text('Hunger: ' + hunger);
    if (hunger === 10) {
        console.log("Your dino has ran away. You will never see them again.");
    }
}
const increaseBoredom = () => {
    // console.log("this function will increase stats incrementally every 10 seconds until the boredom is 10");
    boredom++;
    $("#boredomStat").text('Boredom: ' + boredom);
    if (boredom === 10) {
        console.log("Your dino has ran away. You will never see them again.");
    }
}
const increaseSleepiness = () => {
    // console.log("this function will increase stats incrementally every 10 seconds until the sleepiness is 10");
    sleepiness++;
    $("#sleepinessStat").text('Sleepiness: ' + sleepiness);
    if (sleepiness === 10) {
        console.log("Your dino has ran away. You will never see them again.");
    }
}




// Start Button
const startButton = $(".startButton");
startButton.on("click", () => {
    increaseAge();
	increaseHunger();
    increaseBoredom();
    increaseSleepiness();
    setInterval(increaseAge, 1000);
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


