// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
// import {
//   auth,
//   signInWithGoogleRedirect,
//   signInWithGoogle,
//   createUserDocument,
// } from "../../utils/firebase/firebase.utils";
import SignUp from "../../components/sign-up-form/Sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.componenet";
import "./authentication.styles.scss";

const SignIn = () => {
  // useEffect(() => {
  //   async function getRedirectResults() {
  //     const response = await getRedirectResult(auth);

  //     if (response) {
  //       console.log(response.user);
  //       const userDocRef = await createUserDocument(response.user);
  //     }
  //   }
  //   getRedirectResults();
  // }, []);

  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGoogle();
  //   const userDocRef = await createUserDocument(user);
  //   console.log(user);
  // };

  // const logGoogleUserWithRedirect = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  //   console.log(user);
  // };

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUp />
    </div>
  );
};

export default SignIn;
