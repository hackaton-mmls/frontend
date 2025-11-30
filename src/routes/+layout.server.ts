import { redirect } from '@sveltejs/kit';

const publicRoutes = ['/login'];

export async function load({ locals, url }) {
	const pathname = url.pathname;

	if (locals.user == null && !publicRoutes.includes(pathname)) {
		return redirect(302, '/login');
	}

	return {
		user: locals.user
	};
}
