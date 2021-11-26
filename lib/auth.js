export const isAuthenticated = (req) => {
  // Authentication logic here
  return req.session;
}
