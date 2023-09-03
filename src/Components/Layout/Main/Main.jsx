import { Container } from '../Container/Container'
import './Main.css'

export const Main = ({ children }) => {


	return (
		<Container>
			<div className='main'>{children}</div>
		</Container>
	)
}




