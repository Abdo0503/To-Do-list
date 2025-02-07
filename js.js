
let btn = document.getElementById("push");
let list = document.getElementById("list");

btn.addEventListener("click", () => {
    let text = document.getElementById("text").value;
    if (text == "") {
        alert("please write your task...");
    } else {
        let to_do = document.createElement("div");
        to_do.classList.add("to-do");
        let p = document.createElement("p");
        p.innerHTML = text;
        to_do.appendChild(p);
        let span = document.createElement("span");
        to_do.appendChild(span);
        let bot = document.createElement("button");
        bot.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
        span.appendChild(bot);
        list.appendChild(to_do);
        bot.addEventListener("click", () => {
            list.removeChild(to_do);
        });
        p.addEventListener("click", () => {
            p.classList.toggle("complete");
        });
        document.getElementById("text").value = ""; 
    }
});