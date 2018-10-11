<template>
    <div class="data">
        <b-row style="margin-bottom: 20px">
            <b-col md="10" style="margin-bottom: 10px">
                <b-row>
                    <b-col md="4" offset-md="8">
                        <b-form-input
                            type="text"
                            placeholder="Search...">
                        </b-form-input>
                    </b-col>
                </b-row>
            </b-col>
            <b-col md="2">
                <b-button variant="success" @click="showModal">Add member</b-button>
            </b-col>
        </b-row>
        
        <b-modal ref="modalAddMember" title="Add new member" hide-footer>
            
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
                <b-btn variant="success" @click="handleAddMember">Add</b-btn>
            </div>
        </b-modal>

        <b-table :items="memberLists" :fields="fields">
            <template slot="action" slot-scope="data">
                <b-button variant="info" size="sm">edit</b-button>
                <b-button @click="REMOVE_ITEM(data.index)" variant="danger" size="sm">delete</b-button>
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
      name: "",
      age: ""
    };
  },
  computed: {
    ...mapGetters(["memberLists"])
  },
  methods: {
    ...mapActions(["REMOVE_ITEM", "ADD_ITEM"]),
    showModal() {
      this.$refs.modalAddMember.show();
    },
    hideModal() {
      this.$refs.modalAddMember.hide();
    },
    handleAddMember() {
      if (this.name !== "" || this.age !== "") {
        this.ADD_ITEM({ name: this.name, age: this.age });
        this.hideModal();
        this.name = "";
        this.age = "";
      } else {
        this.hideModal();
      }
    }
  }
};
</script>


<style lang="scss" scoped>
.data {
  padding: 20px;
}
</style>

