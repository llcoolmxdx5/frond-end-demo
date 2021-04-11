import { IStoreState } from '@/types';
export default {
  bLoading: (state: IStoreState) => state.bLoading ? '加载中' : '加载完毕'
}