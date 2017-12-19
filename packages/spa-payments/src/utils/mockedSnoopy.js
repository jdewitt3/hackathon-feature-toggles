// @flow

import {
	authenticateUser,
} from './clientMethods';

export type Operation = {
	execute(parameters: any): any,
	method: string,
	path: string,
}

export interface Api {
	operations: {
		[string]: {
			[string]: Operation
		}
	}
}

// api.operations[tag][operationId].execute(parameters),

const tasks = [];

class Snoopy implements Api {
	operations = {
		Task: {
			createTask: {
				execute: (task: any) => {
					tasks.push(task);
					return Promise.resolve({ message: 'Task successfully created.' });
				},
				method: 'string',
				path: 'string',
			},
			getAllTask: {
				execute: () => Promise.resolve(tasks),
				method: 'string',
				path: 'string',
			},
		},
		Authentication: {
			submitLogin: {
				execute: authenticateUser,
				method: 'POST',
				path: 'http://localhost:8090/v3/oauth/token',
			},
		},
	}
}

const apiClient = new Snoopy();

export default apiClient;
