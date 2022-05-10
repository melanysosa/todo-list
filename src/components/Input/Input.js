import React from 'react';

const Input = ({ inputProps, onChange, value, maxLength }) => {
	return (
		<div className='flex flex-col my-3'>
			<input
				className='bg-slate-500  p-2 outline-none rounded-full inputGeneral  text-white '
				{...inputProps}
				onChange={onChange}
				value={value}
				required
				maxLength={maxLength}
			/>
		</div>
	);
};

export default Input;
