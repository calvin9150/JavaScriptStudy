const inputForm = document.querySelector(".inputForm");
const inputValue = inputForm.querySelector("input");
const toDoList = document.querySelector(".toDoList");
const deleteBtn = document.querySelector(".delete");
let post;
let del;

function handleSubmit(e) {
  e.preventDefault();
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  let span = document.createElement("span");
  delBtn.className = "delete";
  span.innerText = inputValue.value;
  delBtn.innerHTML = '<i class="fas fa-times-circle"></i>';
  li.append(span);
  li.append(delBtn);
  toDoList.appendChild(li);
}

function deleteList() {
  del = document.querySelector("li");
  del.remove();
}

inputForm.addEventListener("submit", handleSubmit);
deleteBtn.addEventListener("click", deleteList);
