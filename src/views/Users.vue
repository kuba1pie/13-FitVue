<template>
  <div class="user">
    <!-- Page title -->
    <h1>Users table</h1>
    <!-- Users table -->
    <b-table striped hover :items="usersList" :fields="fields">
      <template v-slot:cell(fullname)="data">
        <router-link :to="`/user/${data.item.userId}`">{{
          data.value
        }}</router-link>
      </template>
    </b-table>
    <!-- Table buttons -->
    <b-button v-b-modal.modal-1 class="m-1">Add new user</b-button>
    <!-- Add user collapse -->
    <b-modal id="modal-1" class="border border-secondary p-5">
      <!-- Add user form -->
      <!-- <FormUser @clicked="onClickChild" /> -->
      <FormUser />
      <!-- Add user buttons -->
    </b-modal>
  </div>
</template>
<script>
import axios from "axios"
import mysql from "mysql"
import { mapState, mapMutations } from "vuex"
import FormUser from "@/components/FormUser.vue"

export default {
  name: "Users",
  data: function() {
    return {
      usersList: [],
      fields: [
        {
          key: "fullname",
          label: "Fullname:",
          sortable: true,
          formatter: (value, key, item) => {
            return item.name + " " + item.lastname
          },
        },
        {
          key: "age",
          label: "Age: ",
          sortable: true,
        },
        {
          key: "gender",
          label: "Gender:",
          sortable: true,
        },
      ],
    }
  },
  components: {
    FormUser,
  },
  computed: {
    ...mapState(["usersData", "dishesList"]),
  },
  methods: {
    ...mapMutations(["SAVE_DATA", "SAVE_DISHLIST"]),
    onClickChild() {
      this.loadData()
    },
    saveData: function() {
      this.SAVE_DATA(this.usersList)
    },
    saveDishesList: function() {
      this.SAVE_DISHLIST(this.dishesList)
    },
    fullName(value) {
      return `${value.name} ${value.lastname}`
    },
    loadData() {
      axios({
        method: "get",
        url: "https://apifitvue.ew.r.appspot.com/users",
      })
        .then(response => {
          this.usersList = [...response.data]
          //this.saveData()
          //localStorage.setItem("storedData", this.usersList)
        })
        .catch(err => {
          // Manage the state of the application if the request
          // has failed
        })
    },
    /*     loadDishesList() {
      axios({
        method: "get",
        url: "https://apifitvue.ew.r.appspot.com/dishes",
      })
        .then(response => {
          this.dishesList = [...response.data]
          this.saveDishesList()
          //localStorage.setItem("storedData", this.usersList)
        })
        .catch(err => {
          // Manage the state of the application if the request
          // has failed
        })
    }, */
  },
  mounted() {
    this.loadData()
    //this.loadDishesList()
  },
  mutations: {
    addUsers(state, users) {
      state.usersData.push(users)
    },
  },
}
</script>
