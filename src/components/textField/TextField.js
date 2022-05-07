import React from 'react';

const TextField = ({ label, inputProps, onChange, value,maxLength }) => {
	return (
		<div className='flex flex-col'>
			<label className='mb-2 text-gray-800'>{label}</label>
			<input
				className='bg-gray-200  p-2 outline-none rounded-full inputGeneral '
				{...inputProps}
				onChange={onChange}
				value={value}
				required
				maxLength={maxLength}
			/>
		</div>
	);
};

export default TextField;
