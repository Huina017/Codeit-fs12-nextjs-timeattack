import Link from "next/link";
import TodoCard from "@/app/components/common/TodoCard";

export default async function ToDosPage() {
  const res = await fetch("http://localhost:4000/todos", {
    cache: "no-store"
  });

  const todos = await res.json();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">ToDo List</h1>

      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div >

  )
}