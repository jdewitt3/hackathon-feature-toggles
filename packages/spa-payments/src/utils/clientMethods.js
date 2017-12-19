import fetch from 'isomorphic-fetch';

const getSearchParams = params => Object.keys(params).map((key) => {
	return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
}).join('&');

export const authenticateUser = async ({
	emailAddress = 'qa+t@workmarket.com',
	password = 'w0rkmarket12',
}) => {
	let token;

	try {
		const {
			result: {
				payload,
			},
		} = await fetch(`${process.env.BASE_API_URL}/v3/oauth/token`, {
			crossDomain: true,
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: getSearchParams({
				username: emailAddress,
				password,
				grant_type: 'password',
			}),
		}).then(res => res.json());
		token = payload && payload.length > 0 && payload[0].accessToken;
	} catch ({ message }) {
		console.error('An error occurred while authenticating user');
		throw new Error(message);
	}

	return {
		token,
	};
};
