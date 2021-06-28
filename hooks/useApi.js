import axios from 'axios';
import useSWR from 'swr';

export function getStrapiURL(path = '') {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${path}`;
}

export function fetcherAxios(path) {
  const url = getStrapiURL(path);
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  return { fetcher };
}
