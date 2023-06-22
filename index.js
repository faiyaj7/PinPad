const loginNumber = 5345;
let input = "";

const inputByValue = document.getElementById("login_input");

const inputConcat = (e) => {
  if (input.length <= inputByValue.getAttribute("maxlength") - 1) {
    inputByValue.classList.remove("login_input_error");
    input += e.dataset.numpad;
    inputByValue.value = input;
  }
};

const directInput = (e) => {
  inputByValue.classList.remove("login_input_error");
  input += e.value;
};

const deleteValue = () => {
  input = input.slice(0, input.length - 1);
  inputByValue.value = input;
};

const checkLoginPin = () => {
  if (Number(input) === loginNumber) {
    console.log("right");
    h1.textContent = "Your logged in";
  } else if (Number(input) !== loginNumber) {
    console.log("wrong");
    inputByValue.classList.add("login_input_error");
    input = "";
  }
};
