const form = document.querySelector("form");
const container = document.querySelector("#container");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const newList = document.createElement("div");
  newList.classList.add("card");

  const newinput = document.createElement("input");
  newinput.setAttribute("type", "text");
  newinput.setAttribute("value", event.target.querySelector("#newlist").value);
  newinput.setAttribute("readonly", true);
  newinput.classList.add("newlist");

  const newdate = document.createElement("input");
  newdate.setAttribute("type", "datetime-local");
  newdate.setAttribute("value", event.target.querySelector("#date").value);
  newdate.setAttribute("readonly", true);
  newdate.classList.add("date");

  const newchange = document.createElement("button");
  newchange.textContent = "📝";
  newchange.classList = "change";

  const newremove = document.createElement("button");
  newremove.classList = "remove";
  newremove.textContent = "🗑️";

  newList.appendChild(newinput);
  newList.appendChild(newdate);
  newList.appendChild(newchange); // Thêm nút change vào newList
  newList.appendChild(newremove); // Thêm nút remove vào newList

  container.insertBefore(newList, form);

  newremove.addEventListener("click", (event) => {
    event.preventDefault();
    event.target.parentElement.remove();
  });

  newchange.addEventListener("click", (event) => {
    event.preventDefault();
    const input = event.target.parentElement.querySelector(".newlist");
    const date = event.target.parentElement.querySelector(".date");
    if (input.readOnly) {
      input.readOnly = false;
      date.readOnly = false;
      event.target.textContent = "🗳️";
      event.target.classList.toggle("change1");
    } else {
      input.readOnly = true;
      date.readOnly = true;
      event.target.textContent = "📝";
      event.target.classList.toggle("change1");
    }
  });

  const checkTime = setInterval(() => {
    let now = new Date(newdate.value);
    let currentTime = new Date();

    if (now.getTime() === currentTime.getTime()) {
      newdate.parentElement.remove();
      clearInterval(checkTime);
    } else if (now.getTime() < currentTime.getTime()) {
      clearInterval(checkTime);

      let res = `music${Math.floor(Math.random() * 2 + 1)}.mp3`;
      let music = document.createElement("audio");
      music.setAttribute("autoplay", true); // Tự động phát khi sẵn sàng

      newdate.parentElement.appendChild(music);
      newchange.remove();
      const a = document.createElement("span");
      a.textContent = "🔉";
      newdate.parentElement.appendChild(a);

      setTimeout(() => {
        newdate.parentElement.querySelector("audio").setAttribute("src", res);
      }, 1000); // Đợi 1 giây trước khi thiết lập src

      music.addEventListener("ended", () => {
        newdate.parentElement.removeChild(music); // Xóa đối tượng audio sau khi phát xong
        newdate.parentElement.remove();
      });
    }
  }, 1000);

  form.reset();
});
