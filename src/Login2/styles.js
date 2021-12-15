axios.post("https://cycling-cat-api.herokuapp.com/events/join", {
  eventId: id,
  userId: state.userData.id,
});
