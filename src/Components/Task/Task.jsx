import { useState } from "react";
import { TaskButtons } from "./TaskButtons/TaskButtons";
import './Task.css'
import { DeleteButton } from "./TaskButtons/DeleteButton/DeleteButton";
import { DONE, TODO } from "../../const";

export const Task = ({ status, task, isChecked, tasks, setTasks, id }) => {
	const [isEditing, setIsEditing] = useState(false);
	//const inputRef = useRef();

	const editTask = () => {
		setIsEditing(!isEditing)
	}

	const saveTask = (e) => {
		e.preventDefault();

		let newValue = e.currentTarget.previousSibling.value;
		if (newValue.length < 4) {
			alert('Введите имя новой задачи в виде строки длиннее 3х символов');
			console.log('косяк')
		} else {
			let taskId = String(e.currentTarget.previousSibling.dataset.id);
			localStorage.setItem(JSON.stringify(taskId), JSON.stringify({ 'id': taskId, 'name': newValue, 'status': TODO }));
			let tempTasks = [...tasks];
			console.log(tempTasks);
			tempTasks.forEach(task => {
				if (task.id === taskId) {
					task.name = newValue;
				}
			});
			setTasks([...tempTasks]);
			setIsEditing(!isEditing);
		}
	}

	const deleteTask = (e) => {
		let taskId = String(e.currentTarget.parentElement.children[1].dataset.id);
		localStorage.removeItem(JSON.stringify(taskId));
		let tempTasks = [...tasks];
		tempTasks = tempTasks.filter(task => task.id !== taskId);
		setTasks([...tempTasks]);
	}

	const changeStatus = (e) => {
		let value = e.currentTarget.nextElementSibling.value;
		let taskId = String(e.currentTarget.nextElementSibling.dataset.id);

		let tempTasks = [...tasks];
		let status = e.currentTarget.checked ? DONE : TODO;
		localStorage.setItem(JSON.stringify(taskId), JSON.stringify({ 'id': taskId, 'name': value, 'status': status }));

		tempTasks.forEach((task) => {
			if (task.id === taskId) {
				task.status = status;
			}
		})

		setTasks([...tempTasks]);
	}



	return (
		<form className='form_task' onSubmit={saveTask}>
			<input type='checkbox' defaultChecked={isChecked} onChange={changeStatus} />
			<input type='text' className="input" placeholder="Имя новой задачи" data-id={id} defaultValue={task} disabled={!isEditing} />
			{(status === TODO)
				? <TaskButtons isEditing={isEditing} editTask={editTask} saveTask={saveTask} deleteTask={deleteTask} />
				: <DeleteButton deleteTask={deleteTask} />}

		</form>
	)
}