const is1 = document.getElementById("is1");
const ds1 = document.getElementById("ds1");
const rs1 = document.getElementById("rs1");
const first = document.getElementById("first");
let count1 = 0;

const is2 = document.getElementById("is2");
const ds2 = document.getElementById("ds2");
const rs2 = document.getElementById("rs2");
const second = document.getElementById("second");
let count2 = 0;

const ch = document.getElementById("ch");
const rs = document.getElementById("rs");
const math = document.getElementById("math");
let count = 0;
let a = {
  0: "+",
  1: "-",
  2: "*",
  3: "/",
  4: "%",
  5: "**",
};

const res = document.getElementById("res");
const result = document.getElementById("result");
let show = 0;

is1.onclick = function () {
  count1++;
  first.textContent = count1;
};
ds1.onclick = function () {
  count1--;
  first.textContent = count1;
};
rs1.onclick = function () {
  count1 = 0;
  first.textContent = count1;
};

is2.onclick = function () {
  count2++;
  second.textContent = count2;
};
ds2.onclick = function () {
  count2--;
  second.textContent = count2;
};
rs2.onclick = function () {
  count2 = 0;
  second.textContent = count2;
};

ch.onclick = function () {
  count++;
  if (count > 5) count = 0;
  math.textContent = a[count];
};
rs.onclick = function () {
  count = 0;
  math.textContent = a[count];
};

res.onclick = function () {
  if (count == 3 && count2 == 0) result.textContent = "Error";
  else {
    switch (count) {
      case 0:
        show = count1 + count2;
        break;
      case 1:
        show = count1 - count2;
        break;
      case 2:
        show = count1 * count2;
        break;
      case 3:
        show = count1 / count2;
        break;
      case 4:
        show = count1 % count2;
        break;
      case 5:
        show = count1 ** count2;
        break;
    }
    result.textContent = show;
    show = 0;
  }
};
