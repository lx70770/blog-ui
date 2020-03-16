import { getBlogList } from 'services/blog'

export default {
  namespace: 'blog',

  effects: {
    *query(_, { call }) {
      const reaponse = yield call(getBlogList)
      console.log(reaponse)
    }
  }
}
