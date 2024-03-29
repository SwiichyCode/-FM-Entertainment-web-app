export const validateEmail = (value) => {
  let error;
  if (!value) {
    error = "Can't be empty";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
};

export const validatePassword = (value) => {
  let error;
  if (!value) {
    error = "Can't be empty";
  }

  return error;
};
