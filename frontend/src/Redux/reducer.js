import * as types from "./actiontypes";
const initialState = {
	loading: false,
	error: false,
	products: [],
	mens:[],
    womensproducts: [],
	funitureData:[],
	cart: [],
	total: 0,
	auth: false,
	name:""
};
export const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case types.GET_PRODUCT_REQUEST:
			return {
				...state,
				loading: true,
			};
		case types.GET_PRODUCT_SUCCESS:
			return {
				...state,
				loading: false,
				products: payload.data ? payload.data : [],
				total: payload.total,
			};
		case types.GET_PRODUCT_FAILURE:
			return {
				...state,
				loading: false,
				error: true,
			};
			case types.GET_WOMENS_PRODUCT_REQUEST:
				return {
					...state,
					loading: true,
				};
			case types.GET_WOMENS_PRODUCT_SUCCESS:
				return {
					...state,
					loading: false,
					womensproducts: payload,
				
				};
			case types.GET_WOMENS_PRODUCT_FAILURE:
				return {
					...state,
					loading: false,
					error: true,
				};
				case types.GET_FUNITURE_PRODUCT_REQUEST:
					return {
						...state,
						loading: true,
					};
				case types.GET_FUNITURE_PRODUCT_SUCCESS:
					return {
						...state,
						loading: false,
						funitureData: payload,
					
					};
				case types.GET_FUNITURE_PRODUCT_FAILURE:
					return {
						...state,
						loading: false,
						error: true,
					};
					case types.GET_MENS_PRODUCT_REQUEST:
					return {
						...state,
						loading: true,
					};
				case types.GET_MENS_PRODUCT_SUCCESS:
					return {
						...state,
						loading: false,
						mens: payload,
					
					};
				case types.GET_MENS_PRODUCT_FAILURE:
					return {
						...state,
						loading: false,
						error: true,
					};
		default:
			return state;
	}
};