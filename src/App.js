import { useEffect, useState } from "react";
import "./App.css";
import CreateTask from "./create/CreateTask";
import DisplayTasks from "./display/DisplayTasks";

function App() {
	const [tasks, setTasks] = useState(null);

	useEffect(() => {
		fetch("http://localhost:4000/task")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setTasks(data);
			});
	}, []);

	return (
		<div className='App'>
			<CreateTask />
			{tasks && <DisplayTasks tasks={tasks} />}
		</div>
	);
}

export default App;
