import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-transparent absolute top-0 left-0 right-0 z-20">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">
            DataStructures101
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link
              href="/linked-list"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              Linked List
            </Link>
            <Link
              href="/binary-tree"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              Binary Tree
            </Link>
            <Link
              href="/graph"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              Graph
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              About
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
