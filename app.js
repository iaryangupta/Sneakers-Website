const wrapper = document.querySelector(".sliderWrapper");
const menuItem = document.querySelectorAll(".menuItem");

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];

let choosenProduct= products[0];

const currentProductImg= document.querySelector(".productImg");
const currentProductTitle= document.querySelector(".productTitle");
const currentProductPrice= document.querySelector(".productPrice");
const currentProductColors= document.querySelectorAll(".color");
const currentProductSizes= document.querySelectorAll(".size");


menuItem.forEach((item,index) =>{
    item.addEventListener("click", () => {
            
            // changing wraper position/slide
            wrapper.style.transform= `translateX(${-100 * index}vw)`;

            // changing the choosen product 
            choosenProduct= products[index];
            
            // changing texts of product
            currentProductImg.src= choosenProduct.colors[0].img;
            currentProductTitle.textContent= choosenProduct.title;
            currentProductPrice.textContent= "$"+choosenProduct.price;

            // changing color of color option button
            currentProductColors.forEach((color,index)=>{
                color.style.backgroundColor= choosenProduct.colors[index].code;
            })           
        });
});

// changing image on clicking the color buttons
currentProductColors.forEach((color,index)=>{
    color.addEventListener("click", () =>{
        currentProductImg.src= choosenProduct.colors[index].img;
    });
});

// selecting size on clicking 
currentProductSizes.forEach((size,index)=>{
    // whenever any size is choosen firstly all the sizes are unselected 
    // and then the size which was clicked is choosen so that multiple sizes donot get selected at once

    size.addEventListener("click", () =>{
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor= "white";
            size.style.color= "black";
        });  
        size.style.backgroundColor= "black";
        size.style.color= "white"; 
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

