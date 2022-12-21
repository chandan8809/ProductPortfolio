
import './App.css';
import Header from './Component/Header';
import Main from './Component/Main';
import Skills from './Component/Skills';
import Education from './Component/Education';
import Hamburger from './Component/Hamburger';
import ContactMe from './Component/ContactMe';
import SideBar from './Component/SideBar';




function App() {
  return (
    <div className="App">
      <SideBar/>
      <Header/>
      <Main/>
      <Skills/>
      <Education/>
      <Hamburger/>
      <ContactMe/>
    </div>
  );
}

export default App;
