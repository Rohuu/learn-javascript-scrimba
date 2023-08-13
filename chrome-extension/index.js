myLeads=[]; 
const inputBtn=document.getElementById("input-btn");
const inputEl=document.getElementById("input-el"); 
const ulEl=document.getElementById("ul-el"); 
const deleteBtn=document.getElementById("delete-btn");

let leadsFromLocalStorage= JSON.parse(localStorage.getItem("myLeads"));
if(leadsFromLocalStorage){
  myLeads=leadsFromLocalStorage;
  render(myLeads); 
}

function render(leads){
  listItems="";
  for(let i=0;i< leads.length;i++){ 
      // listItems += "<li> <a href='https://www.google.com/' target='_blank'>" + myLeads[i]+ "</a> </li>";  
      // or we can use back tick string and then inside that write normal HTML
      listItems += `<li> 
                        <a href="https://www.google.com/" target="_blank">  ${leads[i]} </a>
                    </li>`;  
  }
  ulEl.innerHTML=listItems;
} 

deleteBtn.addEventListener("dblclick", function(){
  localStorage.clear();
  myLeads=[];
  render(myLeads);
});

inputBtn.addEventListener("click", function(){
  myLeads.push(inputEl.value);
  inputEl.value="";
  localStorage.setItem("myLeads",JSON.stringify(myLeads));
  render(myLeads);
});

