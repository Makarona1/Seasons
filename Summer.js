const collection = document.querySelectorAll("#Priznaki li")
const IMG = document.getElementById("PrizIMG")
const IMGName = ["golova-molodogo-celoveka-s-solncezasitnym-kremom-na-lice-v-okruzenii-plaznyh-aksessuarov.jpg",
                "muzcina-v-ofise-placet-derza-v-rukah-mnogo-listov-bumagi-paren-hocet-poehat-v-otpusk-i-poziruet-s-naduvnym-krugom-na-sinem-prostranstve.jpg",
                "fotorealisticnoe-derevo-s-vetvami-i-stvolom-na-otkrytom-vozduhe-v-prirode.jpg",
                "dovol-no-letnaa-slapa-s-solncezasitnymi-ockami-na-trave.jpg"]
collection.forEach((li, index) => {
    li.addEventListener("click", function(){
        IMG.src = "IMG/" + IMGName[index]

    })
})
const кнопка = document.getElementById("button")
const очки = document.getElementById("score")
const время = document.getElementById("clock")
const таймер = document.getElementById("timer")
const арбуз = document.getElementById("watermelon")
const поле = document.getElementById("InsideGame")
let очк = 0
кнопка.addEventListener("click", function(){
    let тайм = таймер.value
    if(тайм == ""){
        alert("Задайте время игры") 
        return null   
    }
    тайм = +тайм
    id_interval2 = setInterval(function(){
        время.innerHTML = "Время: " + тайм
        тайм--
        if(тайм < 0){
            clearInterval(id_interval)
            clearInterval(id_interval2)
            арбуз.removeEventListener("click" ,кликер)
            кнопка.style.display = "inline"
            очк = 0
        }
    }, 1000)
    время.innerHTML = "Время: " + тайм
    кнопка.style.display = "none"
    id_interval = setInterval(function(){
        арбуз.style.top = Math.round(Math.random() * 700) + "px"
        арбуз.style.left = Math.round(Math.random() * 900) + "px"
    }, 500)
    арбуз.addEventListener("click", кликер)
    function кликер(){
    очк ++
    очки.innerHTML = "Очки: " + очк
}
})
