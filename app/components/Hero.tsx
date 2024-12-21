import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative bg-gray-900 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/placeholder.svg?height=600&width=1200')",
          opacity: 0.3,
        }}
      ></div>
      <div className="relative z-10 container mx-auto px-6 py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Master Data Structures
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Visualize, learn, and conquer complex data structures with our
          interactive platform. From linked lists to graphs, we have got you
          covered.
        </p>
        <Link
          href="/linked-list"
          className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 inline-block"
        >
          Start Learning
        </Link>
      </div>
    </div>
  )
}
