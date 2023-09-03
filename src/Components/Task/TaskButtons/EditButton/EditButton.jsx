export const EditButton = ({ editTask }) => {
	return (
		<button type='button' className='button edit' onClick={editTask}>
			<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g id="Icon">
					<path id="Vector" d="M2.49902 14.3761V17.5011H5.62402L14.8407 8.28444L11.7157 5.15944L2.49902 14.3761ZM17.2574 5.86777C17.5824 5.54277 17.5824 5.01777 17.2574 4.69277L15.3074 2.74277C14.9824 2.41777 14.4574 2.41777 14.1324 2.74277L12.6074 4.26777L15.7324 7.39277L17.2574 5.86777Z" fill="currentColor" />
				</g>
			</svg>
		</button>
	)
}


