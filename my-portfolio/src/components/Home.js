
import Projects from './Projects';
import Footer from './Footer';
import Fade from 'react-reveal/Fade';
// import AboutMe from './AboutMe';


function Home() {
    return (
      <div className='App'>
       
        <div className='home'>
          <Fade left>
            <h1>
              Hi Netaniel Wahnich here and I'm a <br/>
              <span className='highlight'>Full Stack Web Developer</span>
            </h1>
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
  