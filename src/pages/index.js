import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import { Layout } from '../layout/Layout';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Skills />
      <Projects />
    </Layout>
  );
};

export default Home;
