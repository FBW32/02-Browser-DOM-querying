let body = document.body;
body.style.fontFamily = "Arial, Helvetica, sans-serif";

let h1 = document.querySelector(".title")
h1.style.textAlign = "center";



let category = document.getElementsByClassName("food-category");

function colorGenerator() {
    return (
      "#" + Math.random().toString(16).slice(2, 8)
    );
  }

for(i=0;i<category.length;i++){
    category[i].style.backgroundColor=colorGenerator();
    category[i].style.width="25%";
};



let main = document.querySelector(".main");
main.style.display = "flex";
main.style.flexFlow = "row wrap";
main.style.justifyContent= "space-around";



let warning = document.getElementById("warning");
warning.style.fontSize="25px";
warning.fontFamily="monospace";
warning.style.color="red"
console.log(warning);

let allergyInfo = document.getElementsByClassName("allergy-info");
console.log(allergyInfo);

let convertAllergyInfo = [...allergyInfo];

convertAllergyInfo.map((element,i)=>{
    element.style.listStyle="none";
    element.style.width="50%"
    element.style.margin="auto"
    if(i%2 !== 0){
        element.style.backgroundColor="navy";
        element.style.color ="white";
    }else{
        element.style.backgroundColor="crimson";
        element.style.color ="black";
    }
})


let footer= document.querySelector(".footer")
footer.style.display="flex"
footer.style.flexWrap="wrap"
footer.style.justifyContent="center"
footer.style.padding="20px"

let foodDesc = document.getElementsByClassName("food-desc");
console.log("food-desc ==>" ,foodDesc);
for(i=0;i<foodDesc.length;i++){
    foodDesc[i].style.border = "2px black solid ";
    foodDesc[i].style.borderRadius ="60%";
    foodDesc[i].style.width ="120px"
    foodDesc[i].style.height ="120px"
    foodDesc[i].style.textAlign ="center"
    foodDesc[i].style.lineHeight ="80px"
    foodDesc[i].style.margin ="20px"

}
