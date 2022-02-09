let hunger = 1;
let boredom = 1;
let sleepiness = 1;

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



// Increase petAge
// setInterval(updateTimer, 1000);



// Start Button
const startButton = $(".startButton");
startButton.on("click", () => {
	increaseHunger();
    increaseBoredom();
    increaseSleepiness();
	setInterval(increaseHunger, 1000);
    setInterval(increaseBoredom, 1000);
    setInterval(increaseSleepiness, 1000);
});




