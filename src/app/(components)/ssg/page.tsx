import React from 'react';

const SSG = async () => {
	const response = await fetch('https://catfact.ninja/fact');
	const { fact, length } = await response.json();

	return (
		<div className="mx-auto max-w-lg p-8 bg-white shadow-md rounded-lg">
			<h1 className="text-3xl font-bold mb-4">SSG 페이지!</h1>
			<div className="mb-4">
				<p className="text-gray-700">SSG fact : {fact}</p>
				<p className="text-gray-700">SSG length : {length}</p>
			</div>
		</div>
	);
};

export default SSG;
