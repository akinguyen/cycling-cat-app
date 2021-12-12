export default function reducer(prevState, action) {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...prevState,
        userData: action.userData,
        isSignedIn: true,
      };
    case "SIGN_OUT":
      return {
        ...prevState,
        isSignedIn: false,
        userData: null,
      };
    default:
      return prevState;
  }
}
