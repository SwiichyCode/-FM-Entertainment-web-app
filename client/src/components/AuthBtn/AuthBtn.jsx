import React from "react";
import { AuthBtnWrapper } from "./AuthBtn.style";

export default function AuthBtn({ text, action, type, disabled }) {
  return (
    <AuthBtnWrapper onClick={action} type={type} disabled={disabled}>
      {text}
    </AuthBtnWrapper>
  );
}
