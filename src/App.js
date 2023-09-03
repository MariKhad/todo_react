import './App.css';
import { Done } from './Components/Done/Done.jsx';
import { ToDo } from './Components/ToDo/ToDo';
import { AddTask } from './Components/AddTask/AddTask';
import { Main } from './Components/Layout/Main/Main';
import { useState } from 'react';
import '@fontsource/roboto/400.css';



function App() {

	const initialTasks = [];
	for (let i = 0; i < localStorage.length; i++) {
		let key = localStorage.key(i);
		initialTasks.push(JSON.parse(localStorage.getItem(key)));
	}

	const [tasks, setTasks] = useState(initialTasks);

	return (
		<Main>
			<h1 className='title'>todo</h1>
			<AddTask setTasks={setTasks} tasks={tasks} />
			<ToDo setTasks={setTasks} tasks={tasks} />
			<Done setTasks={setTasks} tasks={tasks} />
		</Main>
	);
}

export default App;
