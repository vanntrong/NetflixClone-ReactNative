import {useEffect, useRef, useState} from 'react';
import {searchWithKeyWordApi} from '../api/searchApi';

const useSearchMovie = searchText => {
  const [searchResult, setSearchResult] = useState([]);
  const typingTimeout = useRef(null);
  useEffect(() => {
    if (typingTimeout.current) {
      clearTimeout(typingTimeout.current);
    }
    typingTimeout.current = setTimeout(async () => {
      if (searchText.trim().length === 0) {
        setSearchResult([]);
      } else {
        const res = await searchWithKeyWordApi(searchText);
        setSearchResult(res);
      }
    }, 500);
  }, [searchText]);

  return {
    searchResult,
    setSearchResult,
  };
};

export default useSearchMovie;
