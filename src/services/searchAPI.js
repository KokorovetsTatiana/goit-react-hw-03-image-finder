import axios from 'axios';

const key = '21742684-2124d89228f195892f61b714b';

const searchAPI = ({ query = '', page = 1 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(({ data }) => data.hits);
};

export default searchAPI;