myLeads=["jhd","jfasfjh","fajkbfasjkkbj"]; 
const inputBtn=document.getElementById("input-btn");
const inputEl=document.getElementById("input-el");
const ulEl=document.getElementById("ul-el"); 

inputBtn.addEventListener("click", function(){
  myLeads.push(inputEl.value);
  console.log(myLeads);  
});

for(let i=0;i< myLeads.length;i++){
    // ulEl.innerHTML += "<li>" +myLeads[i]+ "</li>";  
    // there is an alternative for this innerHTML which has 3 steps:
    // 1. creating element (here li element)  
    // 2. set text content 
    // 3. append to ul  

    let liEl= document.createElement("li");
    liEl.textContent=myLeads[i];
    ulEl.append(liEl);
}