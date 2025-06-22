import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Emily Chen',
    role: 'YouTuber & Lifestyle Vlogger',
    quote: 'EditlyPro made my videos look professional and polished. Their team truly understands storytelling through editing.',
    image: '/testimonials/emily.jpg',
  },
  {
    name: 'Mike Johnson',
    role: 'Marketing Manager, Startup Co.',
    quote: 'We saw a 40% increase in engagement after using EditlyPro’s edits for our promo reels. Fast turnaround and top quality.',
    image: '/testimonials/mike.jpg',
  },
  {
    name: 'Aarav Mehta',
    role: 'Fitness Coach & Creator',
    quote: 'The best editing partner I’ve worked with — reliable, affordable, and creative. Highly recommend!',
    image: '/testimonials/aarav.jpg',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Clients Say</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Don’t just take our word for it. Hear what creators and brands say about working with EditlyPro.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-left">
            <FaQuoteLeft className="text-blue-600 text-2xl mb-4" />
            <p className="text-gray-700 italic mb-6">“{t.quote}”</p>
            <div className="flex items-center">
              {/* <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              /> */}
              <div>
                <h4 className="font-semibold">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
