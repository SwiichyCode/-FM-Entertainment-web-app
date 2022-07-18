import React from "react";
import { Formik, Form } from "formik";

import AuthBtn from "../../components/AuthBtn/AuthBtn";
import AuthCard from "../../components/AuthCard/AuthCard";
import AuthLayout from "../../layouts/AuthLayout";
import AuthInput from "../../components/AuthInput/AuthInput";
import { LoginWrapper } from "./Login.style";
import { validateEmail, validatePassword } from "./validateSchema";

export default function Login() {
  return (
    <AuthLayout>
      <AuthCard
        title={"Login"}
        subLinkText={"Don’t have an account?"}
        linkText={"Sign Up"}
        route={"/signup"}
      >
        <LoginWrapper>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ values }) => (
              <Form>
                <div className="input-container">
                  <AuthInput
                    type={"email"}
                    name={"email"}
                    placeholder={"Email address"}
                    validate={validateEmail}
                  />

                  <AuthInput
                    type={"password"}
                    name={"password"}
                    placeholder={"Password"}
                    validate={validatePassword}
                  />
                </div>
                <AuthBtn text={"Login to your account"} type={"submit"} />
              </Form>
            )}
          </Formik>
        </LoginWrapper>
      </AuthCard>
    </AuthLayout>
  );
}
