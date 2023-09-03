import { Container } from '../Layout/Container/Container';
import { Task } from '../Task/Task'
import { DONE } from '../../const';


export const Done = ({ deleteTask, changeStatus, tasks }) => {
	const taskList = [];
	tasks.forEach(task => {
		if (task.status === DONE) {
			taskList.push(<Task task={task.name} key={task.name} status={DONE} deleteTask={deleteTask} isChecked={true} changeStatus={changeStatus} />)
		}
	})
	const isTitleVisible = taskList > 0;

	return (
		<Container>
			{isTitleVisible ? <h2 className="subtitle">готово<sup>({taskList.length})</sup></h2> : ''}
			{taskList}
		</Container>
	)

}