import { createStore } from "vuex";

export default createStore({
  state: {
    likes: 1,
  },
  getters: {
    doubleLikes(state) {
      return state.likes * 2;
    },
  },
  mutations: {
    incrementLikes(state) {
      state.likes += 1;
    },
  },
  actions: {},
  modules: {},
});
