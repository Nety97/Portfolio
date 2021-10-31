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
          <div className='projectsImg'>
            <img style={{borderRadius: '8px'}} src={Trolleo} alt='picture of the project'/>
          </div>

          <div>

          </div>
        </div>

        <div className='projectHolder'>
          <div className='projectsImg'>
            <img style={{borderRadius: '8px'}} src={Memory} alt='picture of the project'/>
          </div>

          <div>

          </div>
        </div>

        <div className='projectHolder'>
          <div className='projectsImg'>
            <img style={{borderRadius: '8px'}} src={Guitar} alt='picture of the project'/>
          </div>

          <div>

          </div>
        </div>


      </div>
    </>
  );
}
  
  export default Projects;
  