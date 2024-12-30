import Link from 'next/link'
import Image from 'next/image'
import backgroundImage from '../assets/undraw_learning_2jue.png'

export default function Hero() {
  return (
    <div className="relative bg-gray-900 text-white h-[50vh]">
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Learning illustration"
          objectFit="contain"
          quality={100}
          priority
          style={{ height: '100%', width: '100%' }}
        />
        <div className="absolute inset-0 bg-gray-900 opacity-80"></div>
      </div>
      <div className="relative z-10 container mx-auto px-6 py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Master Data Structures
        </h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Visualize, learn, and conquer complex data structures with our
          interactive platform. From linked lists to graphs, we have got you
          covered.
        </p>
        <Link
          href="/linked-list"
          className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-300 inline-block"
        >
          Start Learning
        </Link>
      </div>
    </div>
  )
}
