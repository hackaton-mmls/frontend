export interface User {
	email: string;
	first_name: string;
	last_name: string;
}

export function getUserFullName(user: User): string {
	return user.first_name + ' ' + user.last_name;
}

export const API = {
	location: '/api',

	async getUser(): Promise<User> {
		return {
			email: 'student@example.edu',
			first_name: 'Иван',
			last_name: 'Иванов'
		};
	}
};
