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
      };
    case "EDIT":
      return {
        ...prevState,
        userData: action.userData,
      };
    case "JOIN_EVENT":
      return {
        ...prevState,
        participations: prevState.participations + 1,
      };
    default:
      return prevState;
  }
}
