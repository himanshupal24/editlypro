import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import Head from "next/head";

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | EditlyPro - Video Editing Agency</title>
        <meta
          name="description"
          content="Explore our professional video editing services, from YouTube and Reels to corporate and event edits."
        />
      </Head>

      <Header />

      <main className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            What We Offer
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            Professional, fast, and reliable editing services for all your video
            content needs.
          </p>
        </section>

        <section className="grid gap-10 md:grid-cols-3">
          {/* Service 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <img
              src="yt.png"
              alt="YouTube Edits"
              className=" mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">YouTube Editing</h3>
            <p className="text-gray-600 text-sm">
              Full-length YouTube video edits with cuts, effects, subtitles, and
              transitions that boost retention.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <img
              src="reels.jpeg"
              alt="Reels Editing"
              className=" mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Reels & Shorts</h3>
            <p className="text-gray-600 text-sm">
              Viral-ready Instagram Reels and YouTube Shorts with fast cuts,
              motion text, and sound sync.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <img
              src="corp.jpeg"
              alt="Corporate Videos"
              className=" mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Corporate Edits</h3>
            <p className="text-gray-600 text-sm">
              High-end edits for marketing videos, product explainers, and
              internal business communication.
            </p>
          </div>

          {/* Service 5 */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <img
              src="pod.jpeg"
              alt="Podcast Edits"
              className=" mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Podcast Editing</h3>
            <p className="text-gray-600 text-sm">
              Audio and video trimming, noise removal, waveform animations, and
              multi-cam switching.
            </p>
          </div>
        </section>
      </main>
       <Footer />
       <WhatsAppButton />
    </>
  );
}
