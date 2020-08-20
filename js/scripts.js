let addBtn = document.getElementById("add");
let main = document.querySelector("main");
let input = document.getElementById("input");
let span = document.querySelector("span");

// list creation
function createList() {
  let markBtn = document.createElement("button");
  let deleteBtn = document.createElement("button");
  let listDiv = document.createElement("div");
  let dates = new Date();
  let newDate =
    dates.getMonth() + "." + dates.getDate() + "." + dates.getFullYear();
  let days = document.createElement("small");
  days.innerHTML = newDate;
  listDiv.innerHTML = `<p contenteditable="true"> ${input.value}</p>`;
  main.appendChild(listDiv);
  markBtn.innerHTML = "&#x2705;";
  deleteBtn.innerHTML = "&#x274C;";
  listDiv.appendChild(days);
  listDiv.appendChild(markBtn);
  listDiv.appendChild(deleteBtn);

  // mark button
  markBtn.addEventListener("click", function () {
    if (listDiv.classList.contains("marked")) {
      listDiv.classList.remove("marked");
    } else {
      listDiv.classList.add("marked");
    }
  });

  // delete button
  deleteBtn.addEventListener("click", function () {
    main.removeChild(listDiv);
  });
}

// click event
addBtn.addEventListener("click", function () {
  input.value.length == 0 || Number(input.value) == ""
    ? (span.style.display = "unset")
    : createList();
});

// keyboard event
// input.addEventListener("keypress", function (event) {
//   if (input.value.length != 0 && event.keyCode == 13) {
//     createList();
//   } else {
//     span.style.display = "unset";
//   }
// });
