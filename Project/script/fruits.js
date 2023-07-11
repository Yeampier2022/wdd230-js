// open the fruits.json file and create a select option for each fruit

document.addEventListener("DOMContentLoaded", () => {
  let selects = document.querySelectorAll("select");
  fetch("./json/fruits.json").then((data) =>
    data.json().then((data) => {
      selects.forEach((select) => {
        data.forEach((fruit) => {
          let option = document.createElement("option");
          option.value = fruit.name;
          option.innerText = fruit.name;
          select.appendChild(option);
        });
      });
    })
  );

  // when the form is submitted, create a new element for each input and append it to the result div

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
    date.innerText = `Order placed on: ${dateObj.getDate()}/${
      dateObj.getMonth() + 1
    }/${dateObj.getFullYear()}`;
    console.log(date);
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
