import { Container } from '../Layout/Container/Container';
import { Task } from '../Task/Task'
import { DONE } from '../../const';


export const Done = ({ deleteTask, changeStatus, tasks, setTasks }) => {
	const taskList = [];
	tasks.forEach(task => {
		if (task.status === DONE) {
			taskList.push(<Task task={task.name} key={task.id} id={task.id} status={DONE} isChecked={true} setTasks={setTasks} tasks={tasks} />)
		}
	})
	const isTitleNotVisible = taskList.length === 0;

	return (
		<Container>
			{isTitleNotVisible ? '' : <h2 className="subtitle">готово<sup>({taskList.length})</sup></h2>}
			{taskList}
		</Container>
	)

}