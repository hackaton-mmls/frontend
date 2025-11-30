import { redirect } from '@sveltejs/kit';

export function load({ cookies }) {
	cookies.set('session', '', {
		path: '/',
		expires: new Date(0)
	});
	return redirect(302, '/');
}
