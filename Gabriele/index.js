
// changing font family of the body
let body = document.querySelector("body")
body.style.fontFamily = "verdana"
//body.style.fontStyle = "italic"
console.log(body);


// centering h1
let h1 = document.getElementById("heading")
h1.style.textAlign = "center"


// changing color to class category
let categ = document.getElementsByClassName("category")
console.log(categ);
let categArr = [...categ]
categArr[0].style.color = "red"
categArr[1].style.color = "red"
categArr[2].style.color = "red"
categArr[0].style.fontStyle = "italic"
categArr[1].style.fontStyle = "italic"
categArr[2].style.fontStyle = "italic"


// creating function ColorGenerator

let foodCateg = document.getElementsByClassName("food-category");
let foodCategArr = [...foodCateg]

function colorGenerator() {
   
    let x = Math. floor(Math. random() * 256);
    let y = Math. floor(Math. random() * 256);
    let z = Math. floor(Math. random() * 256);
    let w = Math. floor(Math. random() * 10)/ 10;
    let bgColor = "rgba(" + x + "," + y + "," + z + ","+ w + ")";
     console.log(bgColor);
    
   return bgColor;
    
     }

     foodCategArr.map(item => {
         item.style.backgroundColor = colorGenerator()
     })
     
  
   // Align the food-category lists in a row 
    

   let main=document.querySelector(".main")
   main.style.display="flex"
   main.style.width="100%"
   main.style.flexWrap="wrap"
   main.style.justifyContent="space-evenly"



// changing size and font of warning 

let warning = document.getElementById("warning")

warning.style.fontSize = "xx-large"
warning.style.fontFamily = "Arial, Helvetica, sans-serif"



// changing background to all even allergy-info


let allInfo = document.getElementsByClassName("allergy-info")
let allInfoArr = [...allInfo]

allInfoArr.map((item, i) => {
    if (i % 2 !== 0) {
        item.style.backgroundColor = "cyan"
    }
})



// make class allergy-warning appear as a column in the center

let allergyWarning = document.getElementById("allergy")

allergyWarning.style.margin = "0 auto"
allergyWarning.style.width = "50%"



// changing description in the footer

let footer = document.querySelector("footer")

footer.style.display = "flex"
footer.style.flexWrap="wrap"
footer.style.justifyContent="center"
// footer.style.padding= "25px"


//let footerArr = [...footer]
// footerArr.map(item => {
//     item.style.backgroundColor = "salmon",
//     item.style.border = "2px solid yellow"
// })


//// targeting food.desc

let foodDesk = document.getElementsByClassName("food-desc")
let foodDeskArr = [...foodDesk]

foodDeskArr.map(item => {
    item.style.border = "3px solid yellow"
    item.style.borderRadius = "50%"
    item.style.margin = "15px"
    item.style.padding = "15px"
    item.style.backgroundColor = "rgba(51,23,82,0.1)"
})