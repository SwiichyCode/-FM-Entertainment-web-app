import React from "react";
import { Formik, Form } from "formik";

import AuthBtn from "../../components/AuthBtn/AuthBtn";
import AuthCard from "../../components/AuthCard/AuthCard";
import AuthLayout from "../../layouts/AuthLayout";
import AuthInput from "../../components/AuthInput/AuthInput";
import { SignupWrapper } from "./Signup.style";
import {
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from "./validateSchema";

export default function Signup() {
  return (
    <AuthLayout>
      <AuthCard
        title={"Sign Up"}
        subLinkText={"Already have an account?"}
        linkText={"Login"}
        route={"/login"}
      >
        <SignupWrapper>
          <Formik
            initialValues={{ email: "", password: "", confirmPassword: "" }}
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

                  <AuthInput
                    type={"password"}
                    name={"confirmPassword"}
                    placeholder={"Repeat password"}
                    validate={(value) =>
                      validateConfirmPassword(values.password, value)
                    }
                  />
                </div>
                <AuthBtn text={"Create an account"} type={"submit"} />
              </Form>
            )}
          </Formik>
        </SignupWrapper>
      </AuthCard>
    </AuthLayout>
  );
}
