let count = 0;      // kitni baar function call hua
let waiting = false; // throttle ka switch (ON/OFF)

function handleScroll() {
    if (waiting === false) {

        count++;
        document.getElementById("count").innerText = count;

        waiting = true;

        setTimeout(() => {
            waiting = false;
        }, 5000);    // 1 second me sirf 1 hi baar
    }
}

window.addEventListener("scroll", handleScroll);




// Throttling → ek fixed time (e.g., 1 second) me function sirf 1 baar chale, chahe event kitni hi baar aaye.
