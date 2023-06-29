const url =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

let prophets = [];

async function getProphetData() {
  const response = await fetch(url);
  data = await response.json();
  prophets = data.prophets;
  displayProphets(prophets);
}
getProphetData();

const displayProphets = (prophets) => {
  const cards = document.querySelector("div.cards");

  cards.innerHTML = "";

  prophets.forEach((prophet) => {
    let card = document.createElement("section");
    let h2 = document.createElement("h2");

    let birthdate = document.createElement("p");
    let place = document.createElement("p");
    let children = document.createElement("p");
    let death = document.createElement("p");
    let length = document.createElement("p");
    let age = document.createElement("p");

    let imagesPropht = document.createElement("img");

    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    birthdate.textContent = `Birth: ${prophet.birthdate}`;
    place.textContent = `Place: ${prophet.birthplace}`;
    children.textContent = `Children: ${prophet.numofchildren}`;
    death.textContent = `Death: ${prophet.death}`;
    length.textContent = `Prophet Years: ${prophet.length}`;

    let birthDate = new Date(prophet.birthdate);
    let deathDate = prophet.death ? new Date(prophet.death) : new Date();
    let ageInMs = deathDate - birthDate;
    let ageInYears = Math.floor(ageInMs / (365 * 24 * 60 * 60 * 1000));
    age.textContent = `Age: ${ageInYears}`;

    imagesPropht.setAttribute("src", prophet.imageurl);

    imagesPropht.setAttribute(
      "alt",
      `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order} Latter-day President`
    );

    card.appendChild(h2);
    card.appendChild(birthdate);
    card.appendChild(place);
    card.appendChild(children);
    card.appendChild(length);
    card.appendChild(death);
    card.appendChild(age);

    card.appendChild(imagesPropht);

    cards.appendChild(card);
  });
};

function displayTable(prophets) {
  const table = document.querySelector("table");

  table.innerHTML = "";

  prophets.forEach((prophet) => {
    let tr = document.createElement("tr");
    let td_name = document.createElement("td");
    let td_birthplace = document.createElement("td");
    let td_birthdate = document.createElement("td");

    td_name.textContent = `${prophet.name} ${prophet.lastname}`;
    td_birthplace.textContent = prophet.birthplace;
    td_birthdate.textContent = prophet.birthdate;

    tr.appendChild(td_name);
    tr.appendChild(td_birthplace);
    tr.appendChild(td_birthdate);

    table.appendChild(tr);
  });
}

function filterProphets() {
  const cards = document.querySelector("div.cards");

  cards.innerHTML = "";

  const filteredProphets = prophets.filter((prophet) => {
    return prophet.length >= 10;
  });

  displayProphets(filteredProphets);
}
