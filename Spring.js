
const March = document.getElementById("March1")
const April = document.getElementById("April1")
const May = document.getElementById("May1")
const MarchImg = document.getElementById("March")
const AprilImg = document.getElementById("April")
const MayImg = document.getElementById("May")
March.addEventListener("click",function(){
    MarchImg.style.zIndex = 100
    AprilImg.style.zIndex = 10
    MayImg.style.zIndex = 10
})
April.addEventListener("click",function(){
    AprilImg.style.zIndex = 100
    MarchImg.style.zIndex = 10
    MayImg.style.zIndex = 10
})
May.addEventListener("click",function(){
    MayImg.style.zIndex = 100
    AprilImg.style.zIndex = 10
    MarchImg.style.zIndex = 10
})