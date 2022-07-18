export const validateEmail = (value) => {
  let error;
  if (!value) {
    error = "Can't be empty";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
};

export const validatePassword = (values) => {
  let error = "";
  const passwordRegex = /(?=.*[0-9])/;
  if (!values) {
    error = "Can't be empty";
  } else if (values.length < 8) {
    error = "*Password must be 8 characters long.";
  } else if (!passwordRegex.test(values)) {
    error = "*Invalid password. Must contain one number.";
  }
  return error;
};

export const validateConfirmPassword = (pass, value) => {
  let error = "";
  if (pass && value) {
    if (pass !== value) {
      error = "Password not matched";
    }
  }
  return error;
};
