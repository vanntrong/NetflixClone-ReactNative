import axios from './index';

export const getTopSearchApi = async () => {
  const res = await axios.get('/search/v1/searchLeaderboard');
  return res.data.data.list;
};

export const searchWithKeyWordApi = async keyword => {
  const res = await axios.post('/search/v1/searchWithKeyWord', {
    searchKeyWord: keyword,
    size: 50,
    sort: '',
    searchType: '',
  });
  return res.data.data.searchResults;
};
