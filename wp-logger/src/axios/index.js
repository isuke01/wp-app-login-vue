import axios from 'axios';
import store from './../store'

// if(process.env.NODE_ENV !== 'development'){
// 	axios.defaults.headers.common['X-WP-Nonce'] = WPVUE.nonce;
// }
const REST_URL =  process.env.VUE_APP_URL+process.env.VUE_APP_REST;
const AUTH_URL =  process.env.VUE_APP_URL+'/wp-json/simple-jwt-authentication/v1';


export const REST = axios.create({
	baseURL: REST_URL,
	transformResponse: [(data) => {
		let newData = JSON.parse(data)
		store.dispatch('handleAuthStatus', newData)
		return newData;
	}]

});

export const AUTH = axios.create({
	baseURL: AUTH_URL,
	transformResponse: [(data) => {
		let newData = JSON.parse(data)
		store.dispatch('handleAuthStatus', newData)
		return newData;
	}]
});
