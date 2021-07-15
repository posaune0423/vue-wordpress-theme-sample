export default {
  namespaced: true,
  state: {
    counter: 0
  },
  getters: {
    getCount: (state) => {
      return state.counter;
    }
  },
  mutations: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    }
  }
};
