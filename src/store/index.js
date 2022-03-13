import Vue from "vue";
import Vuex from "vuex";
import Nav from "./modules/nav";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showModal: false,
    regist: false,
  },
  mutations: {
    changeshowModal(state) {
      if (state.showModal) {
        state.showModal = false;
      } else {
        state.showModal = true;
      }
    },
    changeRegist(state) {
      if (state.regist) {
        state.regist = false;
      } else {
        state.regist = true;
      }
    },
  },
  actions: {},
  modules: {
    Nav,
  },
});
