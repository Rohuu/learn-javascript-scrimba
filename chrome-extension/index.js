myLeads=[]; 
const inputBtn=document.getElementById("input-btn");
const inputEl=document.getElementById("input-el"); 
const ulEl=document.getElementById("ul-el"); 

inputBtn.addEventListener("click", function(){
  myLeads.push(inputEl.value);
  renderLeads();
  inputEl.value="";
});

function renderLeads(){
  listItems="";
  for(let i=0;i< myLeads.length;i++){
      // listItems += "<li> <a href='https://www.google.com/' target='_blank'>" + myLeads[i]+ "</a> </li>";  
      // or we can use back tick string and then inside that write normal HTML
      listItems += `<li> 
                        <a href="https://www.google.com/" target="_blank">  ${myLeads[i]} </a>
                    </li>`;  
  }
  ulEl.innerHTML=listItems;
}