import React from 'react';

const SSR = async () => {
	const response = await fetch(`https://catfact.ninja/fact`, {
		cache: 'no-cache',
	});

	const { fact, length } = await response.json();

	return (
		<div>
			<p>SSR Page</p>
			<p>SSR fact : {fact}</p>
			<p>SSR length : {length}</p>
		</div>
	);
};

export default SSR;
