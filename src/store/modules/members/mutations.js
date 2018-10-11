export default {
  removeMember(state, id) {
    state.members.splice(id, 1);
  },
  addMembers(state, data) {
    state.members.push(data);
  },
  fetchMembers(state, data) {
    state.members = data;
  },
  updateMember(state, data) {
    let newData = [];
    state.members.forEach(member => {
      if (member._id === data._id) {
        member = data;
      }
      newData.push(member);
    });
    state.members = newData;
  }
};
