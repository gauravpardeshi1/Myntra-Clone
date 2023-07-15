import * as types from "./actiontypes";
import axios from "axios";
const URL = "https://obtainable-gray-tenor.glitch.me/allproducts";
const MENS_URL='http://localhost:8080/mensproducts'
const WOMEN_URL='http://localhost:8080/womensdata'
const FUNITURE_URL='http://localhost:8080/funitureData'
const KIDS_URL='http://localhost:8080/kids'
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

export const getKidsProduct =(page,obj)=>(dispatch) => {
	dispatch({ type: types.GET_KIDS_PRODUCT_REQUEST });
	axios
		.get(`${KIDS_URL}?_page=${page}&_limit=9`,obj)
		.then((res) => {
			
			dispatch({ type: types.GET_KIDS_PRODUCT_SUCCESS, payload: res.data });
		})
		.catch((err) => {
			dispatch({ type: types.GET_KIDS_PRODUCT_FAILURE});
		});
};



export const getMensProduct =(page,obj)=>(dispatch) => {
	dispatch({ type: types.GET_MENS_PRODUCT_REQUEST });
	axios
		.get(`${MENS_URL}?_page=${page}&_limit=9`,obj)
		.then((res) => {
			
			dispatch({ type: types.GET_MENS_PRODUCT_SUCCESS, payload: res.data });
		})
		.catch((err) => {
			dispatch({ type: types.GET_FUNITURE_PRODUCT_FAILURE});
		});
};
export const getWomenProduct=(page,obj)=>(dispatch) => {
	dispatch({ type: types.GET_WOMENS_PRODUCT_REQUEST });
	axios
		.get(`${WOMEN_URL}?_page=${page}&_limit=9`,obj)
		.then((res) => {
			
			dispatch({ type: types.GET_WOMENS_PRODUCT_SUCCESS, payload: res.data });
		})
		.catch((err) => {
			dispatch({ type: types.GET_WOMENS_PRODUCT_FAILURE});
		});
};

export const getfunitureProduct=(page,obj)=>(dispatch) => {
	
		const FUNITURE_URL=`http://localhost:8080/funitureData?_page=${page}&_limit=9`
	
	console.log(FUNITURE_URL);
	dispatch({ type: types.GET_FUNITURE_PRODUCT_REQUEST });
	axios
		.get(`http://localhost:8080/funitureData?_page=${page}&_limit=9`,obj)
		.then((res) => {
			
			dispatch({ type: types.GET_FUNITURE_PRODUCT_SUCCESS, payload: res.data });
		})
		.catch((err) => {
			dispatch({ type: types.GET_FUNITURE_PRODUCT_FAILURE});
		});
};






