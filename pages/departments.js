import Header from '../components/Header';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <>
      <Header name='Departments' />
      <Layout page='departments'>
        <main>
          <h1 className='title'>
            Departments
          </h1>
        </main>
      </Layout>
    </>
  );
}