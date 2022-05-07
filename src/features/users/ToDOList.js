import React from 'react';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import { deleteTodo } from '../../redux/ToDoSlice';

const ToDoList = () => {

	const todoApp = useSelector((store) => store.todoApp);
	const dispatch = useDispatch();
	const handleRemoveToDo = (id) => {
		dispatch(deleteTodo({ id }));
	};
	

	const renderCard = () =>
		todoApp.map((todo) => (
			<div
				key={todo.id}
				className='bg-slate-400 p-1 mb-2 rounded-lg containerText justify-center items-center '
			>
				<div className='flex flex-col  '>
					<div className='  font-bold text-lg text-gray-700'>{todo.title}</div>
					<div className=' font-normal text-gray-600 '>{todo.text}</div>
				</div>

				<div className='flex text-lime-50 '>
					<Link to={`edit-todo/${todo.id}`}>
						{' '}
						<button>
							<AiOutlineEdit />{' '}
						</button>
					</Link>
					<button onClick={() => handleRemoveToDo(todo.id)}>
						<AiOutlineDelete />{' '}
					</button>
				</div>
			</div>
		));

	return (
		<div>
			<Link to={'/add-todo'}>
				<Button>Add todo list</Button>
			</Link>
			<div >
				{todoApp.length ? (
					renderCard()
				) : (
					<p className='text-center col-span-2 text-gray-700 font-semibold'>
						No List
					</p>
				)}
			</div>
		</div>
	);
};

export default ToDoList;
