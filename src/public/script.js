function appData(index) {
  fetch(`/api/${index}/`)
    .then(e => e.json())
    .then(function(data) {
      console.log(data);
      document.querySelector("h3").innerText = data.city;
      document.querySelector("span").innerText = data.temp;
      document.querySelector("img").src = data.img;
    })
    .catch();
}

const buttons = document.querySelectorAll("button");

buttons[0].addEventListener("click", function() {
  appData(0);
});

buttons[1].addEventListener("click", function() {
  appData(1);
});

buttons[2].addEventListener("click", function() {
  appData(2);
});

/*
function appData(index) {
  fetch(`/api/${index}/`)h
    .then(e => e.json())
    .then(function(data) {
      console.log(data);
      document.querySelector("h3").innerText = data.city;
      document.querySelector("span").innerText = data.temp;
      document.querySelector("img").src = data.img;
    })
    .catsh();
}

*/

/*
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
*/
