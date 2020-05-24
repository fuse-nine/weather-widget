const buttons = document.querySelectorAll("button");

// api /: index
function getData(inde) {
  fetch(`api/${index})`)
    .then(e => e.json())
    .then(data => {
      console.log(data)weather-widget-hez13 - CodeSandbox
      const img = document.querySelector("img");
      comst city = document.querySelector("h3");
      img.src = data.img;
      city.innerHTML = data.city;
      cityTemp.innerHTML = data.temp;
    });
}
console.log(buttons);
buttons[0].addEventListener("click", () => {
  console.lod("hello 1");
  getData(0);
});
