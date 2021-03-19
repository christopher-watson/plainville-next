import Header from '../components/Header';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <>
      <Header name='Inside Plainville' />
      <Layout page='inside'>
        <main>
          <h1 className='title'>
            Inside Plainville
          </h1>
        </main>
      </Layout>
    </>
  );
}