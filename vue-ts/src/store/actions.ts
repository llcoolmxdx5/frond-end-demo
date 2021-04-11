import { IStoreState } from '@/types';

type TAction = {
  commit: Function;
  state: IStoreState
}

let actions = {
  UPDATE_HOME: ({ commit, state }: TAction, payload: object) => {
    window.axios({
      url: '/api/goods/home',
      params: payload
    }).then(
      res => {
        if (res.data.err == 0) {
          commit('UPDATE_HOME', res.data.data)
        }
      }
    )
  },
}

export default actions;