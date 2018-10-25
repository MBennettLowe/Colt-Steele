//Setting up Events for just the first LI
/* var firstLI = document.querySelector("li");

firstLI.addEventListener("mouseover", function(){
  firstLI.style.color = "green"; 
});

firstLI.addEventListener("mouseout", function() {
  firstLI.style.color = "black";
}) */

//Setting up Events for all of the LI's 
var lis = document.querySelectorAll("li");

for(var i = 0; i < lis.length; i++){
  lis[i].addEventListener("mouseover", function(){
    this.style.color = "green"; 
});

  lis[i].addEventListener("mouseout", function(){
    this.style.color = "black"; 
  });

  lis[i].addEventListener("click", function(){
    this.classList.toggle("done");
  });

}