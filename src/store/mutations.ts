export default {
	/* ADD_LINK: (state, link) => {
		state.links.push(link)
	},
	ADD_FORM: (state, form) => {
		state.formularze.push(form)
	},
	REMOVE_LINK: (state, link) => {
		state.links.splice(link, 1)
	},
	REMOVE_ALL: state => {
		state.links = []
	}, */
	SAVE_DATA: (state, data) => {
		state.usersData = data
	},
	SAVE_DISH: (state, data) => {
		state.dishesData = data
	},
}
