import { CheckButton } from "./CheckButton/CheckButton"
import './TaskButtons.css'
import { EditButton } from "./EditButton/EditButton"
import { DeleteButton } from "./DeleteButton/DeleteButton"

export const TaskButtons = ({ saveTask, deleteTask, editTask, isEditing }) => {

	if (isEditing) {
		return (
			<CheckButton saveTask={saveTask} />
		)
	} else {
		return (
			<>
				<EditButton editTask={editTask} />
				<DeleteButton deleteTask={deleteTask} />
			</>
		)
	}
}

