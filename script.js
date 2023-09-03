let input = document.querySelector(".inputTask");
let addTask = document.querySelector(".addTask");
let list = document.querySelector("ul");
let empty = document.querySelector(".empty");

function addTaskToList() {
  const textInput = input.value;
  if (textInput.trim() !== "") {
    const listItem = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = textInput;
    listItem.appendChild(p);
    list.appendChild(listItem);

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.className = "removeBtn";
    listItem.appendChild(removeBtn);

    removeBtn.addEventListener("click", function () {
      list.removeChild(listItem);
    });
  }
  input.value = "";
}

addTask.addEventListener("click", addTaskToList);
input.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    addTaskToList();
  }
});
