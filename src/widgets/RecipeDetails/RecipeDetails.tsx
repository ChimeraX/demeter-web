import React from 'react';
import { Modal } from '@material-ui/core';
import RecipeDetailsContent, { RecipeDetailsContentProperties } from './RecipeDetailsContent';

export interface RecipeDetailsProperties {
	open: boolean;
	contentProperties: RecipeDetailsContentProperties;
	onClose: () => void;
}

const RecipeDetails: React.FC<RecipeDetailsProperties> = (properties) => {
	// properties
	const { open, onClose, contentProperties } = properties;

	return (
		<Modal
			open={open}
			onClose={onClose}>
			{open ? <RecipeDetailsContent {...contentProperties}/> : <div/>}
		</Modal>
	);
};

export default RecipeDetails;
