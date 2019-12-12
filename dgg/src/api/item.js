import { get } from "./http";

export const getCommodity = params => {
  // let url = "/api/ajax/mostExpected";
  let url = `/commodity_${params.page}.json`;
  return get({ url, params });
};

export const getHomePageList = () => {
  let url = "/home_page_list.json";
  return get({ url });
};

export const queryMaterialByLocation = () => {
  let url = "/queryMaterialByLocation.json";
  return get({ url });
};
