//Movement Animation to happen
const frt = document.querySelector(".frt");
const test = document.querySelector(".team");
//Items
const title = document.querySelector(".title");
const img = document.querySelector(".img img");
const pra = document.querySelector(".pra");
const description = document.querySelector(".infoo h4");
const social = document.querySelector(".social");

//Moving Animation Event
test.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 50;
  frt.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
test.addEventListener("mouseenter", (e) => {
  frt.style.transition = "none";
  //Popout
  title.style.transform = "translateZ(120px)";
  img.style.transform = "translateZ(100px) rotateZ(0deg)";
  description.style.transform = "translateZ(125px)";
  social.style.transform = "translateZ(100px)";
  pra.style.transform = "translateZ(90px)";
});
//Animate Out
test.addEventListener("mouseleave", (e) => {
  frt.style.transition = "all 0.5s ease";
  frt.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title.style.transform = "translateZ(0px)";
  img.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  social.style.transform = "translateZ(0px)";
  pra.style.transform = "translateZ(0px)";
});