import React from 'react';
import Hero from '../components/Hero';
import IconCarousel from '../components/IconCarousel';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import GithubContributions from '../components/GithubContributions';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <IconCarousel />
      <Experience />
      <Projects />
      <GithubContributions />
      <Footer />
    </div>
  );
};

export default Home;
