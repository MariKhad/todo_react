export const DeleteButton = ({ deleteTask }) => {
	return (
		<button type='button' className='button delete' onClick={deleteTask} >
			<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
				<g id="Icon">
					<path id="Vector" d="M5.00033 15.8333C5.00033 16.75 5.75033 17.5 6.66699 17.5H13.3337C14.2503 17.5 15.0003 16.75 15.0003 15.8333V5.83333H5.00033V15.8333ZM15.8337 3.33333H12.917L12.0837 2.5H7.91699L7.08366 3.33333H4.16699V5H15.8337V3.33333Z" fill="currentColor" />
				</g>
			</svg>
		</button>
	)
}
