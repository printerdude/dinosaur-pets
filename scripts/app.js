let hunger = 1;

// Increase petStats to reflect growing hunger,boredom,and sleepiness.
// const hungerStat = $(".hungerStat");

const increaseHunger = () => {
    // console.log("this function will increase stats incrementally every 10 seconds until the hunger is 10");
    hunger++;
    $("#hungerStat").text('Hunger: ' + hunger);
    if (hunger === 10) {
        console.log("Your dino has ran away. You will never see them again.");
    }

}



// Increase petAge
// setInterval(updateTimer, 1000);



// Start Button
const startButton = $(".startButton");
startButton.on("click", () => {
	console.log('It worked!!!!');
	// Call createSquares
	increaseHunger();
	setInterval(increaseHunger, 1000);
});




