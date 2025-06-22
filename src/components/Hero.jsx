import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import Testimonials from "./Testimonials";

export default function Home() {
  return (
    <>
      <Head>
        <title>EditlyPro - Premium Video Editing Agency</title>
        <meta
          name="description"
          content="EditlyPro is a professional video editing agency helping creators and brands with premium video content."
        />
      </Head>

      <Header />

      <main className="pt-24 px-6 max-w-7xl mx-auto select-none">
        <section className="flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Left Side: Text Content */}
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Elevate Your <span className="text-blue-600">Visual Story</span>{" "}
              <br /> with Premium Edits
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-md">
              We help creators, brands, and businesses produce scroll-stopping
              videos that captivate and convert.
            </p>
            <a
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Get Started
            </a>
          </div>

          {/* Right Side: Layered Images */}
          <div className="relative w-full md:w-1/2 h-[400px] md:h-[500px] flex  top-20 justify-center items-center">
            <img
              src="download.jpeg"
              alt="Edit Sample 1"
              className="absolute top-0 left-1/2 transform -translate-x-1/2 rotate-[-6deg] w-72 md:w-80 rounded-xl shadow-xl"
            />
            <img
              src="download (2).jpeg"
              alt="Edit Sample 2"
              className="absolute top-16 left-1/2 transform -translate-x-1/2 rotate-[4deg] w-72 md:w-80 rounded-xl shadow-xl z-10"
            />
            <img
              src="download (1).jpeg"
              alt="Edit Sample 3"
              className="absolute top-32 left-1/2 transform -translate-x-1/2 rotate-[0deg] w-72 md:w-80 rounded-xl shadow-xl z-20"
            />
          </div>
        </section>
        <section className="mt-28">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Video Editing Services
            </h2>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto">
              We offer a range of services tailored to content creators, brands,
              and businesses looking to maximize their video impact.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Service Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
              <img src="yt.png" alt="YouTube Edits" className=" mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                YouTube Video Editing
              </h3>
              <p className="text-gray-600 text-sm">
                Long-form editing, intros/outros, jump cuts, transitions, and
                engaging visuals to retain viewers.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
              <img src="reels.jpeg" alt="Reels & Shorts" className=" mb-4" />
              <h3 className="text-xl font-semibold mb-2">Reels & Shorts</h3>
              <p className="text-gray-600 text-sm">
                Scroll-stopping vertical edits with subtitles, sound effects,
                and creative cuts optimized for social media.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
              <img src="corp.jpeg" alt="Corporate Edits" className=" mb-4" />
              <h3 className="text-xl font-semibold mb-2">Corporate Videos</h3>
              <p className="text-gray-600 text-sm">
                Clean, professional edits for events, promos, product
                explainers, and internal presentations.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Testimonials />
      
      <Footer />
      <WhatsAppButton />
    </>
  );
}
