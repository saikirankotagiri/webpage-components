const imageEle = document.querySelector(".image");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

let num = 0;
const imageUrls = [
  "img/sun.jpg",
  "img/moon.jpg",
  "img/saturn.jpg",
  "img/earth.jpg",
];
leftBtn.addEventListener("click", (event) => {
  if (num === 0) num = 3;
  else num--;
  imageEle.src = imageUrls[num];
});

rightBtn.addEventListener("click", (event) => {
  if (num === 3) num = 0;
  else num++;
  imageEle.src = imageUrls[num];
});
