import React from 'react';

const ISR = async () => {
	const response = await fetch(`https://catfact.ninja/fact`, {
		next: {
			revalidate: 5,
		},
	});
	const { fact, loading } = await response.json();

	return (
		<div>
			<h3>ISR 페이지!</h3>
			<p>ISR fact : {fact}</p>
			<p>ISR length : {loading}</p>
		</div>
	);
};

export default ISR;
