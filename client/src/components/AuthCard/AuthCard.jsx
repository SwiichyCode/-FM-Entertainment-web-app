import React from "react";
import { Link } from "react-router-dom";
import { AuthCardWrapper } from "./AuthCard.style";
import Logo from "../../assets/logo.svg";

export default function AuthCard({
  children,
  title,
  subLinkText,
  linkText,
  route,
}) {
  return (
    <AuthCardWrapper>
      <img src={Logo} alt="logo" />
      <h1 className="card-title">{title}</h1>
      {children}
      <div className="auth-link">
        <span>{subLinkText}</span> <Link to={route}>{linkText}</Link>
      </div>
    </AuthCardWrapper>
  );
}
