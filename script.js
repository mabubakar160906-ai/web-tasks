let count=0;
const counter = document.getElementById("counter");
const addbtn = document.getElementById("addbtn");
const removebtn = document.getElementById("removebtn");

addbtn .addEventListener("click", function (){
  count = count + 1;
  counter.innerText = count;  
});
removebtn.addEventListener("click", function () {
  if (count > 0) {
    count = count - 1;
    counter.innerText = count;
  }
});
