document.addEventListener("DOMContentLoaded", () => {
  // Fetch select
  let selects = document.querySelectorAll("select");
  // Fetch json data
  fetch("./json/fruits.json").then((data) =>
    data.json().then((data) => {
      // Create options for every select
      selects.forEach((select) => {
        // Iterate every fruit
        data.forEach((fruit) => {
          // Create option
          let option = document.createElement("option");
          option.value = fruit.name;
          option.innerText = fruit.name;
          // Append to every select
          select.appendChild(option);
        });
      });
    })
  );

  const dateObj = new Date();
  const lastModified = document.querySelector("#lastModified");
  const fullYear = document.querySelector("#footer-info p:first-child");

  lastModified.innerText = `Last modified: ${document.lastModified}`;

  const index = fullYear.innerText.indexOf("©");
  const str = fullYear.innerText
    .slice(0, index + 1)
    .concat(dateObj.getFullYear());
  fullYear.innerText = str.concat(fullYear.innerText.slice(index + 1));

  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    let res = document.querySelector("#form-result");
    let name = document.createElement("h2");
    name.innerText = document.querySelector("#first-name").value;
    res.append(name);
    let email = document.createElement("p");
    email.innerText = `Email: ${document.querySelector("#email").value}`;
    res.append(email);
    let number = document.createElement("p");
    number.innerText = `Phone number: ${
      document.querySelector("#phone").value
    }`;
    res.append(number);
    let ulHeading = document.createElement("h3");
    ulHeading.innerText = "Selected fruits";
    res.append(ulHeading);
    let fruitsList = document.createElement("ul");
    let fruits = [];
    selects.forEach((select) => {
      let fruit = document.createElement("li");
      fruit.innerText = select.value;
      fruitsList.append(fruit);
      fruits.push(fruit.innerText);
    });
    res.append(fruitsList);
    let instructions = document.createElement("p");
    instructions.innerText = `Other instructions:\n${
      document.querySelector("textarea").value
    }`;
    res.append(instructions);
    const dateObj = new Date();
    let date = document.createElement("p");
    date.innerText = `Order placed on: ${dateObj.getDate()}/${dateObj.getMonth()}/${dateObj.getFullYear()}`;
    res.append(date);
    let info = document.createElement("ul");
    let infoHeading = document.createElement("h3");
    res.append(infoHeading);
    fetch("./json/fruits.json").then((data) =>
      data.json().then((data) => {
        let nutritions = data
          .filter((fruit) => {
            return fruits.includes(fruit.name);
          })
          .map((fruit) => {
            return fruit.nutritions;
          });
        Object.keys(nutritions[0]).forEach((key) => {
          let value = 0;
          nutritions.forEach((nutrition) => {
            value += nutrition[key];
          });
          let li = document.createElement("li");
          li.innerText = `${key}: ${value.toFixed(2)}`;
          info.append(li);
        });
        res.append(info);
      })
    );
  });
});
