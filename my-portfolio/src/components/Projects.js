import Rotate from 'react-reveal/Rotate';
import Trolleo from '..//img/trolleo.jpg';
import Memory from '..//img/memory-game.jpg';
import Guitar from '..//img/guitar.jpg'


function Projects() {
  return (
    <>
      <div className='projects' style={{display: 'flex', justifyContent: 'center'}}>
        <h2 style={{marginTop: '-80px', width: '15rem', position: 'relative', zIndex: '1'}}>Projects</h2> 
      </div>

      <div style={{marginTop: '1.8rem'}}>


      <div className='projectHolder'>
          <div className='projectsImg boxP'>
            <img style={{borderRadius: '8px'}} src={Guitar} alt='picture of the project'/>
          </div>

          <div className='boxP'>
            <h3>Virtual Guitar</h3>
            <p>Using HTML, CSS and JS I create a virtual Guitar How cool is that! <br/>
            You can actually play either on classic or electronic mode.</p>
            <div className='button'><a  href='https://guitar-player.netlify.app/' target='_blank'>Try it!</a></div>
          </div>
        </div>

        <div className='projectHolder'>
          <div className='projectsImg boxP'>
            <img style={{borderRadius: '8px'}} src={Trolleo} alt='picture of the project'/>
          </div>

          <div className='boxP'>
            <h3>Trolleo</h3>
            <p>
              This project was the last project in the bootcamp and I made a clone of Trello. <br/>
              Once you sign up you can create many tables as you want and have all yours tasks organized!
            </p>
            <div className='button'><a  href='https://trolleo.netlify.app/' target='_blank'>Try it!</a></div>
          </div>
        </div>

        <div className='projectHolder'>
          <div className='projectsImg boxP'>
            <img style={{borderRadius: '8px'}} src={Memory} alt='picture of the project'/>
          </div>

          <div className='boxP'>
            <h3>Avengers Memory Game</h3>
            <p>
              Train your memory with your favorites super heroes. <br/>
              If you wanna win you have to click on the 12 superheroes cards but you only can click once or you have to restard.
            </p>
            <div className='button'><a  href='https://avengers-memory-game.netlify.app/' target='_blank'>Try it!</a></div>
          </div>
        </div>

       


      </div>
    </>
  );
}
  
  export default Projects;
  