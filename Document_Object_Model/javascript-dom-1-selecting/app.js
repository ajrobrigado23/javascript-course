const h1 = document.querySelector("h1");

console.dir(h1);

// Modern way to get multiple elements
const listItemElements = document.getElementsByTagName("li");

for(let itemElement of listItemElements) {
    console.dir(itemElement);
}

// access to the last element
const lastItemElement = document.querySelector("li:last-of-type");
lastItemElement.textContent = "(Change!)";