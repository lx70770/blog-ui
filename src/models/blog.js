import { getBlogList } from 'services/blog'

export default {
  namespace: 'blog',

  effects: {
    *query(_, { call }) {
      yield call(getBlogList)
    }
  }
}
