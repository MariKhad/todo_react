import { Container } from '../Layout/Container/Container';
import { Task } from '../Task/Task'
import { TODO } from '../../const';

export const ToDo = ({ tasks, setTasks, deleteTask, changeStatus }) => {
	const taskList = [];
	tasks.forEach(task => {
		if (task.status === TODO) {
			taskList.push(<Task task={task.name} key={task.name} status={TODO} isChecked={false} tasks={tasks} setTasks={setTasks} />)
		}
	})

	const isTitleVisible = taskList === 0;

	return (
		<Container>
			{isTitleVisible ? '' : <h2 className="subtitle">план<sup>({taskList.length})</sup></h2>}
			{taskList}
		</Container>
	)

}

