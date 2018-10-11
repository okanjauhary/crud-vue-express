import axios from "axios";

export default {
  REMOVE_MEMBER: (context, id) => {
    if (confirm("hapus item?")) {
      let memberId = context.state.members[id]._id;
      axios
        .delete(`http://localhost:8000/api/members/${memberId}`)
        .then(res => {
          context.commit("removeMember", id);
        });
    }
  },
  ADD_MEMBER: (context, data) => {
    axios.post("http://localhost:8000/api/members", data).then(res => {
      context.commit("addMembers", res.data);
    });
  },
  FETCH_MEMBERS: context => {
    axios.get("http://localhost:8000/api/members").then(res => {
      context.commit("fetchMembers", res.data);
    });
  },
  EDIT_MEMBER: (context, payload) => {
    axios
      .put(`http://localhost:8000/api/members/${payload.id}`, payload.data)
      .then(res => {
        context.commit("updateMember", res.data);
      });
  }
};
