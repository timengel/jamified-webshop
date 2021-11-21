export function getStrapiUrl(path = '') {
  return `${process.env.NEXT_PUBLIC_STRAPI_URL
  // || 'http://localhost:1337'}${path}`
  || 'https://jamified-webshop-backend.herokuapp.com'}${path}`
}

export async function fetchApi(path) {
  const requestUrl = getStrapiUrl(path);
  const response = await fetch(requestUrl);
  return await response.json();
}