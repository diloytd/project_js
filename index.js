let input = document.querySelector(".input");
let btn = document.querySelector (".btn");
let work = document.querySelector (".work");

btn.onclick = function () {
let list = document.createElement ("li");
list.style.color = "aqua";
list.textContent = input.value;
work.append(list);
input.value ="";
}

 function checkTask(event){
  
     if (event.target.tagName === 'li')
{
    event.target.classList.toggle("checked");
}}
btn.addEventListener("click", checkTask);