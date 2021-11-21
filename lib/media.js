import {getStrapiUrl} from './api';

export function getStrapiMedia(media) {
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