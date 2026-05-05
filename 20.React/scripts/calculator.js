let calculation = localStorage.getItem("calculation") || ""
function updateCalculation(char) {
  calculation += char;
  document.querySelector(".output").innerHTML = calculation
  localStorage.setItem("calculation", calculation)
  return
}
function remove() {
  calculation = ""
  localStorage.removeItem("calculation")
  document.querySelector(`.output`).innerHTML = ""
}