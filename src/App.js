import { useEffect, useState } from "react";
import CreateTask from "./create/CreateTask";
import DisplayTasks from "./display/DisplayTasks";
import "./App.css";

function App() {
	const [tasks, setTasks] = useState(null);
	const [doneTask, setDoneTask] = useState(true);

	const getTaskList = async (searchTerm) => {
		let url = "http://localhost:4000/tasks?_";

		if (searchTerm) {
			url += `&q=${searchTerm}`;
		}

		const response = await fetch(url);
		const tasksList = await response.json();
		setTasks(tasksList);

		const filtered = await tasksList.filter((el) => el.state == true).length;
		setDoneTask(filtered);
	};

	useEffect(() => {
		getTaskList();
	}, []);

	return (
		<div className='App'>
			<CreateTask updateTaskList={getTaskList} />
			{tasks && (
				<DisplayTasks
					tasks={tasks}
					updateTaskList={getTaskList}
					doneTask={doneTask}
				/>
			)}
		</div>
	);
}

export default App;
