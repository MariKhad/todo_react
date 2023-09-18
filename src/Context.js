import { createContext, useContext, useReducer } from 'react';
import { taskReducer, initialTasks } from './reducers/taskReducer';

const TaskContext = createContext(null);

const TaskDispatchContext = createContext(null);

export function TaskProvider({ children }) {
	const [state, dispatch] = useReducer(
		taskReducer,
		initialTasks
	);

	return (
		<TaskContext.Provider value={state}>
			<TaskDispatchContext.Provider value={dispatch}>
				{children}
			</TaskDispatchContext.Provider>
		</TaskContext.Provider>
	);
}

export const useTask = () => {
	return useContext(TaskContext);
}

export const useTaskDispatch = () => {
	return useContext(TaskDispatchContext);
}
