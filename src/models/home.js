import { getBlogList } from 'services/home'

export default {
  namespace: 'home',

  effects: {
    *query(_, { call }) {
      yield call(getBlogList)
    }
  }
}
