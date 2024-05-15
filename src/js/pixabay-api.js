import axios from "axios";

const API_KEY = '43802191-554d301bd26f1aa24348b3f09';

export default async function fetchPhotosByQuery(querySearch, perPage, page) {

    const searchParams = new URLSearchParams({
      key: API_KEY,
      q: querySearch,
      orientation: 'horizontal',
      safesearch: true,
      per_page: perPage,
      page
    });
  
    let URL = `https://pixabay.com/api/?${searchParams}`;

    const res = await axios(URL);
    return res.data;
  }