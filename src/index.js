document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault()
    buildToDo(e.target["new-task-description"].value)
  })
});

function buildToDo (todo){
let p = document.createElement("p")
let button = document.createElement("button")
  button.addEventListener("click", handleDelete)
  button.textContent = "Done"
  p.textContent = `${todo} `
  p.appendChild(button)
  console.log(p)
  document.querySelector("#main-content").appendChild(p)
}

function handleDelete(e){
  e.target.parentNode.remove()
}