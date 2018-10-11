export default {
  REMOVE_ITEM: (context, id) => {
    if (confirm("hapus item?")) {
      context.commit("removeItem", id);
    }
  },
  ADD_ITEM: (context, data) => {
    context.commit("addItem", data);
  }
};
