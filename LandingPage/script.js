let add = document.querySelector(".add");
let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");
let d = document.getElementById("d");
let e = document.getElementById("e");
let u = document.getElementById("one");
let v = document.getElementById("two");
let w = document.getElementById("three");
let x = document.getElementById("four");
let y = document.getElementById("five");
let z = document.getElementById("six");
let displaynav = document.querySelector(".nav-content-container");

let ham = document.getElementById("ham");
let cross = document.getElementById("cross");
let rev = document.querySelector(".responsive-nav");

let imges = ["url(Add/one.jpg)","url(Add/show2.jpg)","url(Add/show3.jpg)",
"url(Add/show4.jpg)","url(Add/show5.jpg)","url(Add/show6.jpg)","url(Add/show7.jpg)",
,"url(Add/show8.jpg)","url(Add/show9.jpg)","url(Add/show10.jpg)"];

let para = ["Move, Shop, Customise & Celebrate With Us.","New Styles on Sale: Up to 40% Off","On New Brands: Up to 80% Off"]; 
let para1 = ["No matter what you feel like doing today, It’s better as a Member.","Get Brand New Products","Free home delivery on order worth ₹ 699 and above"]; 
let span = ["Hurry Up !!","Hurry Up !!","Hurry Up"]; 

let call = (e)=>{
    let temp = document.createElement("p");
    let temp1 = document.createElement("p1");
    let temp2 = document.createElement("span");
    temp.appendChild(document.createTextNode(para[e]));
    temp1.appendChild (document.createTextNode(para1[e]));
    temp2.appendChild (document.createTextNode(span[e]));
    add.appendChild(temp);
    add.appendChild(temp1);
    add.appendChild(temp2);
}
let removechild = ()=>{
    while(add.childElementCount !=0){
        add.removeChild(add.children[0]);
    }
}

let check = 0;

setInterval(()=>{
removechild();
if(check>2){
    check=0;
}
call(check);
check++;
},8000);
// ==============================================================================================//

setInterval(()=>{
    let y = Math.floor((Math.random() * 10) + 1);
    a.style.backgroundImage = imges[y];
},5000)
setInterval(()=>{
    let y = Math.floor((Math.random() * 10) + 1);
    b.style.backgroundImage = imges[y];
},9000)
setInterval(()=>{
    let y = Math.floor((Math.random() * 10) + 1);
    c.style.backgroundImage = imges[y];
},12000)
setInterval(()=>{
    let y = Math.floor((Math.random() * 10) + 1);
    d.style.backgroundImage = imges[y];
},16000)
setInterval(()=>{
    let y = Math.floor((Math.random() * 10) + 1);
    e.style.backgroundImage = imges[y];
},20000)


// ================================================================================//


u.addEventListener("mouseenter",()=>{
        displaynav.classList.remove("off");
})
v.addEventListener("mouseenter",()=>{
        displaynav.classList.remove("off");
})
w.addEventListener("mouseenter",()=>{
        displaynav.classList.remove("off");
})
x.addEventListener("mouseenter",()=>{
        displaynav.classList.remove("off");
})
y.addEventListener("mouseenter",()=>{
        displaynav.classList.remove("off");
})
z.addEventListener("mouseenter",()=>{
        displaynav.classList.remove("off");
})
u.addEventListener("mouseleave",()=>{
        displaynav.classList.add("off");
})
v.addEventListener("mouseleave",()=>{
        displaynav.classList.add("off");
})
w.addEventListener("mouseleave",()=>{
        displaynav.classList.add("off");
})
x.addEventListener("mouseleave",()=>{
        displaynav.classList.add("off");
})
y.addEventListener("mouseleave",()=>{
        displaynav.classList.add("off");
})
z.addEventListener("mouseleave",()=>{
        displaynav.classList.add("off");
})
displaynav.addEventListener("mouseenter",()=>{
    displaynav.classList.remove("off");
})
displaynav.addEventListener("mouseleave",()=>{
    displaynav.classList.add("off");
})
// =================================================================================

ham.addEventListener("click",()=>{
        ham.style.display = "none";
        rev.style.display = "flex";
        cross.classList.remove("off");
        
})
cross.addEventListener("click",()=>{
        cross.classList.add("off");
        rev.style.display = "none";
        ham.style.display = "flex";   
})
