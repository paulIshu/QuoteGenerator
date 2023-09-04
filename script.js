const api_url= "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
let list=document.getElementById("data");

async function getQuote(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data); 
    quote.innerHTML=data.content;
    author.innerHTML=data.author;
}

getQuote(api_url);


function tweet(){
    window.open(href="https://twitter.com/intent/tweet?text="+quote.innerHTML + "----by " + author.innerHTML,"TweetWindow","width=600,height=300")
}

//local storage

let tasks = []

function saveTaskList() {

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function retrieveList() {

    // if(count==0)
    // savebtn.disabled = true;
    
  let retrievedTasks = localStorage.getItem("tasks");
  if (retrievedTasks) {
    tasks = JSON.parse(retrievedTasks);
  }
}

function clearTaskList() {
  tasks = [];
  renderTaskList();
  saveTaskList();
}

function renderTaskList() {
  
    // if(count==0)
    // savebtn.disabled = true;

  list.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    let li = document.createElement('li');
    li.innerText = tasks[i];
    list.appendChild(li);
  }
}

function addTask() {

  let task = quote.innerHTML;

  //console.log(task.length);
  if(tasks.includes(task))
  {
      return;
  }
//   count=0;
  if(tasks.length>9)
  tasks.shift();

  tasks.push(task);
  renderTaskList();
  saveTaskList();
}

function save() {

//   countel.textContent=0;
  addTask();
}


retrieveList();
renderTaskList();
