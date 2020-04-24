import React from 'react';

export interface PageTitleProperties {
	title: string;
}

const PageTitle: React.FC<PageTitleProperties> = (properties) => {
	// properties
	const { title } = properties;

	return (
		<h1>{title}</h1>
	);
};

export default PageTitle;
