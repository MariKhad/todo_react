import { Container } from '../Layout/Container/Container';
import { Task } from '../Task/Task'
import { TODO } from '../../const';
import { useTask } from '../../Context';

export const ToDo = () => {
	let tasks = useTask();
	const taskList = [];
	tasks.forEach(task => {
		if (task.status === TODO) {
			taskList.push(<Task task={task.name} key={task.id} id={task.id} status={TODO} isChecked={false} />)
		}
	})

	const isTitleNotVisible = taskList.length === 0;

	return (
		<Container>
			{isTitleNotVisible ? '' : <h2 className="subtitle">план<sup>({taskList.length})</sup></h2>}
			{taskList}
		</Container>
	)

}

