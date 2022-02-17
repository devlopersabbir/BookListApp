const title = document.getElementById("title");
const auth = document.getElementById("auth");
const year = document.getElementById("year");
const addBtn = document.getElementById("addBtn");
const tBody = document.getElementById("tBody");

const formId = document.getElementById("formId");

let count = 1;
addBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const titleValue = title.value;
  const authValue = auth.value;
  const yearValue = year.value;

  if (titleValue == "") {
    alert("Please fill title box!");
  } else if (authValue == "") {
    alert("please fill author box");
  } else if (yearValue == "") {
    alert("Please fill year box");
  } else {
    const trCreate = document.createElement("tr");
    tBody.appendChild(trCreate);

    const thNo = document.createElement("th");
    thNo.setAttribute("scope", "row");
    thNo.innerHTML = count++;
    trCreate.appendChild(thNo);

    const thTitle = document.createElement("td");
    thTitle.innerHTML = `${titleValue}`;
    trCreate.appendChild(thTitle);

    const thAuthor = document.createElement("td");
    thAuthor.innerHTML = `${authValue}`;
    trCreate.appendChild(thAuthor);

    const thYear = document.createElement("td");
    thYear.innerHTML = `${yearValue}`;
    trCreate.appendChild(thYear);

    function clearFild() {
      title.value = "";
      auth.value = "";
      year.value = "";
    }
    clearFild();
  }
});

// function enterButton(e) {
//   if (e.key == "Enter") {
//
//   }
// }

// formId.addEventListener("keyup", enterButton);
