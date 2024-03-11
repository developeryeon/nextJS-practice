'use client';
import React, { useEffect, useState } from 'react';

const CSR = () => {
	const [fact, setFact] = useState('');
	const [loading, setLoading] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('https://catfact.ninja/fact');
			const { fact, loading } = await response.json();
			setFact(fact);

			setLoading(loading);
			console.log(fact, loading);
		};
		fetchData();
	}, []);

	return (
		<div>
			<h1>CSR page</h1>
			<div>CSR fact: {fact}</div>
			<div>CSR loading: {loading}</div>
		</div>
	);
};

export default CSR;
