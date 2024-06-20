let cursor = document.querySelector(".cursors");
let cont = document.querySelector(".container");
let sectext =document.querySelector(".Second-text");
let carouselitem = document.querySelector(".carousel-item");

let word = ["Web Designer","Video Creator","Logo Designer","Web Developer","Content Writer"];


document.addEventListener("mousemove",(e)=>{
    // e.preventDefault();
    cursor.style.top = e.pageY+"px";
    cursor.style.left = e.pageX+"px";
    cursor.style.display="block";
})

document.addEventListener("mouseout",(e)=>{
    cursor.style.display="none";
})
//=============================================================================== 
setTimeout(()=>{
    cont.classList.remove("off");
},6000)

// ================================================================================

let k=0;
setInterval(()=>{
    if(k>4){
        k=0;
    }
    // let a =document.createTextNode(word[k]);
    sectext.textContent=word[k];
    k++;
},6000)
// =======================================================================================
