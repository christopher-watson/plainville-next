import Header from '../components/Header';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <>
      <Header name='Worship' />
      <Layout page='worship'>
        <main>
          <h1 className='title'>
            Worship Worship
          </h1>
        </main>
      </Layout>
    </>
  );
}