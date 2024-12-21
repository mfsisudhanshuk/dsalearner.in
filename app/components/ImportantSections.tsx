import Link from 'next/link'
import LinkedListVisualizer from './LinkedListVisualizer'

export default function ImportantSections() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">
            Interactive Visualizations
          </h3>
          <p className="mb-4">
            Experience data structures in action with our interactive
            visualizations.
          </p>
          <LinkedListVisualizer />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">
            Comprehensive Curriculum
          </h3>
          <p className="mb-4">
            From basic to advanced, our curriculum covers a wide range of data
            structures.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Linked Lists</li>
            <li>Binary Trees</li>
            <li>Graphs</li>
            <li>Hash Tables</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-12">
        <Link
          href="/about"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
        >
          Learn More About Us
        </Link>
      </div>
    </div>
  )
}
