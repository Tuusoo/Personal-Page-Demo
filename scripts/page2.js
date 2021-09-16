let warp = document.querySelector(".page2 .banner .warp");
let switcher = document.querySelector(".page2 .switch");
let childAmount = warp.childElementCount;//获取子元素的数量
let switchButtons = switcher.getElementsByClassName("button")
let currentPage = 0;//当前页数，从0开始

for(let i = 0; i < childAmount; i++ ) {//添加切换开关
  let childNode = document.createElement("div");
  childNode.className = "button";
  childNode.dataset.index = i;
  childNode.onclick = clickToSwitch;
  switcher.appendChild(childNode);
}
switcher.style.width = childAmount*20 + (childAmount-1)*5 + 'px';
switchButtons[0].style.backgroundColor = "#d63c5d";

const changeIndex = () => {//当currentPage改变时进行切换
  for(let i = 0; i < childAmount; i++) {
    switchButtons[i].style.backgroundColor = "#E295A5";
  }
  switchButtons[currentPage].style.backgroundColor = "#d63c5d";
  warp.style.left = (-900*currentPage) + 'px'
}

warp.style.width = 900*childAmount + "px"//设置轮播区域的宽度
const timer = () => {
  if(currentPage === childAmount-1){
    currentPage = 0;
  }else{
    currentPage += 1;
  }
  changeIndex();
}
let warpSwitch = setInterval(timer, 2000);

function clickToSwitch(e) {
  clearInterval(warpSwitch);
  currentPage = Number(e.target.dataset.index);
  changeIndex();
  warpSwitch = setInterval(timer, 2000);
}