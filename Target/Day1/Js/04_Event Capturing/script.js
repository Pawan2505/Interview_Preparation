document.querySelector(".grandparent").addEventListener("click", () => {
    console.log("Grandparent Captured");
}, true);   // <-- capturing enabled

document.querySelector(".parent").addEventListener("click", () => {
    console.log("Parent Captured");
}, true);

document.querySelector(".child").addEventListener("click", () => {
    console.log("Child Captured");
}, true);



// Yahan main capturing ko ON kar raha hoon by passing true as 3rd argument.

// Event Capturing is the phase where the event travels from the root (top element) down to the target element.