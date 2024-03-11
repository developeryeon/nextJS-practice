'use client';
import React, { useEffect, useState } from 'react';

const CSR = () => {
	const [fact, setFact] = useState('');
	const [length, setLength] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('https://catfact.ninja/fact');
			const { fact, length } = await response.json();
			setFact(fact);

			setLength(length);
			console.log(fact, length);
		};
		fetchData();
	}, []);

	return (
		<div className="mx-auto max-w-lg p-8 bg-white shadow-md rounded-lg">
			<h1 className="text-3xl font-bold mb-4">CSR page</h1>
			<div className="mb-4">
				<p className="text-gray-700">CSR fact: {fact}</p>
			</div>
			<div className="text-gray-700">CSR length: {length}</div>
		</div>
	);
};

export default CSR;
