const colors = ["green","red","rgba(133,122,2000)","#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    // console.log(document.body);
    // get random number between 0 -3 

   const randomNumber = getRandomNUmber();
   console.log(randomNumber);
    
   document.body.style.backgroundColor = colors[randomNumber];
   color.textContent = colors[randomNumber]
});
function getRandomNUmber(){
    return Math.floor(Math.random() *colors.length);
}

