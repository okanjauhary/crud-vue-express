<template>
    <div class="data">
        <b-row style="margin-bottom: 20px">
            <b-col md="10" style="margin-bottom: 10px">
                <b-row>
                    <b-col md="4" offset-md="8">
                        <b-form-input
                            type="text"
                            v-model="search"
                            placeholder="Search...">
                        </b-form-input>
                    </b-col>
                </b-row>
            </b-col>
            <b-col md="2">
                <b-button variant="success" @click="showModal('ADD')">Add member</b-button>
            </b-col>
        </b-row>
        
        <b-modal ref="modalMember" :title="modalTitle" hide-footer>
            
            <b-form-input v-model="name"
                  class="mb-2"
                  type="text"
                  placeholder="Enter name"></b-form-input>
            <b-form-input v-model="age"
                  class="mb-2"
                  type="text"
                  placeholder="Enter age"></b-form-input>

            <div class="float-right">
                <b-btn variant="danger" @click="hideModal">cancel</b-btn>
                <b-btn variant="success" @click="handleAddMember" v-show="isBtnAdd">Add</b-btn>
                <b-btn variant="primary" @click="handleEditMember" v-show="isBtnEdit">Edit</b-btn>
            </div>
        </b-modal>

        <b-table :items="membersProcessed" :fields="fields">
            <template slot="action" slot-scope="data">
                <b-button variant="info" size="sm" @click="showModal('EDIT', data)">edit</b-button>
                <b-button @click="REMOVE_MEMBER(data.index)" variant="danger" size="sm">delete</b-button>
            </template>
        </b-table>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "Vuex";

export default {
  name: "dataTable",
  data() {
    return {
      fields: [
        { key: "name", sortable: true },
        { key: "age", sortable: true },
        { key: "action" }
      ],
      id: "",
      name: "",
      age: "",
      modalTitle: "",
      isBtnAdd: false,
      isBtnEdit: false,
      search: ""
    };
  },
  computed: {
    ...mapGetters(["memberLists"]),
    membersProcessed() {
      let src = this.search.trim().toLowerCase();
      if (!this.search.length) {
        return this.memberLists;
      }
      return this.memberLists.filter(function(member) {
        if (member.name.toLowerCase().indexOf(src) != -1) {
          return member;
        }
      });
    }
  },
  mounted() {
    this.FETCH_MEMBERS();
  },
  methods: {
    ...mapActions([
      "REMOVE_MEMBER",
      "ADD_MEMBER",
      "FETCH_MEMBERS",
      "EDIT_MEMBER"
    ]),
    showModal(type, data = null) {
      this.name = "";
      this.age = "";
      switch (type) {
        case "ADD":
          this.modalTitle = "Add new member";
          this.isBtnEdit = false;
          this.isBtnAdd = true;
          break;
        case "EDIT":
          this.name = data.item.name;
          this.age = data.item.age;
          this.id = data.item._id;
          this.modalTitle = "Edit member";
          this.isBtnAdd = false;
          this.isBtnEdit = true;
          break;
      }
      this.$refs.modalMember.show();
    },
    hideModal() {
      this.$refs.modalMember.hide();
    },
    handleAddMember() {
      if (this.name !== "" && this.age !== "") {
        this.ADD_MEMBER({ name: this.name, age: this.age });
        this.hideModal();
      } else {
        this.hideModal();
      }
    },
    handleEditMember() {
      if (this.name !== "" && this.age !== "") {
        this.EDIT_MEMBER({
          id: this.id,
          data: { name: this.name, age: this.age }
        });
        this.hideModal();
      } else {
        this.hideModal();
      }
    },
    handleSearch(e) {
      console.log(e);
    }
  }
};
</script>


<style lang="scss" scoped>
.data {
  padding: 20px;
}
</style>

