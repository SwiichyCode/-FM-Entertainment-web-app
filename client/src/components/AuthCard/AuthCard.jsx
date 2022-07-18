import React from "react";
import { Link } from "react-router-dom";
import { AuthCardWrapper } from "./AuthCard.style";

export default function AuthCard({
  children,
  title,
  subLinkText,
  linkText,
  route,
}) {
  return (
    <AuthCardWrapper>
      <h1 className="card-title">{title}</h1>
      {children}
      <div className="auth-link">
        <span>{subLinkText}</span> <Link to={route}>{linkText}</Link>
      </div>
    </AuthCardWrapper>
  );
}
