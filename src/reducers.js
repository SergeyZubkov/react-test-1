const initialState = {
	news: [
		"Сеть российских баров хочет отсудить у Disney бренд Русалочка",
		"Студия Pixar запустила кулинарное шоу на YouTube",
		"СМИ узнали, что у фильма Гая Ричи 'Аладдин' будет сиквел"
	],
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