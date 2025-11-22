const form = document.querySelector("form");
const footer = document.querySelector("footer");
const buttonMore = document.querySelector(".more");
const buttonLess = document.querySelector(".less");
const options = document.querySelector(".options");
const lastItem = document.querySelector("#lasted");

buttonLess.addEventListener("click", (e) => {
  e.preventDefault();
  const deleteOptions = document.querySelectorAll(".options > *");

  if (deleteOptions.length > 0) {
    deleteOptions[0].remove();
  }
  if (deleteOptions.length > 1) {
    deleteOptions[1].remove();
  }

  console.log(deleteOptions);
});

buttonMore.addEventListener("click", (e) => {
  e.preventDefault();
  function createInputsFunc(tag, attributes = {}) {
    const element = document.createElement(tag);

    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
    return element;
  }

  const input = createInputsFunc("input", {
    type: "text",
    placeholder: "Opção",
    required: "True",
  });

  const p = createInputsFunc("p", {});
  p.innerHTML = "vs";

  //options.insertBefore(p, lastItem);

  function addChildren(children = [], lastedItem) {
    children.map((children) => options.insertBefore(children, lastedItem));
  }

  addChildren([input, p], lastItem);
});

form.onsubmit = (event) => {
  event.preventDefault();
  const input = document.querySelectorAll("input");
  const values = [...input].map((input) => input.value);
  const ramdomResult = Math.floor(Math.random() * values.length);
  console.log(values[ramdomResult]);

  footer.removeAttribute("class");
  const result = document.querySelector(".result");
  result.innerHTML = values[ramdomResult];
};
