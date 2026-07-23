// ❤️ FOR THANVI ❤️

const loading = document.getElementById("loading");
const main = document.getElementById("main");

function startGift() {

document.getElementById("pass").style.display = "none";

const btn = document.querySelector('button[onclick="checkPassword()"]');
if(btn) btn.style.display = "none";

loading.style.display = "none";
main.style.display = "block";

}

function hideAllPages() {
    document.querySelectorAll(".page").forEach(page => {
        page.style.display = "none";
    });
}

function nextSection() {
    hideAllPages();
    document.getElementById("letter").style.display = "flex";
}

function showTimeline() {
    hideAllPages();
    document.getElementById("timeline").style.display = "flex";
}

function showGallery() {
    hideAllPages();
    document.getElementById("gallery").style.display = "flex";
}

function showGift() {
    hideAllPages();
    document.getElementById("gift").style.display = "flex";
}

function openGift() {
    hideAllPages();
    document.getElementById("ring").style.display = "flex";
}

function showFinal() {
    hideAllPages();
    document.getElementById("final").style.display = "flex";
}
/* ❤️ Floating Hearts */

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.animationDuration=(5+Math.random()*5)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

}

setInterval(createHeart,500);

/* 🎆 Fireworks */

function fireworks(){

alert("🎉 Happy Birthday Thanvi ❤️\n\nI Love You Forever ❤️");

}

/* ⏳ Relationship Timer */

const startDate=new Date("2025-05-10");

function updateTimer(){

const today=new Date();

const diff=today-startDate;

const days=Math.floor(diff/(1000*60*60*24));

console.log("Together for "+days+" days ❤️");

}

updateTimer();

/* 🎂 Birthday Check */

function birthdayWish(){

const today=new Date();

if(today.getMonth()==10 && today.getDate()==23){

alert("🎂 Happy Birthday Thanvi ❤️");

}

}

birthdayWish();
function checkPassword() {

const password = document.getElementById("pass").value;

if(password === "2311"){

startGift();

}else{

alert("❌ Wrong Password ❤️");

}

}