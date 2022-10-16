// Boburshoh Khusanov
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
  console.log(
    fetch("https://jsonplaceholder.typicode.com/photos").then((malumot) =>
      malumot.json()
    )
  );
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((malumot) => malumot.json())
    .then((malumot2) => {
      malumot2.forEach((person) => {
        const pEl = document.createElement("img"),
          row = document.querySelector(".row");

        pEl.src = person.url;
        pEl.className = "imgApi";
        row.appendChild(pEl);
      });
    });
});