const marvelCharacters = [
    { name: "Wolverine", team: "X-Men", release: "November 1974" },
    { name: "Magneto", team: "X-men", release: "September 1963" },
    { name: "Cyclops", team: "X-Men", release: "September 1963" },
    { name: "Beast", team: "X-Men", release: "September 1963" },
    { name: "Angel", team: "X-Men", release: "September 1963" },
    { name: "Havok", team: "X-Men", release: "March 1969" },
    { name: "Jean Gray", team: "X-Men", release: "September 1963" },
    { name: "Iceman", team: "X-Men", release: "September 1963" },
    { name: "Thor", team: "Avengers", release: "August 1962" },
    { name: "Wasp", team: "Avengers", release: "September 1963" },
    { name: "Ant-Man", team: "Avengers", release: "September 1963" },
    { name: "Hawkeye", team: "Avengers", release: "September 1964" },
    { name: "Quicksilver", team: "Avengers", release: "March 1964" },
    { name: "Scarlet Witch", team: "Avengers", release: "March 1964" },
    { name: "Iron Man", team: "Avengers", release: "March 1963" },
    { name: "Captain America", team: "Avengers", release: "March 1941" },
    { name: "Spiderman", team: "Avengers", release: "August 1962" },
    { name: "Hulk", team: "Avengers", release: "May 1962" },
    { name: "Deadpool", team: "X-Force ", release: "February 1991" },
];

// Sort characters by release date using Date constructor
marvelCharacters.sort((a, b) => new Date(b.release) - new Date(a.release));

const characters = document.getElementById("characters");

marvelCharacters.forEach(character => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${character.name}</td><td>${character.team}</td><td>${character.release}</td>`;
    characters.appendChild(row);
});
  
function printTable() {
    const characters = document.getElementById("characters");
    characters.innerHTML = "";
    marvelCharacters.forEach(character => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${character.name}</td><td>${character.team}</td><td>${character.release}</td>`;
        characters.appendChild(row);
    });
}

// Button function (reverse order of characters)
function reverseOrder() {
    marvelCharacters.reverse();
    printTable();
  }