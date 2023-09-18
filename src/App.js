import './App.css';
import { Done } from './Components/Done/Done.jsx';
import { ToDo } from './Components/ToDo/ToDo';
import { AddTask } from './Components/AddTask/AddTask';
import { Main } from './Components/Layout/Main/Main';
import { useState } from 'react';
import '@fontsource/roboto/400.css';
import { initialTasks, } from './reducers/taskReducer';
import { TaskProvider } from './Context';



function App() {

	return (
		<TaskProvider>
			<Main>
				<h1 className='title'>todo</h1>
				<AddTask />
				<ToDo />
				<Done />
			</Main>
		</TaskProvider>
	);
}


export default App;
