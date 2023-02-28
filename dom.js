const container = document.querySelector(".container");

const paragraph = document.createElement("p");
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = "red";

container.appendChild(paragraph);

const headingBlue = document.createElement("h3");
headingBlue.textContent = "I'm a blue h3!";
headingBlue.style.color = "blue";

container.appendChild(headingBlue);

const div = document.createElement("div");
div.setAttribute("style", "border: 1px solid black; background-color: pink;");



container.appendChild(div);