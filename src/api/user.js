import config from './config'
import axios from 'axios';
import qs from 'qs'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//登录页
export const login = params => {
	return axios.post(`${config.base_url}/Login/login`, qs.stringify(params)).then(res => res.data);
};
//会议信息
export const meetInfo = params => {
	return axios.post(`${config.base_url}/Meet/meetInfo`, qs.stringify(params)).then(res => res.data);
};
//会议议程页
export const agendaLists = params => {
	return axios.post(`${config.base_url}/Meet/agendaLists`, qs.stringify(params)).then(res => res.data);
};
//会议服务页
export const serviceLists = params => {
	return axios.post(`${config.base_url}/Meet/serviceLists`, qs.stringify(params)).then(res => res.data);
};
export const serviceAdd = params => {
	return axios.post(`${config.base_url}/Meet/serviceAdd`, qs.stringify(params)).then(res => res.data);
};
//会议签到页
export const bigSignInShow = params => {
	return axios.post(`${config.base_url}/Meet/bigSignInShow`, qs.stringify(params)).then(res => res.data);
};
export const jsonList = params => {
	return axios.post(`${config.base_url}/Meet/jsonList`, qs.stringify(params)).then(res => res.data);
};
//与会人员
export const guesterInfo = params => {
	return axios.post(`${config.base_url}/Guester/guesterInfo`, qs.stringify(params)).then(res => res.data);
};
//抽奖大屏幕
export const bigAwardShow = params => {
	return axios.post(`${config.base_url}/Luckdraw/bigAwardShow`, qs.stringify(params)).then(res => res.data);
};
export const playAward = params => {
	return axios.post(`${config.base_url}/Luckdraw/playAward`, qs.stringify(params)).then(res => res.data);
};
export const jsonPrize = params => {
	return axios.post(`${config.base_url}/Luckdraw/jsonPrize`, qs.stringify(params)).then(res => res.data);
};
export const prizeRecord = params => {
	return axios.post(`${config.base_url}/Luckdraw/prizeRecord`, qs.stringify(params)).then(res => res.data);
};
export const cancelPrize = params => {
	return axios.post(`${config.base_url}/Luckdraw/cancelPrize`, qs.stringify(params)).then(res => res.data);
};