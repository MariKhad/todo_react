import { useState } from "react";
import { TaskButtons } from "./TaskButtons/TaskButtons";
import './Task.css'
import { DeleteButton } from "./TaskButtons/DeleteButton/DeleteButton";
import { DONE, TODO } from "../../const";

export const Task = ({ status, task, isChecked, tasks, setTasks }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [value, setValue] = useState('');

	const editTask = (e) => {
		setValue(e.currentTarget.previousSibling.value);
		setIsEditing(!isEditing)
		console.log(isEditing);
	}

	const saveTask = (e) => {
		localStorage.removeItem(JSON.stringify(value));
		let newValue = e.currentTarget.previousSibling.value;
		localStorage.setItem(JSON.stringify(newValue), JSON.stringify({ 'name': newValue, 'status': TODO }));
		let tempTasks = [...tasks];
		console.log(tempTasks);
		tempTasks.forEach(task => {
			if (task.name === value) {
				task.name = newValue;
			}
		});
		console.log(tempTasks);
		setTasks([...tempTasks]);
		setValue(newValue);
		setIsEditing(!isEditing);
	}

	const deleteTask = (e) => {
		let value = e.currentTarget.parentElement.children[1].value;
		localStorage.removeItem(JSON.stringify(value));
		let tempTasks = [];
		if (tasks.length > 1) {
			let tempTasks = [...tasks];
			tempTasks = tempTasks.filter(task => task.name !== value);
			setTasks([...tempTasks]);
		} else {
			setTasks([])
		}

		setTasks([...tempTasks]);
	}

	const changeStatus = (e) => {
		let value = e.currentTarget.nextElementSibling.value;
		let tempTasks = [...tasks];
		let status = e.currentTarget.checked ? DONE : TODO;
		localStorage.setItem(JSON.stringify(value), JSON.stringify({ 'name': value, 'status': status }));

		tempTasks.forEach((task) => {
			if (task.name === value) {
				task.status = status;
			}
		})

		setTasks([...tempTasks]);
	}



	return (
		<form className='form_task' >
			<input type='checkbox' defaultChecked={isChecked} onChange={changeStatus} />
			<input id='add' type='text' className="input" placeholder="Имя новой задачи" defaultValue={task} disabled={!isEditing} />
			{(status === TODO)
				? <TaskButtons isEditing={isEditing} editTask={editTask} saveTask={saveTask} deleteTask={deleteTask} />
				: <DeleteButton deleteTask={deleteTask} />}

		</form>
	)
}