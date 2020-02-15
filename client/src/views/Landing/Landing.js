import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import classNames from 'classnames';
import landingPageStyles from '../../assets/styles/landingPageStyles';
import image from '../../assets/styles/pictures/msubackground-1.png';

import NavBar from '../NavBar/NavBar';
import Hero from '../../components/sections/Hero';
import About from '../../components/sections/About';
import Faq from '../../components/sections/Faq';
import Footer from '../../components/sections/Footer';
import Final from '../../components/sections/Final';
import Info from '../../components/sections/Info';
import Sponsors from '../../components/sections/Sponsors';
import Parallax from '../../components/sections/Parallax/Parallax';

const LandingPage = () => {
  const classes = landingPageStyles();

  return (
    <>
      <CssBaseline />
      <NavBar
        route="home"
      />
      <Parallax filter image={image}>
        <div className={classes.container}>
          <Hero />
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <About />
          <Info />
          <Sponsors />
          <Faq />
          <Final />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
