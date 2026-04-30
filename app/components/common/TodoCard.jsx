import Link from "next/link";

export default function TodoCard({ todo }) {
    return (
        <div className="p-8 m-4 border rounded">
            <Link href={`/todos/${todo.id}`}>
                <h2 className="mb-2 text-xl font-bold">{todo.title}</h2>
            </Link>
            <p>{todo.content}</p>
            <p>우선 순위 : {todo.priority}</p>
            <p>완료 여부 : {todo.completed ? "완료" : "진행중"}</p>
        </div>
    )
}