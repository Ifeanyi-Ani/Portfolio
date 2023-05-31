// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");
let input_btn=document.querySelectorAll("input");
let submit_btn=document.getElementById("submit_btn");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}
function remove_active(){
  navigation.classList.remove("active");
  main.classList.remove("active");
}
function feedback(){
  for(let i=0; i<input_btn.length; i++){
    if (input_btn[i].value==""|| input_btn[i].value==null){
      input_btn[i].style.outline="2px solid #bdb8ed";
      return;
    }else{
      input_btn[i].style.outline="none";
    }
  }
  let quick_reply=`Dear ${input_btn[0].value}, your message has been sent successfuly`;
  document.getElementById("respons").innerHTML=quick_reply;
  input_btn[0].value="";
  input_btn[1].value="";
  input_btn[2].value="";
  input_btn[3].value="";
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));
list.forEach((item)=>item.addEventListener("click", remove_active) );
toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};


submit_btn.addEventListener("click",(e)=>{
  e.preventDefault();
  feedback();
})
