const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const increaseBtn = document.getElementById("increase");
const value = document.getElementById("value");
console.log(decreaseBtn,increaseBtn,resetBtn,value)

let count = 0;
currentCount();

decreaseBtn.addEventListener("click", ()=>{
    count--;
    currentCount();
});
increaseBtn.addEventListener("click", ()=>{
    count++;
    currentCount();
});
resetBtn.addEventListener("click",()=>{
    count = 0;
    currentCount();
})
function currentCount(){
    value.innerText =count;}
    
