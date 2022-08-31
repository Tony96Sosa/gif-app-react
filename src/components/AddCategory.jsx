import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({onNewCategory}) => {
	const [ inputValue, setInputValue ] = useState('');
	const handleChange = (e) => {
		setInputValue(e.target.value)
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		if(inputValue.trim().length <= 1) return;
		onNewCategory(inputValue);
		setInputValue('');
	}
	return(
		<form onSubmit={ handleSubmit }>
			<input
				type='text'
				placeholder='Buscar Gifs'
				value={inputValue}
				onChange={ handleChange }
			/>
		</form>
	)
};

AddCategory.propTypes = {
	onNewCategory: PropTypes.func.isRequired,
}