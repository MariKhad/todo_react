import './AddTask.css';
import { TODO } from '../../const.js';
import { Container } from "../Layout/Container/Container";


export const AddTask = ({ setTasks, tasks }) => {

	const handleSubmit = (e) => {
		e.preventDefault();
		const value = e.target.firstChild.value;
		if (value.length > 3) {
			localStorage.setItem(JSON.stringify(value), JSON.stringify({ 'name': value, 'status': TODO }));
			let tempTasks = [...tasks];
			tempTasks.push({ 'name': value, 'status': TODO });
			setTasks([...tempTasks]);
			e.target.firstChild.value = '';
		} else {
			alert('Введите имя новой задачи в виде строки длиннее 3х символов');
		}
	}


	return (
		<Container>
			<form onSubmit={handleSubmit} className='form'>
				<input id='add' type='text' className="input" placeholder="Имя новой задачи"></input>
				<button type='submit' className='button add'>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						<g id="AddFilled">
							<path id="Vector" d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="currentColor" fill-opacity="0.5" />
						</g>
					</svg>
				</button>
			</form>
		</Container>
	)
}