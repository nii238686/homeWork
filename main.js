const boxes = document.querySelectorAll(".box");
const mainBox = document.querySelector(".main-box");
const horizontolboxes = document.querySelector(".Dugsiiye");
const input = document.querySelector(".inputFont");
const radius = document.querySelector(".boderRadius");
const fontWeight = document.querySelector(".fontWeight");
const option = document.getElementById("font-family");


boxes.forEach(function (box) {
    box.addEventListener("click", function () {
   changeColor(box);

   });
 });

 const changeColor=(color)=>{
    const boxColor=getComputedStyle(color).backgroundColor;
    mainBox.style.backgroundColor = boxColor;
}
input.addEventListener("input", ()=>{
let font=input.value;
horizontolboxes.style.fontSize = font;
horizontolboxes.style.color = font;

});


radius.addEventListener("input", ()=>{
let borderradius=radius.value;
console.log(borderradius)
mainBox.style.borderRadius = borderradius;


});
fontWeight.addEventListener("input", ()=>{
let fontW=fontWeight.value;

horizontolboxes.style.fontWeight = fontWight;


});

option.addEventListener("change", (e)=>{
    let family = e.target.value
     horizontolboxes.style.fontFamily = family;
 
 })







//  const heading  = document.querySelectorAll("container-box")
// const dugsiye = document.querySelectorAll("big-box")

// const Container = document.querySelector("big-box")

// Container.addEventListener("change", function (event) {
//     console.log(Container);
// })



// const family = document.querySelector("#family")

// family.addEventListener("change", function (){
//     console.log(.target.value);
// })