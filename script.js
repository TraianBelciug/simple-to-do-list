document
  .querySelector("#addButton")
  .addEventListener("click", function addButton() {
    let lst = document.querySelector("#list");

    let btn = document.createElement("button");
    btn.classList.add("toggleStatus");
    btn.innerText = "done";
    btn.addEventListener("click", function e() {
      btn.parentElement.classList.toggle("done");
      if (btn.innerText == "done") {
        btn.innerText = "not done";
      } else {
        btn.innerText = "done";
      }
    });

    let spn = document.createElement("span");
    let inp = document.getElementById("new").value;
    spn.innerText = inp;
    if (inp == "") {
      alert("You forgot to write something you silly!");
      return false;
    }

    let dv = document.createElement("div");
    dv.append(spn, btn);

    lst.appendChild(dv);

    const inptfld = document.querySelector("#new");
    inptfld.value = "";
  });

//------------------------------------------------------------------------------
document.querySelector("#new").addEventListener("keyup", function (event) {
  if (event.code === "Enter") {
    event.preventDefault();
    document.querySelector("#addButton").click();
  }
});
document.getElementById("addButton").onclick = addButton;
//-------------------------------------------------------------------------------

document.querySelector("#mark").addEventListener("click", function () {
  let bttn = document.querySelectorAll(".toggleStatus");
  for (let i = 0; i < bttn.length; i++) {
    if (bttn[i].parentElement.classList == 0) {
      bttn[i].parentElement.classList.toggle("done");
      bttn[i].innerText = "not done";
    }
  }
});

let flt = document.querySelector("#filterBox");
flt.addEventListener("input", () => {
  let list = document.querySelector("#list").children;
  let filter = flt.value.toUpperCase();
  for (let i = 0; i < list.length; i++) {
    let x = list[i];
    let txtValue = x.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      list[i].style.display = "";
    } else {
      list[i].style.display = "none";
    }
  }
});
