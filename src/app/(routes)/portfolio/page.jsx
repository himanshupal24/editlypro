import Footer from '@/components/Footer';
import Header from '@/components/Header';
import WhatsAppButton from '@/components/WhatsAppButton';
import Head from 'next/head';

const projects = [
  {
    title: 'Cinematic Travel Edit',
    videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4',
    category: 'YouTube Video',
  },
  {
    title: 'Reel for Fashion Brand',
    videoUrl: 'https://www.youtube.com/embed/ysz5S6PUM-U',
    category: 'Instagram Reel',
  },
  {
    title: 'Corporate Intro Animation',
    videoUrl: 'https://www.youtube.com/embed/jNQXAC9IVRw',
    category: 'Corporate Video',
  },
  {
    title: 'Wedding Highlight Teaser',
    videoUrl: 'https://www.youtube.com/embed/oUFJJNQGwhk',
    category: 'Event Edit',
  },
];

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio | EditlyPro</title>
        <meta
          name="description"
          content="Explore our video editing work – from reels and shorts to cinematic and corporate edits."
        />
      </Head>

      <Header />

      <main className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Portfolio</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            See the kind of visual storytelling we bring to life for creators, brands, and businesses.
          </p>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src={project.videoUrl}
                  title={project.title}
                  allowFullScreen
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-500">{project.category}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
       <Footer />
       <WhatsAppButton />
    </>
  );
}
