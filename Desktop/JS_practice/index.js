const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");


form.addEventListener("submit", function (event) {
  event.preventDefault();
  add();
})

function add() {
  let todoText = input.value;
  if(todoText) {
  const li = document.createElement("li");
  li.innerText = input.value;
  li.classList.add("list-group-item");
  ul.appendChild(li);
  input.value = "";
   saveDate();
  }
}

function saveDate() {
  const lists = document.querySelectorAll("li");
  lists.forEach(List => {
    console.log(list.innerText);
  })
}
