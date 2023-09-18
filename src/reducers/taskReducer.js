import { TODO } from "../const";

export const initialTasks = [];
for (let i = 0; i < localStorage.length; i++) {
	let key = localStorage.key(i);
	initialTasks.push(JSON.parse(localStorage.getItem(key)));
}



export function taskReducer(state, action) {
	switch (action.type) {
		case 'add': {
			localStorage.setItem(JSON.stringify(action.id), JSON.stringify({ 'id': action.id, 'name': action.name, 'status': TODO }));
			let tempTasks = [...state];
			tempTasks.push({ 'id': action.id, 'name': action.name, 'status': TODO });
			return tempTasks;
		}
		case 'save': {
			localStorage.setItem(JSON.stringify(action.id), JSON.stringify({ 'id': action.id, 'name': action.name, 'status': TODO }));
			let tempTasks = [...state];
			tempTasks.forEach(task => {
				if (task.id === action.id) {
					task.name = action.name;
				}
			});

			return tempTasks;
		}
		case 'delete': {
			localStorage.removeItem(JSON.stringify(action.id));
			let tempTasks = [...state];
			tempTasks = tempTasks.filter(task => task.id !== action.id);
			return tempTasks;
		}

		case 'change_status': {
			let tempTasks = [...state];
			localStorage.setItem(JSON.stringify(action.id), JSON.stringify({ 'id': action.id, 'name': action.name, 'status': action.status }));

			tempTasks.forEach((task) => {
				if (task.id === action.id) {
					task.status = action.status;
				}
			})
			return tempTasks;
		}
		default: {
			throw Error('Unknown action: ' + action.type);
		}
	}
}