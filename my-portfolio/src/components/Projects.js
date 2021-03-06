// import Rotate from 'react-reveal/Rotate';
import Rotate from 'react-reveal/Roll';
import Trolleo from '..//img/trolleo.jpg';
import Memory from '..//img/memory-game.jpg';
import Guitar from '..//img/guitar.jpg';
import Staking from '..//img/staking-calculator.png';

function Projects() {
  return (
    <>
      <div className='projects' style={{display: 'flex', justifyContent: 'center'}}>
        <h2 style={{marginTop: '-80px', width: '15rem', position: 'relative', zIndex: '1'}}>Projects</h2> 
      </div>

      <div style={{marginTop: '1.8rem'}}>


      <div className='projectHolder'>
          <div className='projectsImg boxP'>
            <img style={{borderRadius: '8px'}} src={Guitar} alt='guitar'/>
          </div>

          <div className='boxP textP'>
            <h3>Virtual Guitar</h3>
            <p>Using HTML, CSS and JS I create a virtual Guitar How cool is that! <br/>
            You can actually play either on classic or electronic mode.</p>
            <Rotate top left>
              <a  href='https://guitar-player.netlify.app/' target='_blank' rel="noreferrer"><div className='button'>Try it!</div></a>
            </Rotate>
          
          </div>
        </div>

        <div className='projectHolder'>
          <div className='projectsImg boxP'>
            <img style={{borderRadius: '8px'}} src={Trolleo} alt='trolleo'/>
          </div>

          <div className='boxP textP'>
            <h3>Trolleo</h3>
            <p>
              This project was the last project in the bootcamp and I made a clone of Trello. <br/>
              Once you sign up you can create many tables as you want and have all yours tasks organized!
            </p>
            <Rotate top right>
              <a  href='https://trolleo.netlify.app/' target='_blank' rel="noreferrer"><div className='button'>Try it!</div></a>
            </Rotate>

          </div>
        </div>

        <div className='projectHolder'>
          <div className='projectsImg boxP'>
            <img style={{borderRadius: '8px'}} src={Memory} alt='memory game'/>
          </div>

          <div className='boxP textP'>
            <h3>Avengers Memory Game</h3>
            <p>
              Train your memory with your favorites super heroes. <br/>
              If you wanna win you have to click on the 12 superheroes cards but you only can click once or you have to restard.
            </p>
            <Rotate top left>
              <a  href='https://avengers-memory-game.netlify.app/' target='_blank' rel="noreferrer"cd ><div className='button'>Try it!</div></a>
            </Rotate>
          </div>
        </div>

        <div className='projectHolder'>
          <div className='projectsImg boxP'>
            <img style={{borderRadius: '8px'}} src={Staking} alt='memory game'/>
          </div>

          <div className='boxP textP'>
            <h3>Staking Calculator</h3>
            <p>
              Make some calculations for a monthly income. <br/>
              Create your investment porfolio and keep track on them, have fun discovering other features.
            </p>
            <Rotate top right>
              <a  href='https://stakingcalculator.vercel.app/' target='_blank' rel="noreferrer"cd ><div className='button'>Try it!</div></a>
            </Rotate>
          </div>
        </div>


      </div>
    </>
  );
}
  
  export default Projects;
  