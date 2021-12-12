export const isAuthenticated = (req) => {
  // Authentication logic here
  return req.session;
}

export const isAuthorized = (req) => {
  // Authorization logic here, e.g. req.session.role === 'admin'
  return req.session;
}
