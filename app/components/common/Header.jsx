import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="p-5 border-b border-gray-300 flex justify-between items-center">
      <Link href="/">
        <h1 className="text-3xl font-bold cursor-pointer">ToDo</h1>
      </Link>
      <nav className="flex gap-4 text-lg font-bold">
        <Link href="/todos">
          목록
        </Link>
        <Link href="/todos/new">
          추가
        </Link>
      </nav>
    </header>
  )
};