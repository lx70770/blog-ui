import { register, login } from 'services/user'

export default {
  namespace: 'user',

  state: {
    current: {}
  },

  effects: {
    *register({ payload }, { call }) {
      return yield call(register, payload)
    },
    *login({ payload }, { call, put }) {
      const response = yield call(login, payload)
      if (response.data.token) {
        localStorage.setItem('token', response.data.token)
        yield put({
          type: 'loginSuccess',
          payload: response.data.user
        })
        return response.data.token
      }
      return false
    }
  },

  reducers: {
    loginSuccess(state, { payload }) {
      state.current = payload
    }
  }
}
