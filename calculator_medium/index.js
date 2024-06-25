let display = document.getElementById("display");
let check = false;

function cal(input) {
  if (check) {
    display.value = "";
    check = false;
  }
  display.value += input;
}

function reset() {
  display.value = "";
}

function dele() {
  if (check) display.value = "";
  else {
    display.value = display.value.slice(0, display.value.length - 1);
  }
}

function res() {
  if (!check) {
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = "Error";
    }
    check = true;
  }
}
