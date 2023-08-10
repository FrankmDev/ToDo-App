let btn = document.querySelector(".btn");
let reset = document.querySelector(".reset");
let gallery = document.getElementById("gallery");
let animeBtn = document.getElementById("anime");
let natureBtn = document.getElementById("nature");
let animeGallery = [
  "url('https://i.pinimg.com/564x/9e/28/2a/9e282ad9ff61ecba5564a179fc7bcf26.jpg')",
  "url('https://i.pinimg.com/564x/58/dc/0d/58dc0dfd790c9333ed4c07ceffde8c6d.jpg')",
  "url('https://i.pinimg.com/564x/f2/4e/b4/f24eb48ed365ebf4cfa025063ddb2fb2.jpg')",
  "url('https://i.pinimg.com/564x/61/33/58/6133581c7538c161565b412d2dee313f.jpg')",
];
let natureGallery = [
  "url('https://i.pinimg.com/564x/09/47/db/0947db859f8bbec51f4f85d030c59b03.jpg')",
  "url('https://i.pinimg.com/564x/ce/63/89/ce638990f9771cb735de8654c4f51ad9.jpg')",
  "url('https://i.pinimg.com/564x/5b/d9/e9/5bd9e91eb3162d2482943abaf5f08464.jpg')",
];

animeBtn.addEventListener("click", function () {
  btn.addEventListener("click", function () {
    gallery.style.backgroundImage = animeGallery[0];
  });
});

natureBtn.addEventListener("click", function () {
  btn.addEventListener("click", function () {
    gallery.style.backgroundImage = natureGallery[0];
  });
});

reset.addEventListener("click", function () {
  gallery.style.backgroundImage =
    "url('https://i.pinimg.com/564x/83/69/c2/8369c2c16e5534881d8f9a4b4abdfef4.jpg')";
});

console.log("Hello World!");
