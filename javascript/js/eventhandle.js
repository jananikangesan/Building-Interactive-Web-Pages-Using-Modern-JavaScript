let div=document.querySelector("div");
let para=document.querySelector("p");
let btn=document.querySelector("button");

let anchor=document.querySelector("a");

div.addEventListener("click",()=>{
    console.log("Click Event Handled by div");
})

para.addEventListener("click",()=>{
    console.log("Click Event Handled by p");
})

btn.addEventListener("click",(event)=>{
    console.log("Click Event Handled by button");
    event.stopPropagation();
})

anchor.addEventListener("click",(event)=>{
    console.log("Anchor Tag Clicked");
    event.preventDefault();
})

