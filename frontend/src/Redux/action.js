import * as types from "./actiontypes";
import axios from "axios";
const URL = "https://obtainable-gray-tenor.glitch.me/allproducts";
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
const mens_url='https://www.myntra.com/gateway/v2/search/tshirts%20under%20300?rawQuery=tshirts+under+300&o=50&ifo=0&ifc=3&pincode=411009&rows=50&requestType=ANY&f=Gender%3Amen%2Cmen+women&priceBuckets=20'






