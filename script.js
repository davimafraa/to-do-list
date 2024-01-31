const searchBtn = document.querySelector(".search-btn");
const input = document.querySelector(".input");
const taskList = document.querySelector(".task-list");
const errorMsg = document.getElementById("error");

searchBtn.addEventListener("click", () => {
  if (input.value == "")
    errorMsg.innerHTML = "You must type something...";
  else {
    errorMsg.innerHTML = "";
    let task = document.createElement("li");
    task.innerHTML = input.value;
    taskList.appendChild(task);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    task.appendChild(span);
  }
  input.value = '';
});

input.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        if (input.value == "")
            errorMsg.innerHTML = "You must type something...";
        else {
            errorMsg.innerHTML = "";
            let task = document.createElement("li");
            task.innerHTML = input.value;
            taskList.appendChild(task);

            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            task.appendChild(span);
      }
      input.value = '';
    }
});

taskList.addEventListener("click", (e)=>{
  if (e.target.tagName == "LI")
    e.target.classList.toggle("checked");
  else if (e.target.tagName == "SPAN")
    e.target.parentElement.remove();
});