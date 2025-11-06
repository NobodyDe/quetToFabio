const form = document.querySelector("form");
const footer = document.querySelector("footer");
const buttonMore = document.querySelector(".more");
const options = document.querySelector(".options");

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

  function addChildren(children = []) {
    children.map((children) => options.appendChild(children));
  }

  addChildren([p, input]);
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
