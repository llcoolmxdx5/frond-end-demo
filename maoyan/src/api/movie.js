import { get } from "./http";

export const movieOnInfoList = params => {
  let url = "/api/ajax/movieOnInfoList?token=";
  return get({ url, params });
};

export const moreComingList = params => {
  let url = "/api/ajax/moreComingList";
  return get({ url, params });
};

//ajax/mostExpected?ci=50&limit=10&offset=0&token=

export const getMostExpectlist = params => {
  let url = "/api/ajax/mostExpected";
  return get({ url, params });
};

export const getComingList = params => {
  let url = "/api/ajax/comingList";
  return get({ url, params });
};

export const getCities = () => {
  let url = "/cities.json";
  return get({ url });
};
