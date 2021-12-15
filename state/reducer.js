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
    case "PLUS_EVENT_COUNT":
      return {
        ...prevState,
        eventCount: prevState.eventCount + 1,
      };
    case "JOIN_OR_NOT":
      return {
        ...prevState,
        not: prevState.not + "joined",
      };
    default:
      return prevState;
  }
}
