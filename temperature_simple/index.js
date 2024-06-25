const tem = document.getElementById("tem");
const c = document.getElementById("f");
const f = document.getElementById("c");
const sub = document.getElementById("submit");
const res = document.getElementById("res");
let tempe;

sub.onclick = function () {
  console.log(res);
  tempe = Number(tem.value);
  if (c.checked) {
    tempe = (tempe * 9) / 5 + 32;
    res.textContent = tempe.toFixed(1) + "°F";
  } else if (f.checked) {
    tempe = ((tempe - 32) * 5) / 9;
    res.textContent = tempe.toFixed(1) + "°C";
  } else {
    res.textContent = "Select convertion";
  }
};
