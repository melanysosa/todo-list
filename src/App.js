import { Route, Routes } from 'react-router-dom';
import ToDoList from './features/users/ToDOList'
import AddToDo from './features/users/AddToDo';
import EditToDo from './features/users/EditToDo';


function App() {
  return (
		<div className='w-full h-full flex flex-col justify-center items-center mt-[100px] mb-[100px] '>
			<div>
				<h1 className='text-center text-lime-50 text-3xl'>ToDo list</h1>
				<Routes>
					<Route path='/' element={<ToDoList />} />
					<Route path='add-todo' element={<AddToDo />} />
					<Route path='/edit-todo/:id' element={<EditToDo />} />
				</Routes>
			</div>
		</div>
  );
}

export default App;
