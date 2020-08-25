import request from 'utils/request';

export const getRamDomUser = () => {
	return request({
		url: '/?randomapi',
		method: 'GET',
	});
};
