document.querySelector(".grandparent").addEventListener("click", () => {
    console.log("Grandparent clicked");
});

document.querySelector(".parent").addEventListener("click", () => {
    console.log("Parent clicked");
});

document.querySelector(".child").addEventListener("click", () => {
    console.log("Child clicked");
});



// Event Bubbling ka matlab hai:
// jab hum kisi inner element ko click karte hai, to event automatically uske parent aur grandparent tak upar ki taraf chala jata hai.



// Event Bubbling = Event ka niche se upar jaana (propogate krna) (child → parent → grandparent).