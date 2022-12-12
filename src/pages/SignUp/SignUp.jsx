import React from "react";
import Form from "../../shared/Form/Form";
import FormButton from "../../shared/FormButton/FormButton";
import FormContainer from "../../shared/FormContainer/FormContainer";
import FormFooter from "../../shared/FormFooter/FormFooter";
import FormTitle from "../../shared/FormTitle/FormTitle";
import InputField from "../../shared/InputField/InputField";
import Wrapper from "../../shared/Wrapper/Wrapper";

const SignUp = () => {
  return (
    <>
      <Wrapper>
        <FormContainer>
          <Form>
            <FormTitle title="Sign Up" />
            <form>
              <InputField type="email" />
              <InputField type="password" />
              <FormButton text="Sign Up" />
            </form>
            <FormFooter
              text="Already Have an account?"
              linkText="Login"
              route="login"
            />
          </Form>
        </FormContainer>
      </Wrapper>
    </>
  );
};

export default SignUp;
