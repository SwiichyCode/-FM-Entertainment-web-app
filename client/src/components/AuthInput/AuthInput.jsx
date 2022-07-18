import { ErrorMessage, Field } from "formik";
import React from "react";
import { AuthInputWrapper } from "./AuthInput.style";

export default function AuthInput({ type, name, placeholder, validate }) {
  return (
    <AuthInputWrapper>
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        validate={validate}
      />
      <ErrorMessage component="span" name={name} />
    </AuthInputWrapper>
  );
}
