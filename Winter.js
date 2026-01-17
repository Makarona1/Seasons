const up = document.getElementById("up")
up.addEventListener("click", function(){
    scrollTo(0, 0)
})
const cold= document.getElementById("Cold")
cold.addEventListener("mouseover", function(){
    const Priznaki = document.getElementById("Priznaki")
    Priznaki.style.background = "linear-gradient(rgba(4, 134, 255, 0.505), rgba(4, 134, 255, 0.505)), url(IMG/moroz-i-sneg-na-vetvah-krasivyi-zimnii-sezon-fotografia-zamorozennoi-prirody.jpg)"
    Priznaki.style.backgroundSize = "cover"
})
cold.addEventListener("mouseout", function(){
    const Priznaki = document.getElementById("Priznaki")
    Priznaki.style.background = "linear-gradient(rgba(0, 128, 0, 0.491), rgba(255, 255, 255, 0.486)), url(IMG/moroz-i-sneg-na-vetvah-krasivyi-zimnii-sezon-fotografia-zamorozennoi-prirody.jpg)"
    Priznaki.style.backgroundSize = "cover"
})
const Snowfall = document.getElementById("Snowfall")
Snowfall.addEventListener("mouseover", function(){
    const Snow1 = document.getElementById("snow1")
    const Snow2 = document.getElementById("snow2")
    const Snow3 = document.getElementById("snow3")
    Snow1.classList.add("snow")
    Snow2.classList.add("snow")
    Snow3.classList.add("snow")
})
Snowfall.addEventListener("mouseout", function(){
    const Snow1 = document.getElementById("snow1")
    const Snow2 = document.getElementById("snow2")
    const Snow3 = document.getElementById("snow3")
    Snow1.classList.remove("snow")
    Snow2.classList.remove("snow")
    Snow3.classList.remove("snow")
})
const sygrob = document.getElementById("Sygrob")
sygrob.addEventListener("mouseover", function(){
    const sygrobimage = document.getElementById("sygrobimage")
    sygrobimage.classList.add("sygrob")
})
sygrob.addEventListener("mouseout", function(){
    const sygrobimage =document.getElementById("sygrobimage")
    sygrobimage.classList.remove("sygrob")
})
const newyear = document.getElementById("NewYear")
newyear.addEventListener("mouseover", function() {
    const Toy1 = document.getElementById("toy1")
    const Toy2 = document.getElementById("toy2")
    const Toy3 = document.getElementById("toy3")
    Toy1.style.opacity = "1"
    Toy2.style.opacity = "1"
    Toy3.style.opacity = "1"
})
newyear.addEventListener("mouseout", function() {
    const Toy1 = document.getElementById("toy1")
    const Toy2 = document.getElementById("toy2")
    const Toy3 = document.getElementById("toy3")
    Toy1.style.opacity = "0"
    Toy2.style.opacity = "0"
    Toy3.style.opacity = "0"
})
const SoundIcon = document.getElementById("sound")
const SoundMusic = new Audio("Audio/freepik-stereo-summer.mp3")
let clicker = 0
SoundIcon.addEventListener("click", function(){
    if (clicker == 0)
        SoundMusic.play()
    console.log(SoundIcon)
    clicker ++
    if(clicker %2 != 0 && clicker != 1)
            SoundMusic.play()
    else if(clicker %2 == 0 && clicker != 0)
        SoundMusic.pause()
})