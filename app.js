let counts=setInterval(updated);
let upto=0;
function updated(){
  let count=document.querySelector('#counter');
  count.innerHTML=++upto;

  if(upto===700){
    clearInterval(counts);
  }
  
}

let countlar=setInterval(yenile);
let sayac=0;
function yenile(){
    let selector=document.querySelector('#senan');
    selector.innerHTML=++sayac;

    if(sayac===500){
        clearInterval(countlar);
    }
}

let cnt=setInterval(sifirla);
let say=0;
function sifirla(){
    let chooseSelector=document.querySelector('#Senan2');
    chooseSelector.innerHTML=++say;

    if(say===600){
        clearInterval(cnt);
    }
}

const icon=document.querySelector('#moonicon');
const hero=document.querySelector('.hero');
const link=document.querySelectorAll('.a')
const service=document.querySelector(".services");
const jeep=document.querySelector(".jeep");
const certificate=document.querySelector(".certificate");
const footer=document.querySelector(".footer");
const az=document.querySelector("#aze");
const en=document.querySelector('#eng');
const freelance=document.querySelector(".freelance");
const p=document.querySelector(".yet");


if(localStorage.getItem("theme")==null){
  localStorage.setItem("theme","light");
}

let localData=localStorage.getItem("theme");

if(localData=="light"){
  icon.src="img/moon.png"
  hero.classList.remove("dark-theme");
  service.classList.remove("dark-theme");
  jeep.classList.remove("dark-theme");
  certificate.classList.remove("dark-theme");
  footer.classList.remove("dark-theme");
}
else if(localData=="dark"){
  icon.src="img/sun.png"
  hero.classList.add("dark-theme");
  service.classList.add("dark-theme");
  jeep.classList.add("dark-theme");
  certificate.classList.add("dark-theme");
  footer.classList.add("dark-theme");
}

const mode=()=>{
  hero.classList.toggle("dark-theme");
  service.classList.toggle("dark-theme");
  jeep.classList.toggle("dark-theme");
  certificate.classList.toggle("dark-theme");
  footer.classList.toggle("dark-theme");
  if(hero.classList.contains("dark-theme")){
    icon.src="img/sun.png"
    localStorage.setItem("theme","dark")
  }
  else{
    icon.src="img/moon.png"
    localStorage.setItem("theme","light");

  }
}

//DIL HISSESI START

// const az=["App Haqda","Necə işləyir","Özəlliklər","Blog","Əlaqə"];
// const en=["About App", "How it Works","Features","Blog","Contact"];

// const multiLang=()=>{
// if(langBtn.innerHTML=='az'){
//   for(let x=0; x<az.length; x++){
//     link[x].innerHTML=az[x];
//   }
 
//   langBtn.innerHTML="ENG"
// }
// else{
//   for(let x=0; x<en.length; x++){
//     link[x].innerHTML=en[x];
//   }
//   langBtn.innerHTML="AZE"
// }
// }

// langBtn.addEventListener('click',multiLang);


// const langAz={
//   item1:"App Haqqinda",
//   item2:"Necə işləyir"
// }
// const langEn={
//   item1:"About App",
//   item2:"How it Works"
// }

// const azLang=()=>{
//   if(langBtn.innerHTML=="langAz"){
//     link[0].innerHTML=langAz.item1;
//     link[1].innerHTML=langAz.item2;
//     langBtn.innerHTML="ENG"
//   }
//   else{
//     link[0].innerHTML=langEn.item1;
//   link[1].innerHTML=langEn.item2;
//   langBtn.innerHTML="AZE"
//   }

// }

// const engLang=()=>{
//   link[0].innerHTML=langEn.item1;
//   link[1].innerHTML=langEn.item2;
//   langBtn.innerHTML="AZE"
// }


const langAz={
  item1:"App Haqqinda",
  item2:"Necə işləyir",
  item3:"Özəlliklər",
  item4:"Blog",
  item5:"Əlaqə",
 item6:"Sərbəst ödənişləri idarə etmək heç vaxt asan olmayıb",
 item7:"Yenə də hər hansı bir səyahət yardımı üçün yatmaq xoşagəlməzdir. Düşüncələrin hamısı xeyir-dua vermir."
  
}
const langEn={
  item1:"About App",
  item2:"How It Works",
  item3:"Features",
  item4:"Blog",
  item5:"Contact",
  item6:"Managing freelance payments has never been easier",
  item7:"Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing."
  
}

const azLang=()=>{
  link[0].innerHTML=langAz.item1;
  link[1].innerHTML=langAz.item2;
  link[2].innerHTML=langAz.item3;
  link[3].innerHTML=langAz.item4;
  link[4].innerHTML=langAz.item5;
  freelance.innerHTML=langAz.item6;
  p.innerHTML=langAz.item7;
  
}

const enLang=()=>{
  link[0].innerHTML=langEn.item1;
  link[1].innerHTML=langEn.item2;
  link[2].innerHTML=langEn.item3;
  link[3].innerHTML=langEn.item4;
  link[4].innerHTML=langEn.item5;
  freelance.innerHTML=langEn.item6;
  p.innerHTML=langEn.item7;
}

az.addEventListener('click',azLang);
en.addEventListener('click',enLang);
icon.addEventListener('click',mode);




//Jquery hissesi
 // $(function () {
//$('ne ile'). nece(function() {
  // $('neyi').etsin();
  // })
//
//
// });



 $('.sub-btn').click(function(){
  //  $(this).next('.submenu').slideToggle();
  $('.submenu').slideToggle();
 });


$('.menu-btn').click(function(){
  $('.side-bar').addClass('active');

});

$('.close-btn').click(function(){
  $('.side-bar').removeClass('active');

});

