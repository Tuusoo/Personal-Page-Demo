document.querySelector(".page3 .switcher .p1").style.color = "#9a989f"

document.querySelectorAll(".page3 .switcher span").forEach(i => {
  i.onclick = switchTab;
})

let pic1 = document.querySelector(".page3 .pics .pic1");
let pic2 = document.querySelector(".page3 .pics .pic2");
let pic3 = document.querySelector(".page3 .pics .pic3");
let pic4 = document.querySelector(".page3 .pics .pic4");
let pic5 = document.querySelector(".page3 .pics .pic5");
let pic6 = document.querySelector(".page3 .pics .pic6");
let pic7 = document.querySelector(".page3 .pics .pic7");
let pic8 = document.querySelector(".page3 .pics .pic8");
let pic9 = document.querySelector(".page3 .pics .pic9");
let pic10 = document.querySelector(".page3 .pics .pic10");

function switchTab(e) {//点击标签切换事件
  document.querySelectorAll(".page3 .switcher span").forEach(i => {
    i.style.color = "#d63c5d";
  })
  e.target.style.color = "#9a989f";
  // if(e.target.className === "All")
  switch (e.target.className) {
    case "p1":
      document.querySelectorAll(".page3 .pics img").forEach((i) => {
        i.style.display = "inline";
      })
      break;
    case "p2":
      document.querySelectorAll(".page3 .pics img").forEach((i) => {
        i.style.display = "none";
      })
      pic2.style.display = "inline";
      pic5.style.display = "inline";
      break;
    case "p3":
      document.querySelectorAll(".page3 .pics img").forEach((i) => {
        i.style.display = "none";
      })
      pic3.style.display = "inline";
      pic9.style.display = "inline";
      break;
    case "p4":
      document.querySelectorAll(".page3 .pics img").forEach((i) => {
        i.style.display = "none";
      })
      pic7.style.display = "inline";
      pic8.style.display = "inline";
      pic10.style.display = "inline";
      break;
    case "p5":
      document.querySelectorAll(".page3 .pics img").forEach((i) => {
        i.style.display = "none";
      })
      pic1.style.display = "inline";
      pic4.style.display = "inline";
      pic6.style.display = "inline";
      break;
  }
}

function hideElement(ele) {
  ele.style.transform = "scale(0)";
  ele.style.display = "none";
}

function showElement(ele) {
  ele.style.transform = "scale(1)";
  ele.style.display = "inline";
}