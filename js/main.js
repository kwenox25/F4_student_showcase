(function(){
	"use strict";	
	console.log("fired");

	let button = document.querySelector("#button");
	let burgerCon = document.querySelector("#burger-con");

	function hamburgerMenu() {
		burgerCon.classList.toggle("slide-toggle");
		button.classList.toggle("expanded");
	};

	// let hamburgerMenu = () => {
	// 	burgerCon.classList.toggle("slide-toggle");
	// 	button.classList.toggle("expanded");
	// };

	button.addEventListener("click", hamburgerMenu, false);		
})();

//Can also be written like this:
//(() => {  })();   

// Info about IIFE https://flaviocopes.com/javascript-iife/

// This is for FAQs page
function nutritionalFacts() {
	var x = document.getElementById("nutritionalFacts");
	x.style.display = (x.style.display === "none") ? "block" : "none";
  }

function drinkDaily() {
	var x = document.getElementById("drinkDaily");
	x.style.display = (x.style.display === "none") ? "block" : "none";
  }

  function quatroStandard() {
	var x = document.getElementById("quatroStandard");
	x.style.display = (x.style.display === "none") ? "block" : "none";
  }

// This is for changing background when hovering to images in the shop page
let fruits = document.querySelectorAll('.items img');

  function changeBGImage() {
    let originalSrc = this.getAttribute('src');
    this.src = originalSrc.replace('.png', '-back.png');
    console.log('hovering', this);
  }

  function resetBGImage() {
    let originalSrc = this.getAttribute('src');
    this.src = originalSrc.replace('-back.png', '.png');
    console.log('mouseout', this);
  }

  fruits.forEach(fruit => {
    fruit.addEventListener("mouseover", changeBGImage);
    fruit.addEventListener("mouseout", resetBGImage);
  });

// This is for lightbox information
let fruitInfo = document.querySelectorAll(".product-details a"),
    lightbox = document.querySelector('#lightbox');

function loadDrinkDetails() {
    // debugger;
    lightbox.querySelector(".lightBoxImg").src = fruitName[this.dataset.fruit].picture;
    lightbox.querySelector(".drinkName").textContent = fruitName[this.dataset.fruit].name;
    lightbox.querySelector(".whatitdoes").textContent = fruitName[this.dataset.fruit].benefit;
    lightbox.querySelector(".whatsinside").textContent = fruitName[this.dataset.fruit].inside;
    
    lightbox.querySelector(".howtouse").textContent = fruitName[this.dataset.fruit].usage;

    lightbox.querySelector(".price").textContent = fruitName[this.dataset.fruit].price;
    lightbox.querySelector(".totaLprice").textContent = fruitName[this.dataset.fruit].totaLprice;

}

fruitInfo.forEach(drink => drink.addEventListener('click', loadDrinkDetails));

// these are the values
let fruitName = {
  grapefruit : {
      picture: "images/grapefruit.png",
      name: "Grapefruit Burst Fizzy Drink",
      benefit: "The benefits of grapefruit water are many, and include boosting Vitamin C, aiding weight loss, improving digestion, preventing kidney stones, and freshening breath.*",
      inside: " We’re extremely selective and attentive with what goes in every Quatro product. If it isn’t good for you or doesn’t work wonders, we’re leaving it out. GRAPEFRUIT, NATURAL FRUIT FLAVORINGS, NO SUGAR ADDED.",
      usage: "Drink and enjoy. Keep refrigerated. Consume within 3 days of opening.",
      price: "$3.95",
      totaLprice: "$5.13"
  },
  pineapple : {
    picture: "images/pineapple.png",
    name: "Pineapple Madness Fizzy Drink",
    benefit: "Pineapple itself is a nutrient-rich fruit that has several potential positive effects on health when consumed in moderation as part of a balanced diet. Some of these potential benefits include: Anti-inflammatory properties, Immune system support and hydration",
    inside: " We’re extremely selective and attentive with what goes in every Quatro product. If it isn’t good for you or doesn’t work wonders, we’re leaving it out. PINEAPPLE, NATURAL FRUIT FLAVORINGS, NO SUGAR ADDED.",
    usage: "Drink and enjoy. Keep refrigerated. Consume within 3 days of opening.",
    price: "$5.95",
    totaLprice: "$7.75"
},
  orange : {
    picture: "images/orange.png",
    name: "Blood Orange Fizzy Drink",
    benefit: "Oranges contain flavonoids, which have been linked to a reduced risk of heart disease. Orange water soda can help keep the body hydrated, especially in hot weather or during physical activity.",
    inside: " We’re extremely selective and attentive with what goes in every Quatro product. If it isn’t good for you or doesn’t work wonders, we’re leaving it out. ORANGE, NATURAL FRUIT FLAVORINGS, NO SUGAR ADDED.",
    usage: "Drink and enjoy. Keep refrigerated. Consume within 3 days of opening.",
    price: "$4.45",
    totaLprice: "$7.75"// this would be the hero image you want to show in the UI
  },
  passionfruit : {
    picture: "images/passionfruit.png",
    name: "Passion Fruit Fizzy Drink",
    benefit: "Passionfruit contains antioxidants such as vitamin C, carotenoids, and polyphenols, which can help protect the body against damage from harmful free radicals. Passionfruit is a good source of vitamin C, which can help support the immune system and reduce the risk of infections.",
    inside: " We’re extremely selective and attentive with what goes in every Quatro product. If it isn’t good for you or doesn’t work wonders, we’re leaving it out. PASSIONFRUIT, NATURAL FRUIT FLAVORINGS, NO SUGAR ADDED.",
    usage: "Drink and enjoy. Keep refrigerated. Consume within 3 days of opening.",
    price: "$9.45",
    totaLprice: "$12.30"// this would be the hero image you want to show in the UI
  },

}


// video / play
let vid = document.getElementById("myVideo"),
    icon = document.querySelector(".fa.fa-play");

function playVid() { 
 
  if (vid.style.display == 'none') {
    vid.style.display = 'block';
    vid.play();
    icon.className = "fa fa-close";
  } else {
  
    vid.style.display = 'none';
    vid.pause();
    icon.className = "fa fa-play";
  }

} 

