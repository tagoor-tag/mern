
import './App.css'

import Nav from './componets/Nav/Nav';
import Header from './componets/header/header';
import Subheader from './componets/Subheader/Subheader';
import Fasion from './componets/Fasion/Fasion';
import Display from './componets/Display/Display';
import Footer from './componets/Footer/Footer';

function App() {
  return(
    <div id='main'>
      <Nav/>
      <Header/>
      <Subheader/>
      <Fasion />
      <Display />
      <Footer />
    </div>
  )
}

export default App;
