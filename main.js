
let h1= document.querySelector(".title")
h1.style.textAlign="center"

let main=document.querySelector(".main")
main.style.display="flex"
main.style.width="100vw"
main.style.flexWrap="wrap"
main.style.justifyContent="space-evenly"

const randomColor=()=>{
    let r= Math.floor(Math.random()*256)
    let g= Math.floor(Math.random()*256)
    let b= Math.floor(Math.random()*256)
    let a= Math.random().toFixed(2)
    let color= `rgba(${r},${g},${b},${a} )`
    return color
}

let uls=document.querySelectorAll(".food-category")
uls[0].style.backgroundColor=randomColor()
uls[1].style.backgroundColor=randomColor()
uls[2].style.backgroundColor=randomColor()
uls.forEach(ul=>{
    ul.style.width="250px"
    ul.style.padding="30px"
    ul.style.border="2px solid black"
    ul.style.lineHeight="30px"
})

let labels=document.querySelectorAll(".category") 
labels.forEach(label=>{
    console.log(label)
    label.style.fontSize="30px";
    label.style.textDecoration="underline"
    label.style.fontStyle="italic"
})

let h3= document.querySelector("#warning")
h3.style.textAlign="center"
h3.style.fontSize="25px"


let allergies= document.querySelector(".allergies")
allergies.style.width="40%"
allergies.style.margin="0 auto"

let allergyInfo=document.querySelectorAll(".allergy-info")
allergyInfo.forEach((li,i)=>{
    if(i%2!==0){
        li.style.backgroundColor="lightblue"
    }
})


let footer= document.querySelector(".footer")
footer.style.display="flex"
footer.style.flexWrap="wrap"
footer.style.justifyContent="center"
footer.style.padding="20px"

let foodDesc=document.querySelectorAll(".food-desc")
foodDesc.forEach(item=>{
    item.style.width="120px"
    item.style.height="120px"
    item.style.lineHeight="80px"
    item.style.border="5px solid #FDAF39"
    item.style.borderRadius="60px"
    item.style.textAlign="center"
    item.style.margin="10px"
    item.style.boxSizing="border-box"
})

