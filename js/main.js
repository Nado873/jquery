// const button1 = document.querySelector(".button1")
// $(function(){})
// $(".button1").click(function(){
//     $("p").show(2800);
// })  




//Buttons
const azerbaycan = document.querySelector(".button1")
const ingilis = document.querySelector(".button2")
const ukrayna = document.querySelector(".button3")

$(azerbaycan).click(function(){
    $("#bert").load("az.txt")
})

$(ingilis).click(function(){
    $("#bert").load("en.txt")
})

$(ukrayna).click(function(){
    $("#bert").load("ua.txt")
})