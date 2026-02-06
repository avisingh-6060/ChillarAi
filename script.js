let totalSaved = localStorage.getItem("saved")
  ? parseInt(localStorage.getItem("saved"))
  : 0;

document.getElementById("saved").innerText = totalSaved;

let currentSuggestion = 0;

function addExpense() {
  let expense = parseInt(document.getElementById("expense").value);

  if (!expense || expense <= 0) {
    alert("Enter a valid amount");
    return;
  }

  // Smart micro-saving suggestion
  if (expense >= 100) currentSuggestion = 20;
  else if (expense >= 50) currentSuggestion = 10;
  else currentSuggestion = 5;

  document.getElementById("suggestion").innerText =
    `Save ₹${currentSuggestion} today?`;

  document.getElementById("saveBtn").style.display = "inline";
}

function saveChillar() {
  totalSaved += currentSuggestion;
  localStorage.setItem("saved", totalSaved);
  document.getElementById("saved").innerText = totalSaved;

  document.getElementById("suggestion").innerText =
    "Chillar saved successfully ✅";

  document.getElementById("saveBtn").style.display = "none";
  document.getElementById("expense").value = "";
}
