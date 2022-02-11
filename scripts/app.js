let age = 0;
let hunger = 1;
let boredom = 1;
let sleepiness = 1;


// Increase petAge
// setInterval(updateTimer, 1000);
// Change Pet Images to reflect evolution

const currentImage = $(".currentImage");
const currentTitle = $(".currentTitle");

const increaseAge = () => {
    age++;
    $("#petAge").text('Age: ' + age);
    // Changing Current Image
    if (age === 10) {
        currentTitle.text('2nd Evolution');
        currentImage.attr("src", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fusercontent2.hubstatic.com%2F13811955_f1024.jpg&f=1&nofb=1");
    }
    if (age === 20) {
        currentTitle.text('Final Evolution');
        currentImage.attr("src", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette2.wikia.nocookie.net%2Fsonicpokemon%2Fimages%2Fb%2Fbf%2FCharizard_AG_anime.png%2Frevision%2Flatest%3Fcb%3D20130714192025&f=1&nofb=1");
        clearInterval(ageTimer);
    }
}


// Increase petStats to reflect growing hunger,boredom,and sleepiness.

const increaseHunger = () => {
    hunger++;
    $("#hungerStat").text('Hunger: ' + hunger);
    if (hunger < 1) {
        hunger = 1; 
    }
    if (hunger === 10) {
        alert("Your dino has ran away. You will never see them again, unless you try again.");
        clearInterval(ageTimer);
        clearInterval(hungerTimer);
        clearInterval(boredomTimer);
        clearInterval(sleepinessTimer);
    }
}

const increaseBoredom = () => {;
    boredom++;
    $("#boredomStat").text('Boredom: ' + boredom);
    if (boredom < 1) {
        boredom = 1; 
    }
    if (boredom === 10) {
        alert("Your dino has ran away. You will never see them again, unless you try again.");
        clearInterval(ageTimer);
        clearInterval(hungerTimer);
        clearInterval(boredomTimer);
        clearInterval(sleepinessTimer);
    }
}

const increaseSleepiness = () => {
    sleepiness++;
    $("#sleepinessStat").text('Sleepiness: ' + sleepiness);
    if (sleepiness < 1) {
        sleepiness = 1; 
    }
    if (sleepiness === 10) {
        alert("Your dino has ran away. You will never see them again, unless you try again.");
        clearInterval(ageTimer);
        clearInterval(hungerTimer);
        clearInterval(boredomTimer);
        clearInterval(sleepinessTimer);
    }
}




// Start Button

let ageTimer;
let hungerTimer;
let boredomTimer;
let sleepinessTimer;

const startButton = $(".startButton");
startButton.on("click", () => {
    increaseAge();
	increaseHunger();
    increaseBoredom();
    increaseSleepiness();
    ageTimer = setInterval(increaseAge, 3000);
	hungerTimer = setInterval(increaseHunger, 3000);
    boredomTimer = setInterval(increaseBoredom, 3000);
    sleepinessTimer = setInterval(increaseSleepiness, 3000);
});


// Feed, play, lights off buttons for User Action

const feed = $("#feed");
feed.on("click", (event) => {
    hunger--;
});

const play = $("#play");
play.on("click", (event) => {
    boredom--;
});

const lightsOff = $("#lightsOff");
lightsOff.on("click", (event) => {
    sleepiness--;
});


// Giving Name to Pet

document.querySelector("#nameButton").addEventListener("click", function(event){
// preventDefault 
    // this will revent the default submission of a form
    event.preventDefault();
  
    // this will stop the parent event trigger 
    event.stopPropagation();
  
    // get user input
    const userInput = document.querySelector("#nameInput").value;
  
    // create an element 
    const newName = $("#petNameDisplay");
    newName.text(userInput);
  
    document.querySelector("#nameInput").value = "";
  });


//   Restart button

const restartButton = $(".restartButton");
restartButton.on("click", () => {
    location.reload();
});