import { useEffect, useState } from "react";
import "./App.css";
import CreateTask from "./create/CreateTask";
import DisplayTasks from "./display/DisplayTasks";

function App() {
	const [tasks, setTasks] = useState(null);
	const [doneTask, setDoneTask] = useState(true);

	const getTaskList = async () => {
		const response = await fetch("http://localhost:4000/tasks");
		const tasksList = await response.json();
		setTasks(tasksList);

		const filtered = await tasksList.filter((el) => el.state == true).length;
		await setDoneTask(filtered);
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
