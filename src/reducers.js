const initialState = {
	news: [1,2,3],
	isLoggedIn: false
}

export default (state=initialState, action) => {
	switch(action.type) {
		case "LOGIN":
			return Object.assign({}, state, {isLoggedIn: true});
		case "LOGOUT":
			return Object.assign({}, state, {isLoggedIn: false})
		default:
			return state
	}
}