export default client => store => next => action => {
  console.log('in middleware', action);
  if (action.remote) {
    client.send(action)
  }
  return next(action);
}
