export default function reducer(prevState, action) {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...prevState,
        userData: action.userData,
      };
    case "SIGN_OUT":
      return {
        ...prevState,
        userData: null,
      };
    default:
      return prevState;
  }
}
