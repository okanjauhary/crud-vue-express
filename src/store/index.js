import Vue from "vue";
import Vuex from "Vuex";
import members from "./modules/members";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    members
  }
});
