import * as actionType from "../constants/actionTypes"

const authReducer = (state = { authData: null }, action) => {
	switch (action.type) {
		case actionType.AUTH:
			console.log(action?.data)
			localStorage.setItem("profile", JSON.stringify({ ...action?.data }))
			return { ...state, authData: action?.data }
		case actionType.LOGOUT:
			return state
		default:
			return state
	}
}

export default authReducer