import axios from 'axios';

export default axios.create({
  baseURL: 'https://ga-mobile-api.loklok.tv/cms/app',
  headers: {
    lang: 'vi',
    versioncode: '11',
    clienttype: 'ios_jike_default',
  },
});
