// ** Instructions **:
// * Change the font of the body element.
let body = document.getElementsByTagName("body");
let bodyArr = Array.from(body);
bodyArr.map((item) => (item.style.fontFamily = "Times New Roman"));
// * Center the text of h1 on the page.
document.querySelector("h1").style.textAlign = "center";
// * The menu headings have a class named `category`.Select the elements by class name.Then, change the`color` and`font-style` of each element.
let menuHeadings = document.getElementsByClassName("category");
let menuArr = Array.from(menuHeadings);
menuArr.map((item) => {
  item.style.fontStyle = "italic";
  item.style.fontSize = "2rem";
  item.style.textDecoration = "underline";
});

// * Create a function named "_colorGenerator_" that returns a different color.The returned random color should also include set transparency.Select the unordered lists with the class of `food-category`.Give each list a different background color using the function that you created.
let colorGenerator = () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let a = parseFloat(Math.random().toFixed(1));
  let color = `rgba(${r},${g},${b},${a})`;
  return color;
};
let foodLists = document.querySelectorAll(".food-category");

foodLists.forEach(
  (element) => (element.style.backgroundColor = colorGenerator())
);
// * Align the`food-category` lists in a row on desktop.Make sure that the page is responsive and also works on mobile
foodLists.forEach((element) => {
  element.style.width = "150px";
  element.style.padding = "2em";
  element.style.paddingRight = "10em";
});

let main = document.querySelector("main");
main.style.display = "flex";
main.style.flexWrap = "wrap";
main.style.justifyContent = "space-between";

// * Select the warning at the end of the page by its id`warning`.Select the id without using a querySelector.Change the size and font of the`warning`.
let warning = document.getElementById("warning");
warning.style.width = "60%vw";
warning.style.marginLeft = "20vw";
warning.style.marginRight = "20vw";
warning.style.fontSize = "1.9rem";
warning.style.fontFamily = "Franklin Gothic Medium";
warning.style.textAlign = "center";
// * Select all _even_`allergy-info` items.Give the even items a different background color.
let allergies = document.querySelector(".allergies");
allergies.style.marginLeft = "20%";
allergies.style.marginLeft = "20%";
let itemsCollection = document.querySelectorAll(".allergy-info");
itemsCollection.forEach((item, i) => {
  item.style.width = "15rem";
  if (i % 2 == 1) {
    item.style.backgroundColor = "pink";
  }
});
// * Make the`allergy-warning` appear as a column in the center of the page.
warning.style.textAlign = "center";
// * The descriptions in the footer should also be styled, e.g.a rounded border with a background color.They should appear in a column for mobile and in a row for desktop.
let footer = document.querySelector("footer");
footer.style.display = "flex";
footer.style.flexWrap = "wrap";
footer.style.justifyContent = "space-evenly";
let desc = document.querySelectorAll(".food-desc");
desc.forEach((item) => {
  item.style.width = "120px";
  item.style.height = "120px";
  item.style.lineHeight = "80px";
  item.style.textAlign = "center";
  item.style.boxSizing = "border-box";
  item.style.marginBottom = "20px";
  item.style.border = "2px solid orange";
  item.style.borderRadius = "50%";
});
