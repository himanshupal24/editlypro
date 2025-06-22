import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const pricingPlans = [
  {
    title: 'Basic',
    price: '$15',
    description: 'Perfect for starters and simple edits.',
    features: [
      '1 Video (up to 3 min)',
      'Basic transitions & cuts',
      'Royalty-free music',
      '2-day delivery',
    ],
    isPopular: false,
  },
  {
    title: 'Pro',
    price: '$40',
    description: 'For creators needing consistent quality.',
    features: [
      'Up to 3 videos (5–8 mins)',
      'Dynamic transitions & text',
      'Color grading + audio sync',
      '2 revisions',
      '1-day delivery',
    ],
    isPopular: true,
  },
  {
    title: 'Premium',
    price: '$80',
    description: 'Ideal for brands and high-impact content.',
    features: [
      'Unlimited videos (max 10 mins each)',
      'Advanced editing + motion graphics',
      'Subtitles, color & audio mastering',
      'Thumbnail design',
      'Priority delivery',
    ],
    isPopular: false,
  },
];

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing | EditlyPro</title>
        <meta
          name="description"
          content="Choose a video editing package that fits your content needs. Transparent pricing for creators and businesses."
        />
      </Head>

      <Header />

      <main className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Pricing Plans</h1>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            Simple, flexible pricing. No hidden costs. Pick a plan that fits your project.
          </p>
        </section>

        <section className="grid gap-8 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl border p-6 shadow-sm transition hover:shadow-md ${
                plan.isPopular ? 'border-blue-600 shadow-lg bg-white' : 'bg-white'
              }`}
            >
              {plan.isPopular && (
                <div className="text-xs font-bold text-white bg-blue-600 px-3 py-1 rounded-full w-fit mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
              <p className="text-gray-500 mb-4">{plan.description}</p>
              <div className="text-3xl font-bold text-blue-600 mb-4">{plan.price}</div>
              <ul className="text-sm text-gray-700 mb-6 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 text-blue-500">✔</span> {feature}
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
              >
                Get Started
              </a>
            </div>
          ))}
        </section>
      </main>
       <Footer />
       <WhatsAppButton />
    </>
  );
}
