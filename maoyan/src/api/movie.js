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

export const mostExpected = params => {
  // let url = "/api/ajax/mostExpected";
  let url = "/data.json";
  if (params.offset > 0) url = "/data1.json";
  return get({ url, params });
};

export const comingList = params => {
  let url = "/api/ajax/comingList";
  return get({ url, params });
};

export const getCities = () => {
  let url = "/cities.json";
  return get({ url });
};
