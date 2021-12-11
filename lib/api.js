export const getStrapiUrl = (path = '') => {
  return `${process.env.NEXT_PUBLIC_STRAPI_URL
  || 'https://jamified-webshop-backend.herokuapp.com'}${path}`
}

export const fetchFromApi = async (path) => {
  const requestUrl = getStrapiUrl(path);
  const response = await fetch(requestUrl);
  return await response.json();
}

export const getStrapiMedia = (media) => {
  if (typeof media !== 'undefined') {
    if (media == null) {
      return '';
    }
    // Return image URL
    return media.url.startsWith('/')
        ? getStrapiUrl(media.url)
        : media.url;
  }
}