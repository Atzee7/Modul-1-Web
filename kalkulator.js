function insert(num) {
  document.getElementById("result").value += num;
}

function clearScreen() {
  document.getElementById("result").value = "";
}

function deleteLast() {
  let input = document.getElementById("result").value;
  document.getElementById("result").value = input.slice(0, -1);
}

function calculate() {
  let expression = document.getElementById("result").value;
  if (expression) {
    document.getElementById("result").value = eval(expression);
  }
}
