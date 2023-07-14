import * as types from "./actiontypes";
import axios from "axios";
const URL = "https://obtainable-gray-tenor.glitch.me/allproducts";
const MENS_URL='http://localhost:8080/productData'
const WOMEN_URL='http://localhost:8080/womensdata'
const FUNITURE_URL='http://localhost:8080/funitureData'
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

export const getMensProduct =(dispatch) => {
	dispatch({ type: types.GET_MENS_PRODUCT_REQUEST });
	axios
		.get(`${MENS_URL}?_page=${1}&_limit=9`)
		.then((res) => {
			
			dispatch({ type: types.GET_MENS_PRODUCT_SUCCESS, payload: res.data });
		})
		.catch((err) => {
			dispatch({ type: types.GET_FUNITURE_PRODUCT_FAILURE});
		});
};
export const getWomenProduct=(page,order)=>(dispatch) => {
	dispatch({ type: types.GET_WOMENS_PRODUCT_REQUEST });
	axios
		.get(`${WOMEN_URL}?_page=${page}&_limit=9&_sort=price&_order=${order}`)
		.then((res) => {
			
			dispatch({ type: types.GET_WOMENS_PRODUCT_SUCCESS, payload: res.data });
		})
		.catch((err) => {
			dispatch({ type: types.GET_WOMENS_PRODUCT_FAILURE});
		});
};

export const getfunitureProduct=(page,order)=>(dispatch) => {
	let FUNITURE_URL;
	 if(order){
		FUNITURE_URL=`http://localhost:8080/funitureData?_page=${page}&_limit=9&_sort=rs&_order=${order}`
	}else{
		FUNITURE_URL=`http://localhost:8080/funitureData?_page=${page}&_limit=9`
	}
	console.log(FUNITURE_URL);
	dispatch({ type: types.GET_FUNITURE_PRODUCT_REQUEST });
	axios
		.get(`${FUNITURE_URL}`)
		.then((res) => {
			
			dispatch({ type: types.GET_FUNITURE_PRODUCT_SUCCESS, payload: res.data });
		})
		.catch((err) => {
			dispatch({ type: types.GET_FUNITURE_PRODUCT_FAILURE});
		});
};






