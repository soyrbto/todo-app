import "./CreateTask.scss";
import createTaskImg from "../img/createtask.svg";

function test() {
	return (
		<div className='CreateTask-wrapper'>
			<h1>What needs to be done today?</h1>
			<input type='text' placeholder='type here and tap or click the button' />
			<button>New task</button>
			<img src={createTaskImg} alt='' />
		</div>
	);
}

export default test;
