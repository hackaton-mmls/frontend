export interface User {
	email: string;
	first_name: string;
	last_name: string;
}

export interface Course {
	id: string;
	name: string;
	performance: number;
}

export enum TaskType {
	TEST = 'test',
	SUBMISSION = 'submission',
	ESSAY = 'essay'
}

export function getTaskIcon(type: TaskType) {
	switch (type) {
		case TaskType.TEST:
			return 'file';
		case TaskType.SUBMISSION:
			return 'picture';
		case TaskType.ESSAY:
			return 'text';
	}
}

export interface Grade {
	value: number;
	max: number;
}

export interface Task {
	id: string;
	type: TaskType;
	name: string;
	details: string;
	is_submitted: boolean;
	timestamp: Date;
	grade?: Grade;
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
	},

	async getUserPerformance(): Promise<number> {
		return 85;
	},

	async getCourses(): Promise<Course[]> {
		return [
			{
				id: 'math',
				name: 'Математика',
				performance: 70
			},
			{
				id: 'basic',
				name: 'Базовый Курс',
				performance: 100
			}
		];
	},

	async getCourseTasks(course: string): Promise<Task[]> {
		if (course !== 'math') {
			return [];
		}

		return [
			{
				id: '001',
				type: TaskType.TEST,
				name: 'Тест',
				details: 'Тема 1: «Урок 1»',
				is_submitted: false,
				timestamp: new Date(2025, 11, 15)
			},
			{
				id: '002',
				type: TaskType.ESSAY,
				name: 'Сочинение',
				details: 'Тема 2: «Урок 4»',
				is_submitted: true,
				timestamp: new Date(2025, 11, 15)
			},
			{
				id: '003',
				type: TaskType.SUBMISSION,
				name: 'Презентация',
				details: 'Тема 3: «Урок 4»',
				is_submitted: true,
				timestamp: new Date(2025, 11, 15),
				grade: {
					value: 4,
					max: 5
				}
			}
		];
	}
};
