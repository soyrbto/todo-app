import "./CreateTask.scss";
import { useState } from "react";
import createTaskImg from "../img/createtask.svg";

function CreateTask({ updateTaskList }) {
	const [newTaskTitle, setNewtaskTitle] = useState("");

	const addTask = (newTask) => {
		fetch("http://localhost:4000/tasks", {
			method: "POST",
			body: JSON.stringify(newTask),
			headers: { "content-type": "application/json" },
		}).then(() => updateTaskList());
	};

	const buttonHandler = (e) => {
		const newTask = {
			state: false,
			description: newTaskTitle,
		};

		if (e.key === "Enter") {
			addTask(newTask);
			setNewtaskTitle("");
		}
	};

	return (
		<div className='CreateTask-wrapper'>
			<h1>What needs to be done today?</h1>
			<input
				value={newTaskTitle}
				onChange={(e) => setNewtaskTitle(e.target.value)}
				type='text'
				placeholder='type here and tap or click the button'
				onKeyDown={buttonHandler}
			/>
			<button onClick={() => buttonHandler()}>New task</button>
			<img src={createTaskImg} />
		</div>
	);
}

export default CreateTask;
