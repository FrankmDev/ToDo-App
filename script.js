let input = document.querySelector(".inputTask");
let addTask = document.querySelector(".addTask");
let list = document.querySelector("ul");
let empty = document.querySelector(".empty");

addTask.addEventListener("click", function (e) {
  const textInput = input.value;
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
});
