import Footer from '@/components/Footer';
import Header from '@/components/Header';
import WhatsAppButton from '@/components/WhatsAppButton';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | EditlyPro</title>
        <meta
          name="description"
          content="Meet the team behind EditlyPro. Discover our story, values, process, and passion for delivering world-class video edits."
        />
      </Head>

      <Header />

      <main className="pt-28 pb-20 px-6 max-w-6xl mx-auto">
        {/* Intro */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">We Don’t Just Edit — We Craft Stories.</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            EditlyPro is more than a service — it’s your creative partner in bringing ideas to life with video. From content creators to growing brands, we turn raw footage into magic.
          </p>
        </section>

        {/* Our Story */}
        <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <div>
            <h2 className="text-2xl font-bold mb-4">How It All Started</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2025, EditlyPro was born out of a love for storytelling through motion. With nothing more than a laptop, a few editing tools, and a deep passion for design, we began helping YouTubers and local creators make their content shine.
            </p>
            <p className="text-gray-700">
              Since then, we’ve grown into a small but powerful team working with influencers, small businesses, and online brands to create content that converts and connects.
            </p>
          </div>
          <div>
            <img
              src="download.jpeg" // Replace with your own image
              alt="EditlyPro Story"
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </div>
        </section>

        {/* Mission */}
        <section className="text-center mb-20">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            To empower creators and brands with professional video editing that feels personal, powerful, and authentic — without the high agency price tag.
          </p>
        </section>

        {/* Our Process */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-center mb-10">How We Work</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">1. Understand Your Vision</h3>
              <p className="text-sm text-gray-600">
                We begin by understanding your goals, audience, and creative style.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">2. Edit with Precision</h3>
              <p className="text-sm text-gray-600">
                From cuts and effects to color grading and sound — we handle it all, frame by frame.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">3. Revisions & Delivery</h3>
              <p className="text-sm text-gray-600">
                You review the edit. We fine-tune as needed. Final files are delivered on time — every time.
              </p>
            </div>
          </div>
        </section>

        {/* Optional: Founder Section */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="/corp.jpeg" // Optional — Add your own founder photo
              alt="Founder of EditlyPro"
              className="w-full rounded-xl shadow-xl object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Meet the Founder</h2>
            <p className="text-gray-700 mb-4">
              Hi, I’m Himanshu Pal, the creative behind EditlyPro. I started this agency because I saw so many amazing creators struggling to bring their vision to life.
            </p>
            <p className="text-gray-700">
              My background in design/editing and love for storytelling inspired me to build a space where editing feels personal, fast, and reliable. Let’s collaborate and make your next project unforgettable.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
