import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/button/Button';
import Textarea from '../components/Textarea/Textarea';
import { editTodo } from '../redux/ToDoSlice';
import Input from '../components/Input/Input';

const EditToDo = () => {
	const params = useParams();
	const dispatch = useDispatch();
	const todoApp = useSelector((store) => store.todoApp);
	const navigate = useNavigate();
	const todoList = () => navigate('/');
	const existingToDo = todoApp.filter((todo) => todo.id === params.id);
	const { title, text } = existingToDo[0];
	const [values, setValues] = useState({
		title,
		text,
	});
	const handleEditToDO = () => {
		setValues({ title: '', text: '' });
		dispatch(
			editTodo({
				id: params.id,
				title: values.title,
				text: values.text,
			})
		);
		todoList();
	};
	return (
		<div className='container p-4 rounded-md drop-shadow-lg mt-10  flex flex-col justify-center bg-white w-[17rem]'>
			<Input
				value={values.title}
				onChange={(e) => setValues({ ...values, title: e.target.value })}
				inputProps={{ type: 'text', placeholder: 'Title' }}
				maxLength='20'
			/>
			<Textarea
				value={values.text}
				onChange={(e) => setValues({ ...values, text: e.target.value })}
			/>

			<div className='flex mx-auto'>
				<Button onClick={handleEditToDO}>Edit</Button>
				<Button onClick={todoList}>Cancel</Button>
			</div>
		</div>
	);
};

export default EditToDo;
