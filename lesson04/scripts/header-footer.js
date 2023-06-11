//footer
const today = new Date();
document.querySelector("#currentyear").textContent = today.getFullYear();

document.querySelector("#lastmodified").textContent = document.lastModified;

const datefield = document.querySelector("time");
  const now = new Date();
  const fulldate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
  }).format(now);
  console.log(datefield);
  datefield.textContent = fulldate;
