import axios from "axios";

interface IResponse<T> {
  message: string;
  result: T;
  success: boolean;
}

type IParams = {
  url: string;
  type: "get" | "post";
  data?: any;
};

function request(data: IParams): Promise<IResponse<number[]>> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({
        message: "获取数据成功",
        result: [1, 2, 3],
        success: true,
      });
    }, 2000);
  });
}

const get = (url: string, data: any) => {
  return axios.get(url, data);
};

const post = (url: string, data: any) => {
  return axios.post(url, data);
};

export { request, get, post };
