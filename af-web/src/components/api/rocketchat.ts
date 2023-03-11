import axios from 'axios';

export const rocketChatApi = axios.create({
	baseURL: 'https://rocket.chat.mojauto.hr/api/v1',
});

export const rocketChatAuth = axios.create({
	baseURL: 'https://rocket.chat.mojauto.hr/_oauth/keycloak',
});

export const rocketChatWss = axios.create({
	baseURL: 'wss://rocket.chat.mojauto.hr/websocket',
});
