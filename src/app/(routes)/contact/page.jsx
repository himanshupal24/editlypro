import Footer from '@/components/Footer';
import Header from '@/components/Header';
import WhatsAppButton from '@/components/WhatsAppButton';
import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | EditlyPro</title>
        <meta
          name="description"
          content="Contact EditlyPro for custom video editing services. Let's discuss your project today!"
        />
      </Head>

      <Header />

      <main className="pt-28 pb-20 px-6 max-w-4xl mx-auto">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Let's Talk</h1>
          <p className="text-gray-600 text-lg">
            Got a project in mind? Fill the form or message us directly on WhatsApp.
          </p>
        </section>

        <div className="bg-white shadow-xl rounded-xl p-8 space-y-6">
          <form
            action="https://formsubmit.co/himanshupal2412@gmail.com" // replace with your email
            method="POST"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Anti-spam honeypot field for FormSubmit */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

            <button
              type="submit"
              className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* WhatsApp Contact */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Prefer WhatsApp?</p>
          <a
            href="https://wa.me/919971686542" // replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      </main>
       <Footer />
       <WhatsAppButton />
    </>
  );
}
