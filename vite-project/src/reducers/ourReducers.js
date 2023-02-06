const initState = {
avatar: ""

}

const ourReducers = (state = initState, action) => {
	switch (action.type) {
		case "STORE_AVATAR":
			return {
				...state,
				avatar: action.payload
			}
		default:
			return state
	}
}

export default ourReducers
