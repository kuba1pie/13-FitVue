<template>
  <div class="user">
    <h1>Users table</h1>
    <div class="loading" v-if="state">{{ this.$store.state.usersStatus }}</div>
    <b-table striped hover :items="usersList" :fields="fields">
      <template v-slot:cell(fullname)="data">
        <router-link :to="`/user/${data.item.userId}`">{{
          data.value
        }}</router-link>
      </template>
    </b-table>
    <b-button v-b-modal.modal-1 class="m-1">Add new user</b-button>
    <b-modal id="modal-1" class="border border-secondary p-5">
      <FormUser />
    </b-modal>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex"
import FormUser from "@/components/FormUser.vue"

export default {
  name: "Users",
  data: function() {
    return {
      state: false,
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
    ...mapMutations(["SAVE_USERSLIST"]),
    ...mapActions(["fetchUsers"]),
    fullName(value) {
      return `${value.name} ${value.lastname}`
    },
  },
  async mounted() {
    if (this.$store.state.usersStatus === "loading") {
      state = true
    }
    if (this.$store.state.usersList) {
      this.usersList = this.$store.state.usersList
    }
    await this.fetchUsers()
    this.usersList = this.$store.state.usersList
  },
  check() {
    if (this.$store.state.usersStatus === "loading") {
      state = true
    }
  },
  mutations: {
    addUsers(state, users) {
      state.usersData.push(users)
    },
  },
}
</script>
