let bodyStyle = document.getElementsByTagName("body")[0];
console.log(bodyStyle);
bodyStyle.style.fontFamily = "Time New roman"

let h1 = document.getElementsByClassName("title")[0];
console.log(h1);
h1.style.textAlign="center";

let category = document.getElementsByClassName("category");
console.log(category);
let convertedCategory = [...category]
console.log(convertedCategory);
convertedCategory.map(elem=>elem.style.color="blue");
convertedCategory.map(elem=>elem.style.fontSize="43px");

function _colorGenerator_() {
    let letters = '0123456789ABCDEF';
  let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
console.log(_colorGenerator_());


let foodCat = document.getElementsByClassName("food-category");
let convertedFoodCat = [...foodCat];
convertedFoodCat.map(item=>item.style.backgroundColor = _colorGenerator_());
console.log(convertedFoodCat);

let main = document.getElementsByClassName("main")[0];

console.log(main);
main.style.display = "flex";
main.style.flexWrap = "wrap";
main.style.height="200px"
main.style.margin="0 auto"

let warn = document.getElementById("warning");
console.log(warn);
warn.style.fontSize="40px";
warn.style.color="red";

let allergyInfo = document.getElementsByClassName("allergy-info");
console.log(allergyInfo);
let convertedAllergyInfo = [...allergyInfo]
console.log(convertedAllergyInfo);
for(let i =0; i<convertedAllergyInfo.length; i++) {
    if(i%2!==0){
        convertedAllergyInfo[i].style.backgroundColor = "blue"
    }
};

let allWarn = document.getElementsByClassName("allergy-warning")[0];
console.log(allWarn);

allWarn.style.textAlign="center"
allWarn.style.width="50%"
allWarn.style.margin="0 auto"

let footer = document.getElementsByClassName("food-desc");
console.log(footer);
let convertedFooter = [...footer]
console.log(convertedFooter);
convertedFooter.map(item=>{
    item.style.height="200px"
    item.style.margin="0 auto"
    item.style.width="200px"
    item.style.textAlign="center"
    item.style.borderRadius = "100px"
    item.style.border = "3px yellow solid"
});

let footerMain = document.querySelector("footer");
footerMain.style.display = "flex";
footerMain.style.flexWrap = "wrap";












