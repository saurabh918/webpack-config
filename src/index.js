import random from "./random"
import image from "../src/assets/images/leasing-program-banner.png" 
import "./style.scss"


document.querySelector(".random-text").innerHTML = random()

document.querySelector(".image").setAttribute("src", image)