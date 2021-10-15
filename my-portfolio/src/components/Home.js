
import Projects from './Projects';
import Footer from './Footer';
import Fade from 'react-reveal/Fade';


function Home() {
    return (
      <div className='App'>
       
        <div className='home'>
          <Fade left>
            <h1>Hi Netaniel Wahnich here <br/> and I'm a Full Stack Web Developer</h1>
          </Fade>
        </div>
        <div className='curve2'></div>

        <div className='curve'>

        </div>

        <Projects/>
        <Footer/>
      </div>
    );
  }
  
  export default Home;
  