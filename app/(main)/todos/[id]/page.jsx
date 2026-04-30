import { notFound } from "next/navigation";

async function getTodo(id) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/todos/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) return null;
    return res.json();
}

export default async function TodoDetailPage({ params }) {
    const { id } = await params;

    const todo = await getTodo(id);

    if (!todo) return notFound();

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">{todo.title}</h1>

            <div className="border p-6 rounded-lg space-y-3 mb-4">
                <p className="font-bold">{todo.content}</p>
                <p>우선 순위 : {todo.priority}</p>
                <p>{new Date(todo.createdAt).toLocaleString()}</p>
                <p>완료 여부 : {todo.completed ? "완료" : "진행중"}</p>
            </div>

            <a href="/todos" className="text-lg font-bold"> ← 목록으로 돌아가기</a>
        </div>
    )
}