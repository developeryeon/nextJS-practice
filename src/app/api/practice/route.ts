export async function GET(request: Request) {
	const response = await fetch('http://localhost:4000/todos');
	const todos = await response.json();

	if (!todos) {
		return new Response('Todo is not found', {
			status: 404,
		});
	}

	// todos가 있다면 가지고 있는 todos 배열을 전달받아서 쓸 수 있다
	return Response.json({
		todos: todos,
	});
}

export async function POST(request: Request) {
	// body에서 값을 뽑아오기
	// const body = await request.json();
	const { title, contents } = await request.json();

	const response = await fetch('http://localhost:4000/todos', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		// id는 자동생성됨
		body: JSON.stringify({ title, contents, isDone: false }),
	});
	// 입력이 된 그 todo를 반환받아온다.
	const todo = await response.json();

	// await 내부직원알림();
	return Response.json({
		todo,
	});
}

export async function DELETE(request: Request) {
	const { id } = await request.json();
	console.log(id);
	const response = await fetch(`http://localhost:4000/todos/${id}`, {
		method: 'DELETE',
	});
	const todo = await response.json();

	return Response.json({
		todo,
	});
}
