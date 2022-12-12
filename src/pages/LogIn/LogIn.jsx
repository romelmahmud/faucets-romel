import {
  Form,
  FormButton,
  FormContainer,
  FormFooter,
  FormTitle,
  InputField,
  Wrapper,
} from "../../shared";

const LogIn = () => {
  return (
    <>
      <Wrapper>
        <FormContainer>
          <Form>
            <FormTitle title="Log In" />
            <form>
              <InputField type="email" />
              <InputField type="password" />
              <FormButton text="Login" />
            </form>
            <FormFooter
              text="Don't have an account?"
              linkText="Signup"
              route="signup"
            />
          </Form>
        </FormContainer>
      </Wrapper>
    </>
  );
};

export default LogIn;
