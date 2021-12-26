let bod = document.querySelector(".bod");
let searxh = document.querySelector(".searxh");

bod.onclick = function(){
    if(searxh.style.display == 'none'){
        searxh.style.display = 'block';
    }
    else{
        searxh.style.display ="none";
    }
}

let iconse = document.querySelector(".iconse");
let listyi = document.querySelector(".listyi");

iconse.addEventListener("click",function(){
    listyi.classList.toggle("add");
})