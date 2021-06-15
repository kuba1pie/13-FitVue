<template>
  <div>
    <h1>User: {{ userData.name }}</h1>
    <div class="tabs">
      <b-nav tabs>
        <b-nav-item to="#diet">Diet</b-nav-item>
        <b-nav-item to="#profile">Profile</b-nav-item>
      </b-nav>
      <div class="tab-content">
        <div
          :class="[
            'tab-pane',
            { active: $route.hash === '#diet' || $route.hash === '' },
          ]"
          class="p-2"
        >
          <Diet />
        </div>
        <div
          :class="['tab-pane', { active: $route.hash === '#profile' }]"
          class="p-2"
        >
          <!-- User data table -->
          <b-table striped hover stacked :items="userData[0]"></b-table>
          <!-- Buttons -->
          <b-button @click="showMsgBoxTwo">Delete User</b-button>
          <b-button v-b-modal.modal-4>Edit User</b-button>

          <b-modal id="modal-4" title="Edit User" busy="true">
            <FormUser v-bind:userData="this.userData" />
          </b-modal>
          <!-- Delete collapse -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import router from "vue-router"
import FormUser from "@/components/FormUser.vue"
import { mapState, mapMutations, mapGetters, mapActions } from "vuex"

import Diet from "@/components/Diet.vue"

export default {
  name: "User",
  data() {
    return {
      userData: [],
      userID: this.$route.params.id,
    }
  },
  components: {
    Diet,
    FormUser,
  },
  computed: {
    ...mapGetters(["getUserById"]),
  },
  props: {
    date: {
      type: String,
      default: "16-04-2020",
    },
  },
  async mounted() {
    if (this.$store.state.usersList) {
      this.userData = this.getUserById(Number(this.$route.params.id))
    }
    await this.fetchUsers()
    this.userData = this.getUserById(Number(this.$route.params.id))
  },
  methods: {
    // Get UserData from API by Id
    ...mapActions(["fetchUsers"]),
    // Delete User
    showMsgBoxTwo() {
      this.boxTwo = ""
      this.$bvModal
        .msgBoxConfirm("Please confirm that you want to delete user.", {
          title: "Please Confirm",
          size: "sm",
          buttonSize: "sm",
          okVariant: "danger",
          okTitle: "YES",
          cancelTitle: "NO",
          footerClass: "p-2",
          hideHeaderClose: false,
          centered: true,
        })
        .then(value => {
          this.boxTwo = value
          axios.delete(
            "https://fitvueapi.azurewebsites.net/users/" + this.$route.params.id
          )
          // Reload to /users after timeout due to serve response
          setTimeout(() => this.$router.push({ path: "../users" }), 350)
        })
        .catch(err => {
          // An error occurred
        })
    },
  },
}
</script>
<style></style>
