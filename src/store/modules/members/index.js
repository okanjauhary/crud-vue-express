import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export default {
  state: {
    members: [
      { name: "Arjuna", age: 19 },
      { name: "Paijo", age: 20 },
      { name: "Jauhary", age: 21 },
      { name: "Putri", age: 19 }
    ]
  },
  getters,
  mutations,
  actions
};
