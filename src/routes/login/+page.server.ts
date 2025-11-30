import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ cookies }) => {
		// TODO: Actual login. Currently I just set the "session" to any value.
		//
		cookies.set('session', 'valid-session-token', {
			path: '/',
			httpOnly: true,
			secure: true,
			sameSite: 'lax'
		});

		return redirect(302, '/');
	}
};
