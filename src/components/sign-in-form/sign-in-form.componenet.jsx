import { useState, useContext } from "react";
import {
  createAuthUserWithEmailAndPassword,
  signInWithGoogle,
  createUserDocument,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../context/user.context";
import FormInput from "../form-input/form-input.component";
import "../sign-up-form/sign-up-form.styles.scss";
import Button from "../button/button.component";
const formFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [form, setForm] = useState(formFields);
  const { email, password } = form;

  const { setCurrentUser } = useContext(UserContext);

  const resetForm = () => {
    setForm(formFields);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(form);
  };

  const logGoogleUser = async () => {
    const { user } = await signInWithGoogle();
    await createUserDocument(user);
    console.log(user);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user);
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          required
          onChange={handleChange}
          type="email"
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          required
          onChange={handleChange}
          type="password"
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={logGoogleUser}>
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
