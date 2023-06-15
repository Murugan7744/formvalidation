var input=document.querySelectorAll(".page");

var btn=document.getElementById("btn");


btn.addEventListener("click", function(){

input.forEach(function(inpt){

      var b=inpt.value;
      if(b=="")
            {
              inpt.parentNode.nextElementSibling.classList.add("view");
            }
      else{
            inpt.parentNode.nextElementSibling.classList.remove("view");
      }      
})

var pass=document.getElementById("pass");
var cp=document.getElementById("cp");
var name=cp.value;
var type=pass.value;
var c=type.split("");
var s=0;
var d=c.length;

c.forEach(function(e){
      if(e==" "){
            s++;
      }})
      if(s>=1){
            
            pass.parentNode.nextElementSibling.nextElementSibling.classList.add("view");
      }
      else{
            pass.parentNode.nextElementSibling.nextElementSibling.classList.remove("view");
      
      }
      if(d<8){
            
            pass.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.classList.add("view");
      }
      else{
            pass.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove("view");
      
      }
      if(name!==type){
            
            cp.parentNode.nextElementSibling.nextElementSibling.classList.add("view");
      }
      else{
            cp.parentNode.nextElementSibling.nextElementSibling.classList.remove("view");
      
      }


})





