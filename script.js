// Harry Potter Key:
//Scott.kutler@gmail.com
// $2a$10$2PGvzZtaIOQopUvoB2BIeOYR/PZjTNS0QL7GmjXSICBXNPN5qBxyS
//URL: https://www.potterapi.com/v1/

let responseObject = null;
let potterPhoto = document.querySelector(".photo");
let tabs = document.querySelectorAll(".tab");
let tab1 = tabs[0];
let tab2 = tabs[1];
let tab3 = tabs[2];
let tab4 = tabs[3];
let characterNameBox = document.querySelector("#name");

const baseUrl =
  "https://www.potterapi.com/v1/characters?key=$2a$10$2PGvzZtaIOQopUvoB2BIeOYR/PZjTNS0QL7GmjXSICBXNPN5qBxyS";

function randomizer() {
  let randomNumber = Math.floor(Math.random(100) * responseObject.length);
  console.log("random # = " + randomNumber);
  let randomCharacter = responseObject[randomNumber];
  console.log(randomCharacter);
  console.log("The random character is: " + randomCharacter.name);
  characterNameBox.textContent = randomCharacter.name;
}

function connectAPI() {
  fetch(baseUrl)
    .then(res => res.json())
    .then(res => {
      console.log(res);
      responseObject = res;
      randomizer();
    })
    .catch(err => console.log("oops something went wrong", err));
}

connectAPI();

tab1.addEventListener("click", harry);
tab2.addEventListener("click", hermione);
tab3.addEventListener("click", ron);
tab4.addEventListener("click", randomizer);

function harry() {
  potterPhoto.style.backgroundImage = "harry.png";
  characterNameBox.textContent = "Harry Potter";
}

function hermione() {
  potterPhoto.src = "hermione.png";
  characterNameBox.textContent = "Hermione Granger";
}

function ron() {
  potterPhoto.style.backgroundImage = "ron.png";
  characterNameBox.textContent = "Ron Weasley";
}
