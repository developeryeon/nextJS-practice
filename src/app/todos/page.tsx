'use client';

import { QueryClient, useMutation, useQuery } from '@tanstack/react-query';
import React from 'react';
import type { NewTodo, Todo } from '@/types';

const TodosPage = () => {
	const queryClient = new QueryClient();

	const [title, setTitle] = React.useState('');
	const [contents, setContents] = React.useState('');

	const {
		data: todos,
		isLoading,
		isError,
	} = useQuery({
		queryKey: ['todos'],
		queryFn: async () => {
			const response = await fetch(`http://localhost:4000/todos`);
			const todos = await response.json();
			return todos;
		},
	});

	const newTodoMutation = useMutation({
		mutationFn: async (newTodo: NewTodo) => {
			const response = await fetch(`http://localhost:4000/todos`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newTodo),
			});
			const todo = await response.json();
			return todo;
		},
	});

	if (isLoading) {
		return <div>로딩중...</div>;
	}

	if (isError) {
		return <div>에러에요...</div>;
	}

	return (
		<div>
			<h1>TODO-LIST</h1>

			<section>
				<h2>새로운 투두 추가하기</h2>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						newTodoMutation.mutate(
							{ title, contents },
							{
								onSuccess: () => {
									setTitle('');
									setContents('');

									queryClient.invalidateQueries({
										queryKey: ['todos'],
									});
								},
							}
						);
					}}
				>
					<div>
						<label htmlFor="title">Title</label>
						<input className="border-4 border-blue-500/20" type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
					</div>
					<div>
						<label htmlFor="contents">Contents</label>
						<input className="border-4 border-blue-500/20" type="text" id="contents" value={contents} onChange={(e) => setContents(e.target.value)} />
					</div>
					<button className="bg-violet-300 text-white rounded" type="submit">
						Add Todo
					</button>
				</form>
			</section>

			{todos.map((todo: Todo) => {
				return (
					<div key={todo.id} className="bg-blue-100 border-4 border-indigo-500/50 rounded-md p-8 mb-2 text-blue-700">
						<h2 className="text-purple-600/75">{todo.title}</h2>
						<p>{todo.contents}</p>
						{todo.isDone ? <p>Done</p> : <p>Not done</p>}
					</div>
				);
			})}
		</div>
	);
};

export default TodosPage;
