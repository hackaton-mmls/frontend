import { API } from '$lib/api';

export const handle = async ({ event, resolve }) => {
	const session = event.cookies.get('session');

	if (session) {
		event.locals.user = await API.getUser();
	} else {
		event.locals.user = null;
	}

	return resolve(event);
};
