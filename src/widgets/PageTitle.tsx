import React from 'react';

export interface PageTitleProperties {
	title: string;
}

const PageTitle: React.FC<PageTitleProperties> = (properties) => {
	// properties
	const { title } = properties;

	return (
		<div>{title}</div>
	);
};

export default PageTitle;
