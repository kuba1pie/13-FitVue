<template>
  <div>
    <!-- Page title -->
    <h1>User</h1>
    <b-tabs content-class="mt-3">
      <b-tab title="Diet" active>
        <Diet />
      </b-tab>
      <b-tab title="Profile">
        <!-- User data table -->
        <b-table striped hover stacked :items="userData"></b-table>
        <!-- Buttons -->
        <b-button v-b-toggle.collapse-1 variant="info">Edit</b-button>
        <b-button v-b-toggle.collapse-2>Delete</b-button>
        <!-- Form collapse -->
        <b-collapse id="collapse-1" class="border border-secondary p-5">
          <!-- Form -->
          <FormUser v-bind:userData="userData" />-->
          <!-- Buttons -->
          <b-button variant="danger" v-b-toggle.collapse-1>Close</b-button>
        </b-collapse>
        <!-- Delete collapse -->
        <b-collapse id="collapse-2" class="border border-secondary p-5">
          Do you want to delete this user?
          <!-- Buttons -->
          <b-button variant="danger" @click="onDelete">Yes</b-button>
          <b-button v-b-toggle.collapse-2 variant="success">No</b-button>
        </b-collapse>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import axios from "axios"
import router from "vue-router"
import FormUser from "@/components/FormUser.vue"
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
  methods: {
    // Get UserData from API by Id
    loadData() {
      axios
        .get(
          "https://apifitvue.ew.r.appspot.com/users/" + this.$route.params.id
        )
        .then(response => {
          this.userData = response.data
        })
        .catch(err => {
          // Manage the state of the application if the request
          // has failed
        })
    },
    // Delete User
    onDelete() {
      axios.delete(
        "https://apifitvue.ew.r.appspot.com/users/" + this.$route.params.id
      )
      // Reload to /users after timeout due to serve response
      setTimeout(() => this.$router.push({ path: "../users" }), 350)
    },
  },
  mounted() {
    this.loadData()
  },
}
</script>
<style></style>
