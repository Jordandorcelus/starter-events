const increment = document.querySelector(".increment");

const decrement = document.querySelector(".decrement");

const allIncrements = document.querySelectorAll(".increment");

const todoDecrements = document.querySelectorAll(".decrement");


let addAndRemoveCheck = false;

function addAndRemoveHandler() {
  const hearts = document.querySelectorAll(".hearts");

  if(addAndRemoveCheck) return;

  // const allIncrements = document.querySelectorAll(".increment");
  allIncrements.forEach(plusEle => {
  plusEle.addEventListener("click", (event) => {
    const article = event.target.closest("article");
    const heart = article.querySelector(".hearts");
    heart.textContent += "❤";

    console.log("event.target:", event.target);
  });
});

todoDecrements.forEach(minusEle => {
  minusEle.addEventListener("click", (event) => {
    const article = event.target.closest("article");
    const heart = article.querySelector(".hearts");
    heart.textContent = heart.textContent.slice(0, -1);

    console.log("event.target:", event.target);
  });
});

  addAndRemoveCheck = true;

}

increment.addEventListener("click", addAndRemoveHandler());
decrement.addEventListener("click", addAndRemoveHandler());


