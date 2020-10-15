// * Change the font of the body element. 
let bodyFontSize = document.querySelector("body")
bodyFontSize.style.fontSize="32px"

// * Center the text of h1 on the page.
let h1Position = document.querySelector("h1");
h1Position.style.textAlign="center";

// * The menu headings have a class named `category`. Select the elements by class name. Then, change the `color` and `font-style` of each element.
const menuHeadings = document.getElementsByClassName("category");
menuHeadings[0].style.color="#e63946";
menuHeadings[0].style.textDecoration = "underLine"
menuHeadings[1].style.color="#a8dadc"
menuHeadings[1].style.textDecoration = "underLine"
menuHeadings[2].style.color="gray";
menuHeadings[2].style.textDecoration = "underLine"



// * Create a function named "_colorGenerator_" that returns a different color. The returned random color should also include set transparency. Select the unordered lists with the class of `food-category`. Give each list a different background color 

// function colorGenerator(){
//     let letters = '0123456789ABCDEF';
//     let color = '#';
//     for(i=0; i<6; i++){
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }
// function colorGenerator() 


let trans = '0.5'; 
let color = 'rgba(';
function getRandomColor() {
    for (i=0; i<3; i++){
        color += Math.floor(Math.random() * 255) + ',';
    }
    color += trans + ')'; 
    return color;
}
let listBackground= document.querySelectorAll(".food-category");
listBackground.forEach(element=> {
    element.style.backgroundColor= getRandomColor();
    element.style.width= "400px"
})
// or
// listBackground[0].style.backgroundColor= getRandomColor();
// listBackground[0].style.width="400px"
// listBackground[1].style.backgroundColor= getRandomColor();
// listBackground[1].style.width="400px"
// listBackground[2].style.backgroundColor= getRandomColor();
// listBackground[2].style.width="400px"


// * Align the `food-category` lists in a row on desktop. Make sure that the page is responsive and also works on mobile.+
const listDisplay = document.querySelector("main");
listDisplay.style.cssText= "display:flex;flex-wrap: wrap; margin: 0 50px";
listDisplay.style.justifyContent= "space-between";


window.addEventListener("resize",(e)=>{
    console.log(window.innerWidth);
    if(window.innerWidth< 600){
        document.body.style.backgroundColor="gray"
    } else {
        document.body.style.backgroundColor="white"
    }
})

// * Select the warning at the end of the page by its id `warning`. Select the id without using a querySelector. Change the size and font of the `warning`.

let h3 = document.getElementById("warning");
h3.style.fontSize="40px";
h3.style.fontFamily="Arial";

// * Select all _even_ `allergy-info` items. Give the even items a different background color.
let items= document.querySelectorAll(".allergy-info:nth-child(even)")
items.forEach(element=>{
    element.style.backgroundColor="orangeRed"
})


// * Make the `allergy-warning` appear as a column in the center of the page.

let allergyWarning = document.querySelector(".allergy-warning");
allergyWarning.style.cssText="width:900px;margin:auto";


// * The descriptions in the footer should also be styled, e.g. a rounded border with a background color. They should appear in a column for mobile and in a row for desktop.
let footer = document.querySelector("footer");
footer.style.cssText="width:400;margin:auto;display:flex;flex-wrap: wrap;justify-content:center";


let descriptions = document.querySelectorAll(".food-desc");
console.log(descriptions);
descriptions.forEach(element => {
    element.style.cssText="text-align:center;line-height:80px;width:150px;height:150px;padding:10px;margin:25px;border:3px solid yellow; border-radius:50%"
});
