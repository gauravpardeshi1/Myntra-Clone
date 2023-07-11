import * as types from "./actiontypes";
import axios from "axios";
const URL = "https://obtainable-gray-tenor.glitch.me/allproducts";
const WOMEN_URL='http://localhost:8080/womensdata'
export const getProduct = (params) => (dispatch) => {
	dispatch({ type: types.GET_PRODUCT_REQUEST });
	axios
		.get(URL, params)
		.then((res) => {
			const total = res.headers["x-total-count"];
			const obj = { total: total, data: res.data };
			dispatch({ type: types.GET_PRODUCT_SUCCESS, payload: obj });
		})
		.catch((err) => {
			dispatch({ type: types.GET_PRODUCT_FAILURE });
		});
};

export const getWomenProduct =(dispatch) => {
	dispatch({ type: types.GET_WOMENS_PRODUCT_REQUEST });
	axios
		.get(`${WOMEN_URL}?_page=${1}&_limit=9`)
		.then((res) => {
			
			dispatch({ type: types.GET_WOMENS_PRODUCT_SUCCESS, payload: res.data });
		})
		.catch((err) => {
			dispatch({ type: types.GET_WOMENS_PRODUCT_FAILURE});
		});
};






