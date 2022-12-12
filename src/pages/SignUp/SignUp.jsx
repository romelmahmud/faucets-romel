import {
  Form,
  FormButton,
  FormContainer,
  FormFooter,
  FormTitle,
  InputField,
  Wrapper,
} from "../../shared";

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
              text="Already have an account?"
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
