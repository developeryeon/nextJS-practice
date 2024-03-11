import React from 'react';

const SSG = async () => {
	const response = await fetch('https://catfact.ninja/fact');
	const { fact, length } = await response.json();

	return (
		<div>
			<h3>SSG 페이지!</h3>
			<p>SSG fact : {fact}</p>
			<p>SSG length : {length}</p>
		</div>
	);
};

export default SSG;
