import { url_base_weather, api_key } from "../constants/api_url";

const getUrlGiphy = find => {
  return `${url_base_weather}?api_key=${api_key}&q=${find}&limit=25&offset=0&rating=g&lang=en`;
};

export default getUrlGiphy;
