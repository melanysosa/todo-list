import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/button/Button';
import TextField from '../../components/textField/TextField';
import { editTodo } from '../../redux/ToDoSlice';

const EditToDo = () => {
	const params = useParams();
	const dispatch = useDispatch();
	const todoApp = useSelector((store) => store.todoApp);
	console.log(params.id);
	const navigate = useNavigate();
	const existingToDo= todoApp.filter((todo) => todo.id === params.id);
	const { title, text } = existingToDo[0];
	const [values, setValues] = useState({
		title,
		text
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
		navigate('/');
	};
	return (
		<div className='mt-10  mx-auto'>
			<TextField
				label={'Title'}
				value={values.title}
				onChange={(e) => setValues({ ...values, title: e.target.value })}
				inputProps={{ type: 'tex', placeholder: 'Jhon Doe' }}
			/>
			<TextField
				label={'text'}
				value={values.text}
				onChange={(e) => setValues({ ...values, text: e.target.value })}
				inputProps={{ type: 'text', placeholder: 'text' }}
			/>
			<Button onClick={handleEditToDO}>Edit</Button>
		</div>
	);
};

export default EditToDo;
