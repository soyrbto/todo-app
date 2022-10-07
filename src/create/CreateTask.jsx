import "./CreateTask.scss";
import React, { useState } from "react";
import createTaskImg from "../img/createtask.svg";

function CreateTask({ updateTaskList }) {
	const [newTaskTitle, setNewtaskTitle] = useState("");

	const addTask = async (newTask) => {
		await fetch("http://localhost:4000/tasks", {
			method: "POST",
			body: JSON.stringify(newTask),
			headers: { "content-type": "application/json" },
		});

		await updateTaskList();
	};

	const buttonHandler = (e) => {
		if (e.key === "Enter") {
			const newTask = {
				state: false,
				description: newTaskTitle,
			};
			addTask(newTask);
			setNewtaskTitle("");
		}
	};

	const handleChange = (event) => {
		setNewtaskTitle(event.target.value);
	};

	return (
		<div className='CreateTask-wrapper'>
			<h1>What needs to be done today?</h1>
			<input
				value={newTaskTitle}
				onChange={handleChange}
				type='text'
				placeholder='type here and tap or click the button'
				onKeyDown={buttonHandler}
			/>
			<button onClick={() => buttonHandler()}>New task</button>
			<img src={createTaskImg} alt='' />
		</div>
	);
}

export default CreateTask;
