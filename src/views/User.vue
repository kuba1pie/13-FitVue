<template>
  <div>
    <!-- Page title -->
    <h1>User</h1>
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
        <div :class="['tab-pane', { active: $route.hash === '#profile' }]" class="p-2">
          <!-- User data table -->
          <b-table striped hover stacked :items="userData"></b-table>
          <!-- Buttons -->
          <b-button v-b-modal.modal-5>Delete</b-button>

          <b-button v-b-modal.modal-4>Edit User</b-button>

          <b-modal id="modal-4" title="Edit User">
            <FormUser v-bind:userData="this.userData" />
            <template v-slot:modal-footer="{ ok, cancel, hide }">
              <!-- Emulate built in modal footer ok and cancel button actions -->
              <b-button size="sm" variant="success" @click="ok()">OK</b-button>
              <b-button size="sm" variant="danger" @click="cancel()">Cancel</b-button>
              <!-- Button with custom close trigger value -->
              <b-button size="sm" variant="outline-secondary" @click="hide('forget')">Forget it</b-button>
            </template>
          </b-modal>

          <b-modal id="modal-5" title="Delete User">Delete</b-modal>
          <!-- Delete collapse -->
          <!--         <b-modal id="modal-2" class="border border-secondary p-5">
          Do you want to delete this user?
          <b-button variant="danger" @click="onDelete">Yes</b-button>
          <b-button v-b-modal.modal-2 variant="success">No</b-button>
          </b-modal>-->
        </div>
      </div>
    </div>
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
	props: {
		date: {
			type: String,
			default: "16-04-2020",
		},
	},
	methods: {
		// Get UserData from API by Id
		loadData() {
			axios({
				method: "get",
				url:
					"https://apifitvue.ew.r.appspot.com/users/" + this.$route.params.id,
			})
				.then(response => {
					this.userData = [...response.data]
					this.userData.birth = new Date(this.userData.birth)
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
