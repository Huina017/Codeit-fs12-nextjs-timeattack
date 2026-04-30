import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6">ToDo List</h1>
        <div className="flex flex-col gap-4">
          <Link href="/todos"
            className="bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">
            ToDo 보러가기
          </Link>
          <Link href="/todos/new"
            className="bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition">
            나의 ToDo List 만들러 가기
          </Link>
        </div>
      </div>
    </main>
  );
}
