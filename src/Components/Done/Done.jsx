import { Container } from '../Layout/Container/Container';
import { Task } from '../Task/Task'
import { DONE } from '../../const';
import { useTask } from '../../Context';


export const Done = () => {
	const taskList = [];
	let tasks = useTask();
	tasks.forEach(task => {
		if (task.status === DONE) {
			taskList.push(<Task task={task.name} key={task.id} id={task.id} status={DONE} isChecked={true} />)
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