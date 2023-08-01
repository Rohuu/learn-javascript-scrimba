function saveLead(){
    console.log("clicked by onclick");
}

let inputBtn=document.getElementById("input-btn");
inputBtn.addEventListener("click", function(){
    console.log("click by addEventListener");
})