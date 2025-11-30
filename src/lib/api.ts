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
	lesson: string;
	type: TaskType;
	name: string;
	details: string;
	is_submitted: boolean;
	timestamp: Date;
	grade?: Grade;
}

export interface Attachment {
	name: string;
	url: string;
	is_download: boolean;
	file_size?: number;
}

export interface Lesson {
	id: string;
	name: string;
	timestamp: Date;
	video?: string;
	attachments: Attachment[];
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

	async getCourseTopic(course: string, topic: string): Promise<Topic> {
		const topics = await this.getCourseTopics(course);
		return topics.find((value) => value.id === topic) as Topic;
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
						timestamp: new Date(2025, 9, 25),
						video:
							'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
						attachments: [
							{
								name: 'Презентация',
								url: '/example_file.pdf',
								is_download: true,
								file_size: 1.2 * 1024 * 1024
							},
							{
								name: 'Хакатон 2025',
								url: 'https://changellenge.com/championships/khakaton-hack-change-2025/',
								is_download: false
							}
						]
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
						timestamp: new Date(2025, 9, 12),
						attachments: []
					},
					{
						id: '002',
						name: 'Урок 2',
						timestamp: new Date(2025, 9, 27),
						attachments: []
					},
					{
						id: '003',
						name: 'Урок 3',
						timestamp: new Date(2025, 9, 30),
						attachments: []
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

	async getLessonTasks(course: string, lesson: string): Promise<Task[]> {
		const tasks = await this.getCourseTasks(course);
		return tasks.filter((value) => value.lesson === lesson);
	},

	async getCourseTasks(course: string): Promise<Task[]> {
		if (course !== 'math') {
			return [];
		}

		return [
			{
				id: '001',
				lesson: '001',
				type: TaskType.TEST,
				name: 'Тест',
				details: 'Тема 1: «Урок 1»',
				is_submitted: false,
				timestamp: new Date(2025, 11, 15)
			},
			{
				id: '002',
				lesson: '001',
				type: TaskType.ESSAY,
				name: 'Сочинение',
				details: 'Тема 2: «Урок 4»',
				is_submitted: true,
				timestamp: new Date(2025, 11, 15)
			},
			{
				id: '003',
				lesson: '001',
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
