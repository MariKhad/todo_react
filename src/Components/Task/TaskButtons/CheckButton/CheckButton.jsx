import './CheckButton.css'

export const CheckButton = ({ saveTask }) => {
	return (
		<button type='submit' className='button check' onClick={saveTask}>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
				<g id="CheckFilled">
					<path id="Vector" d="M8.79508 15.8749L4.62508 11.7049L3.20508 13.1149L8.79508 18.7049L20.7951 6.70492L19.3851 5.29492L8.79508 15.8749Z" fill="currentColor" />
				</g>
			</svg>
		</button>
	)
}