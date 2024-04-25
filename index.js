let a = document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");
let d = document.querySelector("#d");
let e = document.querySelector("#e");

let ac = a.getAttribute("class");
let bc = b.getAttribute("class");
let cc = c.getAttribute("class");
let dc = d.getAttribute("class");
let ec = e.getAttribute("class");

function one() {
  a.classList.add("a1");
  b.classList.add("b1");
  c.classList.add("c1");
  d.classList.add("d1");
  e.classList.add("e1");
}
function two() {
  a.classList.add("a2");
  a.classList.remove("a1");
  // b.classList.add("a1");
  b.classList.add("b2");
  b.classList.remove("b1");
  c.classList.add("c2");
  c.classList.remove("c1");
  d.classList.add("d2");
  d.classList.remove("d1");
  e.classList.add("e2");
  e.classList.remove("e1");
}
function three() {
  a.classList.remove("a2");
  a.classList.add("a3");
  b.classList.remove("b2");
  b.classList.add("b3");
  c.classList.remove("c2");
  c.classList.add("c3");
  d.classList.remove("d2");
  d.classList.add("d3");
  e.classList.remove("e2");
  e.classList.add("e3");
}
function four() {
  a.classList.remove("a3");
  a.classList.add("a4");
  b.classList.remove("b3");
  b.classList.add("b4");
  c.classList.remove("c3");
  c.classList.add("c4");
  d.classList.remove("d3");
  d.classList.add("d4");
  e.classList.remove("e3");
  e.classList.add("e4");
 
}
function five() {
  a.classList.remove("a4")
  b.classList.remove("b4");
  c.classList.remove("c4");
  d.classList.remove("d4");
  e.classList.remove("e4");
}

function click2() {
  setTimeout(one,1000);
  setTimeout(two,3000);
  setTimeout(three,5000);
  setTimeout(four,7000);
  setTimeout(five,9000);
}
click2();

setInterval(click2,10000);

