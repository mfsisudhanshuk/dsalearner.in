import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">DataStructures101</h3>
            <p className="text-sm">
              Empowering developers to master data structures and algorithms.
            </p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Data Structures</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/linked-list" className="hover:text-blue-300">
                  Linked List
                </Link>
              </li>
              <li>
                <Link href="/binary-tree" className="hover:text-blue-300">
                  Binary Tree
                </Link>
              </li>
              <li>
                <Link href="/graph" className="hover:text-blue-300">
                  Graph
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-2">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-300">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} DataStructures101. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
