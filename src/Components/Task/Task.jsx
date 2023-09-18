import { useState } from "react";
import { TaskButtons } from "./TaskButtons/TaskButtons";
import './Task.css'
import { DeleteButton } from "./TaskButtons/DeleteButton/DeleteButton";
import { DONE, TODO } from "../../const";
import { useTaskDispatch } from "../../Context";

export const Task = ({ status, task, isChecked, id }) => {
	const [isEditing, setIsEditing] = useState(false);
	let dispatch = useTaskDispatch();
	//const inputRef = useRef();

	const editTask = () => {
		setIsEditing(!isEditing)
	}

	const saveTask = (e) => {
		e.preventDefault();
		let newValue = e.currentTarget.previousSibling.value;
		if (newValue.length < 4) {
			alert('Введите имя новой задачи в виде строки длиннее 3х символов');
		} else {
			let taskId = String(e.currentTarget.previousSibling.dataset.id);
			dispatch({
				type: 'save',
				name: newValue,
				id: taskId,
			})
			setIsEditing(!isEditing);
		}
	}

	const deleteTask = (e) => {
		let taskId = String(e.currentTarget.parentElement.children[1].dataset.id);
		dispatch({
			type: 'delete',
			id: taskId,
		})
	}

	const changeStatus = (e) => {
		let value = e.currentTarget.nextElementSibling.value;
		let taskId = String(e.currentTarget.nextElementSibling.dataset.id);
		let status = e.currentTarget.checked ? DONE : TODO;
		dispatch({
			type: 'change_status',
			name: value,
			status: status,
			id: taskId,
		});
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