import Vue from "vue";
import Vuex from "vuex";
import Nav from "./modules/nav";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showModal: false,
    regist: false,
    token: "",
    airtitle: [],
  },
  mutations: {
    changeairtitle(state, data) {
      state.airtitle = data;
    },
    changeToken(state, token) {
      state.token = token;
      localStorage.setItem("token", token);
    },
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
