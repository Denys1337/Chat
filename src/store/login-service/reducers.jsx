/* eslint-disable */

import { GET_USER } from './types';

const initialState = {
	user: {},
};

const userReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case GET_USER:
			return {
				...state,
				user: payload,
			};
		default:
			return state;
	}
};

export default userReducer;
