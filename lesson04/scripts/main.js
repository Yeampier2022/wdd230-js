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

  console.log(spotlights);
  const cards = document.querySelector(".directory-cards"); // select the output container element
  for (let j = 0; j < 3; j++) {
    console.log(spotlights[j]);
    let card = document.createElement("section");
    card.innerHTML = `
        <img src="${spotlights[j][0].imageURL}" alt="${spotlights[j][0].alt_text}">
        <p>${spotlights[j][0].name}</p>
        <p>${spotlights[j][0].streetAddress}</p>
        <p>${spotlights[j][0].cityStateZip}</p>
        <p><a href="${spotlights[j][0].websiteURL}">${spotlights[j][0].websiteURL}</a></p>
        `;
    cards.appendChild(card);
  }
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
