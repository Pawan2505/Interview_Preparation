const suggestionsDiv = document.getElementById("suggestions");

// API Function
async function searchUsers(query) {
    if (!query) {
        suggestionsDiv.innerHTML = "";
        return;
    }

    const response = await fetch(`https://api.github.com/search/users?q=${query}`);
    const data = await response.json();

    showSuggestions(data.items);
}

// Show Suggestions
function showSuggestions(users) {
    suggestionsDiv.innerHTML = "";

    users.slice(0, 10).forEach(user => {
        const div = document.createElement("div");
        div.classList.add("suggestion-item");

        div.innerHTML = `
            <img src="${user.avatar_url}" width="30"
            style="vertical-align: middle; border-radius:50%; margin-right:10px;">
            ${user.login}
        `;

        div.onclick = () => {
            document.getElementById("searchBox").value = user.login;
            suggestionsDiv.innerHTML = "";
        };

        suggestionsDiv.appendChild(div);
    });
}

// Debounce Function
function debounce(func, delay) {
    let timer;
    return function () {
        const context = this;
        const args = arguments;

        clearTimeout(timer);

        timer = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}

// Create Debounced API Function
const debouncedSearch = debounce(() => {
    const query = document.getElementById("searchBox").value;
    searchUsers(query);
}, 500);



// Debouncing ek technique hai jisme function tabhi run hota hai jab user kuch time tak action karna stop kar deta hai.
// Matlab user type karta rahe to function baar-baar nahi chalega;
// function sirf tab chalega jab user typing ruk jaye (e.g., 300ms ke baad)



// Debouncing = User rukne ke baad hi function chalana.
