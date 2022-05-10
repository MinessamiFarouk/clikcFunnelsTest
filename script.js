//counter number one
let root = document.querySelector(".counter");
let heure = root.children[0];
let min = root.children[1];
let sec = root.children[2];

const countDown = (heure, min, sec) => {
  const count = setInterval(() => {
    +sec.textContent--;

    if (
      +heure.textContent === 0 &&
      +min.textContent === 0 &&
      +sec.textContent === 0
    ) {
      return clearInterval(countDown);
    }

    if (+sec.textContent === 0) {
      sec.textContent = 59;
      +min.textContent--;
      if (+min.textContent === 0 && +heure.textContent === 0) {
        return;
      }
      if (+min.textContent === 0) {
        min.textContent = 59;
        if (+heure.textContent === 0) {
          return;
        }
        +heure.textContent--;
      }
    }
  }, 1000);
};

countDown(heure, min, sec);

//counter number two
let rootTwo = document.querySelector(".counterTwo");
let heure_ = rootTwo.children[0];
let minut = rootTwo.children[1];
let secind = rootTwo.children[2];

const boxArticle = [...document.getElementsByTagName("article")];

// create function add class in dropdown
const add_class_element = (element, name_class) => {
  element.classList.add(name_class);
};
// create function remove class in dropdown
const remove_class_element = (element, name_class) => {
  element.classList.remove(name_class);
};
// create function toggle class in dropdown
const toggle_class_element = (element, name_class) => {
  element.classList.toggle(name_class);
};

//counter call
countDown(heure_, minut, secind);

boxArticle.forEach((article) => {
  article.firstElementChild.addEventListener("click", (e) => {
    if (article.classList.contains("max-height")) {
      remove_class_element(article, "max-height");
      return;
    }
    let remove_class = document.querySelector(".max-height");
    if (remove_class) remove_class_element(remove_class, "max-height");
    add_class_element(article, "max-height");
  });
});
