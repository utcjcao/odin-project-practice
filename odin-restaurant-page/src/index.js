import "./restaurant.css";
import fish from "./images/fish.png";
import beef from "./images/beef.png";
import chicken from "./images/chicken.png";

class Header {
  constructor() {}
  initialize() {
    const homeBtn = document.getElementById("home-button");
    const menuBtn = document.getElementById("menu-button");
    const aboutBtn = document.getElementById("about-button");
    homeBtn.addEventListener("click", () => {
      Home.getData();
    });
    menuBtn.addEventListener("click", () => {
      Menu.getData();
    });
    aboutBtn.addEventListener("click", () => {
      About.getData();
    });
    Home.getData();
  }
}

class Menu {
  constructor() {}
  static getData() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";

    const fishCard = document.createElement("div");
    fishCard.classList.add("menu-item");

    const fishImg = document.createElement("img");
    fishImg.src = fish;
    fishImg.alt = "fish";

    const fishDescription = document.createElement("div");
    fishDescription.innerHTML = "fish: $5.99";

    fishCard.appendChild(fishImg);
    fishCard.appendChild(fishDescription);

    const beefCard = document.createElement("div");
    beefCard.classList.add("menu-item");

    const beefImg = document.createElement("img");
    beefImg.src = beef;
    beefImg.alt = "beef";

    const beefDescription = document.createElement("div");
    beefDescription.innerHTML = "beef: $5.99";

    beefCard.appendChild(beefImg);
    beefCard.appendChild(beefDescription);

    const chickenCard = document.createElement("div");
    chickenCard.classList.add("menu-item");

    const chickenImg = document.createElement("img");
    chickenImg.src = chicken;
    chickenImg.alt = "chicken";

    const chickenDescription = document.createElement("div");
    chickenDescription.innerHTML = "chicken: $5.99";

    chickenCard.appendChild(chickenImg);
    chickenCard.appendChild(chickenDescription);

    const menuDiv = document.createElement("div");
    menuDiv.id = "menu";

    menuDiv.appendChild(chickenCard);
    menuDiv.appendChild(beefCard);
    menuDiv.appendChild(fishCard);

    contentDiv.appendChild(menuDiv);
  }
}

class Home {
  constructor() {}
  static getData() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";

    const homeDiv = document.createElement("div");
    homeDiv.innerHTML = "welcome to our restaurant";

    contentDiv.appendChild(homeDiv);
  }
}

class About {
  constructor() {}
  static getData() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";

    const homeDiv = document.createElement("div");
    homeDiv.innerHTML = "we are the best restaurant";

    contentDiv.appendChild(homeDiv);
  }
}

const header = new Header();
header.initialize();
