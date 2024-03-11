import React from 'react';

const SSR = async () => {
	const response = await fetch(`https://catfact.ninja/fact`, {
		cache: 'no-cache',
	});

	const { fact, length } = await response.json();

	return (
		<div className="mx-auto max-w-lg p-8 bg-white shadow-md rounded-lg">
			<h1 className="text-3xl font-bold mb-4">SSR page!</h1>
			<div className="mb-4">
				<p className="text-gray-700">SSR fact : {fact}</p>
				<p className="text-gray-700">SSR length : {length}</p>
			</div>
		</div>
	);
};

export default SSR;
