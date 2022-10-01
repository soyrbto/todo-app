import "./DisplayTasks.scss";

const DisplayTasks = ({ tasks }) => {
	return (
		<div className='displayTask-wrapper'>
			<div className='header'>
				<h1>Your task list</h1>
				<h2>Complete 3 out of 5</h2>
				<input type='text' placeholder='Filter' />
			</div>
			<div className='tasks-list'>
				{/* esto es lo que tengo que iterar */}
				{tasks.map((task) => (
					<div className='task' key={task.id}>
						<input type='checkbox' name='' id='' />
						<div className='task-title'>{task.description}</div>
					</div>
				))}
				{/* hasta aqui la iteracion */}
			</div>
		</div>
	);
};

export default DisplayTasks;
