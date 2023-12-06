// 1. Შექმენით 20 ცალი ღილაკის ელემენტი , თითოეული მათგანი ამოიღეთ js
// ში და მიაბით ფუნქცია რომელიც გამოიძახება მათზე დაჭერის
// შემთხვევაში, ფუნქციამ უნდა შეუცვალოთ ღილაკებს background ფერი და
// უნდა მიანიჭოს რენდომული background ფერი




// const buttons = document.querySelectorAll(".btn");
// buttons.forEach(element => {
//     element.addEventListener("click", function(){
//         let randomColor = randomColorMaker();
//         element.style.backgroundColor = randomColor;
//         console.log("clicked");
//     })
// });

// function randomColorMaker(){
//     let r = Math.floor(Math.random() * 256);
//     let g = Math.floor(Math.random() * 256);
//     let b = Math.floor(Math.random() * 256);
//     let randomColor = `rgb(${r},${g},${b})`;
//     return randomColor;
// }



// 2. Შექმენით 20 ცალი ღილაკი , ამოიღეთ ღილაკები js ში და მიანიჭეთ მათ
// ტექსტის მნიშვნელობად რენდომული რიცხვითი მნიშნელობები,
// ღილაკებს მიანიჭეთ ფუნქცია რომელიც გამოიძახება მათზე დაჭერის
// შემთხვევაში და ეს ფუფნქცია გამოიტანს alert დიალოგური ფანჯრის
// მეშვეობით თითოეულ ღილაკში ჩაწერილი რიცხვის გამყოფების
// რაოდენობას

// const buttons = document.querySelectorAll(".btn");

// buttons.forEach(element => {
//     let randomNum = Math.floor(Math.random() * 256);
//     element.innerText = randomNum;
// });


// buttons.forEach(element => {
//     element.addEventListener("click", function(){
//         let selectedNumber = element.innerText;
//         let gamyofebi = [];
//         for(var i = 0; i<=selectedNumber; i++){
//             if(selectedNumber%i==0){
//                 gamyofebi.push(i);
//             }
//         }
//         alert(gamyofebi);
//     })
// });



//Შექმენით 6 ცალი ღილაკის ელემენტი რომლებიც იქნებიან დასტილული
// შემდეგნაირად , width:300px; height:300px; border:1px solid steelblue; background-
// color:steelblue, ასევე დაამატეთ ერთი ღილაკი ამ ღილაკების ზემოთ
// რომელზე დაჭერის შემთხვევაშიც მიენიჭებათ ქვემოთ მოცემულ ღილაკებს
// რენდომული background ფერები

// const mainButton = document.querySelector("#main-button");
// let buttons = document.querySelectorAll(".colored-button");

// mainButton.addEventListener("click", function(){
//     buttons.forEach(element => {
//         let randomColor = randomColorMaker();
//         element.style.backgroundColor = randomColor;
//     });
// })

// function randomColorMaker(){
//     let r = Math.floor(Math.random() * 256);
//     let g = Math.floor(Math.random() * 256);
//     let b = Math.floor(Math.random() * 256);
//     let randomColor = `rgb(${r},${g},${b})`;
//     return randomColor;
// }