function createInputsFunc(tag, attributes = {}) {
  const element = document.createElement(tag);

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
  return element;
}

export default function createInputs() {
  const input = createInputsFunc("input", {
    type: "text",
    placeholder: "Opção",
    required,
  });
  const p = createInputsFunc("p", {});
}
