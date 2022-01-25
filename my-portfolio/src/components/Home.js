
import Projects from './Projects';
import Footer from './Footer';
import Fade from 'react-reveal/Fade';
// import AboutMe from './AboutMe';


function Home() {
    return (
      <div className='App'>
       
        <div className='home'>
          <Fade left>
            <h1>Hi I&apos;m Netaniel Wahnich</h1>
            <h2><span className='highlight'>Full Stack Web Developer</span></h2>
          </Fade>
        </div>
        <div className='curve2'></div>

        <div className='curve'>

        </div>

        <Projects/>
        {/* <AboutMe/> */}
        <Footer/>
        
      </div>
    );
  }
  
  export default Home;
  