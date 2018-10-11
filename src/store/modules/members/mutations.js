export default {
  removeItem(state, id) {
    state.members.splice(id, 1);
  },
  addItem(state, data) {
    state.members.push(data);
  }
};
