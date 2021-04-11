import { IStoreState } from '@/types';
export default {
  UPDATE_HOME: (state: IStoreState, payload: object[]) => state.home = payload,
  UPDATE_LOADING: (state: IStoreState, payload: boolean) => state.bLoading = payload,
}