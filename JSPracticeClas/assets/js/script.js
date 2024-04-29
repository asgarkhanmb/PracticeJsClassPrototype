"use strict";

// setTimeout(() => {
//     window.location.reload();
// }, 2000);




// function checkOddNum(num){
//     return num % 2 == 1;

// }
// function checkEvenNum(num){
//     return num % 2 == 0 ;

// }

//  function sumOfNumsByCondition(arr,callback){
//     let sum=0;
//     for (const item of arr) {
//         if(callback(item)){
//             sum+=item
//         }
//     }
//     console.log(sum);
//  }

//  let nums = [1,4,5,6,9,8]

// sumOfNumsByCondition(nums,checkOddNum);
// sumOfNumsByCondition(nums,checkEvenNum);

// sumOfNumsByCondition(nums,m=>m>5) 


// let nums = [1, 4, 5, 6, 9, 8]

// let result = nums.filter(m=>m > 5);

// console.log(nums); 

// console.log(result);

// let result = nums.find(m=>m > 5);

// console.log(result);

// let result = nums.findIndex(m => m == 5);

// console.log(result);


// class Animal {

//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }

// }


// let animal = new Animal(100,200)

// let animal = new Animal(200,300);

// class Bird extends Animal{
//     constructor(a,b){
//         super(a,b)
//         this.name = "Devequshu";
//     }
//     getName (t) {
//         console.log("salam");
//     }
// }

// let bird = new Bird(100,300);

// bird.getName(100)

// console.log(animal.width);


// let name = "salam";

// let surname = new String();

// surname="salamlar"

// console.log(surname);

// let isMarried = new Boolean();

// isMarried = true;



// class Test{
//     constructor(name){
//         this.name = name;
//     }
// }



// Test.prototype.surname = "Surname for test";

// Test.prototype.getName= function(){
//     console.log("this is a test name");
// }

// let test = new Test("salam");

// test.getName();


// String.prototype.customContains = function(searchText){
//     return this.includes(searchText)
// }


// let name = "Reshad";

// let surname = "Agayev";

// console.log(name.customContains("c"));

// console.log(surname.customContains("v"));

// let date = new Date();

// let year  = date.getFullYear();

// let month = date.getMonth();

// let result =`${month - 2} - ${year}`;

// console.log(result);


// let data = Math.sqrt(64)

// console.log(data); 


//DOM

// let elems = document.getElementsByTagName("h1")

// for (let i = 0; i < elems.length; i++) {
//     const element = elems[i];
//     console.log(element);
// }


// let elem = document.getElementsByClassName("test");

// console.log(elem);


//important

// let elem = document.getElementById("products");

// console.log(elem);



// let elems = document.querySelectorAll("#products h1")
// elems[0].style.backgroundColor = "Red"


// for (const item of elems) {
//     item.style.backgroundColor = "Red"
    
// }


// let h1 = document.querySelector("h1");


// console.log(h1.innerText);

// h1.innerHTML= "<span>Reshad Bey</span>"

// h1.style.color = "Teal";
// h1.style.margin = "300px";

// h1.className ="active";

// h1.classList.add("active")
// h1.classList.remove("product")

// console.log(h1.classList.contains("active"));

// h1.setAttribute("id","text")

// console.log(h1.getAttribute("id"));
// console.log(h1.hasAttribute("id"));




// let button = document.querySelector(".add-product");


// let h1 = document.querySelector("h1");

// button.addEventListener("click",function(){
//     this.style.backgroundColor = "Magenta"
    
//     h1.style.backgroundColor = "Green";
//     h1.style.color ="White"
//     h1.style.width = "200px"
//     let btnText = this.innerText;
//     this.innerText = h1.innerText;
//     h1.innerText = btnText;

// })