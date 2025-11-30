import { fail } from '@sveltejs/kit';

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

export interface Comment {
	author: User;
	contents: string;
	is_read: boolean;
}

export interface Grade {
	value: number;
	max: number;
	comment?: Comment;
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

export interface Lesson {
	id: string;
	name: string;
	timestamp: Date;
}

export interface Topic {
	id: string;
	name: string;
	lessons: Lesson[];
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

	async getCourse(id: string): Promise<Course | undefined> {
		const courses = await this.getCourses();
		return courses.filter((value) => value.id === id).at(0);
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

	async getCourseTopics(course: string): Promise<Topic[]> {
		return [
			{
				id: '001',
				name: 'Тема 1',
				lessons: []
			},
			{
				id: '002',
				name: 'Тема 2',
				lessons: [
					{
						id: '001',
						name: 'Урок 1',
						timestamp: new Date(2025, 9, 25)
					}
				]
			},
			{
				id: '003',
				name: 'Тема 3',
				lessons: [
					{
						id: '001',
						name: 'Урок 1',
						timestamp: new Date(2025, 9, 12)
					},
					{
						id: '002',
						name: 'Урок 2',
						timestamp: new Date(2025, 9, 27)
					},
					{
						id: '003',
						name: 'Урок 3',
						timestamp: new Date(2025, 9, 30)
					}
				]
			},
			{
				id: '003',
				name: 'Тема 3',
				lessons: []
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
					max: 5,
					comment: {
						author: {
							email: 'teacher@example.edu',
							first_name: 'Анна',
							last_name: 'Ивановна'
						},
						contents: 'Пример комментария от учителя.',
						is_read: false
					}
				}
			}
		];
	}
};
