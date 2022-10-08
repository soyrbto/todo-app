import { useState } from "react";
import "./DisplayTasks.scss";

const DisplayTasks = ({ tasks, doneTask, updateTaskList }) => {
	const [filterValue, setFilterValue] = useState("");

	const updateState = (e) => {
		const idTask = e.target.id;
		const stateTask = tasks.find((item) => item.id == idTask).state;

		fetch(`http://localhost:4000/tasks/${idTask}`, {
			method: "PATCH",
			body: JSON.stringify({ state: !stateTask }),
			headers: { "content-type": "application/json" },
		}).then(() => updateTaskList());
	};

	const deleteTask = (e) => {
		const idTask = e.target.id;

		fetch(`http://localhost:4000/tasks/${idTask}`, {
			method: "DELETE",
		}).then(() => updateTaskList());
	};

	const handleChange = (e) => {
		if (e.key === "Enter") {
			setFilterValue("");
		}
		updateTaskList(filterValue);
		setFilterValue(e.target.value);
	};

	return (
		<div className='displayTask-wrapper'>
			<div className='header'>
				<h1>Your task list</h1>
				<h2>
					Completed {doneTask} out of {tasks.length}
				</h2>
				<input
					type='text'
					placeholder='Filter'
					onChange={handleChange}
					onKeyUp={handleChange}
				/>
			</div>
			<div className='tasks-list'>
				{tasks.map((task) => (
					<div className='task' key={task.id}>
						<input
							type='checkbox'
							name=''
							id={task.id}
							defaultChecked={task.state}
							onClick={updateState}
						/>
						<div className={`task-title ${task.state ? "completed" : ""}`}>
							{task.description}
						</div>
						<button className='delete' onClick={deleteTask} id={task.id}>
							x
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default DisplayTasks;
