import {
  NavBar, 
  MainSection, 
  Grid, 
  StayProductive,
  CardP,
  Footer
} from './components';
import './sass/style.scss';
import background from '../src/images/bg-curvy-desktop.svg'


function App() {
  return (
    <div className="App">
        <div className='background-curvy'>
            <img
            className='img-curvy'
            src={background}
            />
        </div>
     <NavBar/>
     <MainSection/>
     <Grid/>
     <StayProductive/>
     <CardP/>
     <Footer/>
    </div>
  
  );
}

export default App;
