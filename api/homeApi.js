import axios from './index';

export const getHomeApi = async () => {
  const res = await axios.get('/homePage/getHome', {params: {page: 0}});
  const data = res.data;
  return data.data.recommendItems.filter(
    items => items.homeSectionType === 'SINGLE_ALBUM',
  );
};

export const getDetailApi = async (id, category) => {
  const res = await axios.get('/movieDrama/get', {params: {id, category}});
  return res.data.data;
};

export const getMediaApi = async ({
  category,
  contentId,
  episodeId,
  definition,
}) => {
  const res = await axios.get('/media/previewInfo', {
    params: {category, contentId, episodeId, definition},
  });
  return res.data.data;
};
