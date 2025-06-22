import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="bg-blue-600 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Videos?</h2>
        <p className="text-lg mb-8">
          Let’s take your content to the next level with cinematic editing and fast delivery.
        </p>
        <Link href="/contact">
          <span className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
            Get Started Now
          </span>
        </Link>
      </div>
    </section>
  );
}
