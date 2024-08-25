import Head from 'next/head';
import Grid from '../components/Grid';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Spreadsheet App</title>
        <meta name="description" content="A simple spreadsheet app built with Next.js, Zustand, and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-100 py-8">
        <h1 className="text-4xl text-center font-bold mb-8 text-primary">Spreadsheet App</h1>
        <Grid />
      </main>

      <footer className="mt-8 text-center">
        <p className="text-gray-500">Made with ❤️ using Next.js, Zustand, and Tailwind CSS</p>
      </footer>
    </div>
  );
}
