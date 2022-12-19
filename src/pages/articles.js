import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Articles from '../components/Articles/Articles';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const blog = () => {
  return (
    <Layout>
      <Articles />
    </Layout>
  );
};

export default blog;
