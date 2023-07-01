
const inputs = document.querySelectorAll("input");

/*const passwordField = document.getElementById("password");*/
/* Definimos expresiones regulares */
const patterns = {
  nombre: /^[a-z\d]{5,12}$/i,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  /*userpass: /^[\w@_-]{8,30}$/i,*/
  /*phone: /^\d{9}$/,*/
};
const validate = (field, regex) => {
  const valid = regex.test(field.value);
  if (valid) {
    // Añade un marco verde cuando es válido
    field.className = "form-control is-valid";
  } else {
    // Añade un marco rojo cuando no es válido
    field.className = "form-control is-invalid";
  }
};
inputs.forEach((input) => {
  // Asignando un evento cuando el usuario escriba dentro de un input
  input.addEventListener("keyup", (e) => {
    // Hace la validación
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});
