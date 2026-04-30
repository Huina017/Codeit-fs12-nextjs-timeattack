import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header>
      <Link href="/">
        <h1>ToDo</h1>
      </Link>
      <nav>
        <Link href="/todos">
        </Link>
        <Link href="/todos/new">
        </Link>
      </nav>
    </header>
  )
};