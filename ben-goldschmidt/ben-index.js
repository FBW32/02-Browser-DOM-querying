// Change the font of the body element.
let body1 = document.querySelector("body")
console.dir(body1)
body1.style.justifyContent = "center"


// Center the text of h1 on the page.
let h1 = document.querySelector("h1")
console.dir(h1)
h1.style.textAlign = "center";


// The menu headings have a class named category. Select the elements by class name. Then, change the color and font-style of each element.
// main
let main = document.querySelector(".main");
console.dir(main)
main.style.display = "flex"
main.style.width = "100vw"
main.style.flexWrap = "wrap"
main.style.justifyContent = "space-evenly"


// Create a function named "colorGenerator" that returns a different color. The returned random color should also include set transparency. Select the unordered lists with the class of food-category. Give each list a different background color using the function that you created.
const randomColor = () => {
    // using rgba colour spectrum
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    let a = Math.random().toFixed(2)
    let color = `rgba(${r},${g},${b},${a} )`
    return color
}

// food-category
let ulItems = document.querySelectorAll(".food-category");
ulItems[0].style.backgroundColor = randomColor();
ulItems[1].style.backgroundColor = randomColor();
ulItems[2].style.backgroundColor = randomColor();
ulItems.forEach(ulitem => {
    // Align the food-category lists in a row on desktop. Make sure that the page is responsive and also works on mobile.
    ulitem.style.alignSelf = "center"
    ulitem.style.fontSize = "30px";
    ulitem.style.width = "300px";
    ulitem.style.borderRadius = "30px";
    ulitem.style.padding = "30px 10px 20px 40px";
    ulitem.style.margin = "10px";
})


// category
let category = document.querySelectorAll(".category");
console.dir(category)
category.forEach(label => {
    label.style.color = "black";
    label.style.fontStyle = "italic";
    label.style.textDecoration = "underline";
    label.style.fontWeight = "bold";
})


// food-item
let foodItem = document.querySelectorAll(".food-item");
console.dir(foodItem)
foodItem.forEach(item => {
    item.style.color = "black";
    item.style.fontSize = "20px";
})


// Make the allergy-warning appear as a column in the center of the page.
let allergyWarning = document.querySelector(".allergy-warning");
console.dir(allergyWarning)
allergyWarning.style.margin = "0 auto";
allergyWarning.style.padding = "0";
allergyWarning.style.justifyContent = "center"
allergyWarning.style.width = "400px";


// Select the warning at the end of the page by its id warning. Select the id without using a querySelector. Change the size and font of the warning.
// warning
let warning = document.getElementById("warning");
warning.style.fontSize = "40px";
warning.style.color = "red";
warning.style.textAlign = "center";



// Select all even allergy-info items. Give the even items a different background color.
let allergyItems = document.querySelectorAll(".allergy-info");
console.dir(allergyItems);
allergyItems.forEach(item => {
    item.style.backgroundColor = randomColor();
    item.style.margin = "10px";
    item.style.padding = "10px";
})



let footer = document.querySelector(".footer")
console.dir(footer)
footer.style.flexWrap = "wrap"
footer.style.display = "flex"
footer.style.justifyContent = "center"
footer.style.padding = "20px"


// The descriptions in the footer should also be styled, e.g. a rounded border with a background color. They should appear in a column for mobile and in a row for desktop.
let footerDesc = document.querySelectorAll(".food-desc");
console.dir(footerDesc)
footerDesc.forEach(desc => {
    desc.style.justifyContent = "space-evenly"
    desc.style.backgroundColor = randomColor();
    desc.style.borderRadius = "50%";
    desc.style.margin = "10px";
    desc.style.width = "200px"
    desc.style.textAlign = "center"
    desc.style.boxSizing = "border-box"
})





