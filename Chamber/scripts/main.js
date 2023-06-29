function toggleMenu() {
  document.querySelector("#navbar").classList.toggle("menu-active");
  document.querySelector("#menu-closed").classList.toggle("menu-active");
  document.querySelector("#menu-open").classList.toggle("menu-active");
}

document.querySelector("#hamburger-menu").addEventListener("click", toggleMenu);

var messagedate = new Date();
if (messagedate.getDay() == 1 || messagedate.getDay() == 2) {
  document.querySelector("#greet").classList.add("active");
}

const businessDataUrl = "./data/buisness.json";
function displaySpotlights(businessList) {
  businessList = businessList.filter(
    (x) => x.membershipLevel == "gold" || x.membershipLevel == "silver"
  );
  spotlights = [];
  for (let i = 0; i < 3; i++) {
    var elt = Math.floor(Math.random() * businessList.length);
    spotlights.push(businessList.splice(elt, 1));
  }

  const cards = document.querySelector(".directory-cards"); // select the output container element

  function createCard(spotlight) {
    const card = document.createElement("section");
    card.classList.add("card");
    card.innerHTML = `
    <img src="${spotlight.imageURL}" alt="${spotlight.alt_text}">
    <p>${spotlight.name}</p>
    <p>${spotlight.streetAddress}</p>
    <p>${spotlight.cityStateZip}</p>
    <p><a href="${spotlight.websiteURL}">${spotlight.websiteURL}</a></p>
  `;
    return card;
  }

  function showCards(spotlights) {
    cards.innerHTML = "";

    if (window.innerWidth >= 900) {
      for (let i = 0; i < 3; i++) {
        const card = createCard(spotlights[i][0]);
        cards.appendChild(card);
      }
    }
    else {
      for (let i = 0; i < 2; i++) {
        const card = createCard(spotlights[i][0]);
        cards.appendChild(card);

      
      }
    }
  }

  showCards(spotlights);
}

async function getBusinessData() {
  const response = await fetch(businessDataUrl);
  if (response.ok) {
    const data = await response.json();
    displaySpotlights(data.businesses);
  } else {
    console.error("There was an error loading the data.");
  }
}

getBusinessData();
