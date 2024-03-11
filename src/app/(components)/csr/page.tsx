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
		<div>
			<h1>CSR page</h1>
			<div>CSR fact: {fact}</div>
			<div>CSR length: {length}</div>
		</div>
	);
};

export default CSR;
