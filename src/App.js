
import './App.css';
import Header from './Component/Header';
import Main from './Component/Main';
import Skills from './Component/Skills';
import Education from './Component/Education';
import Hamburger from './Component/Hamburger';
import ContactMe from './Component/ContactMe';
import SideBar from './Component/SideBar';
import FramerAdvance from './Component/FramerAdvance';
import WorkProgress from './Component/WorkProgress';
import MainBlog from './Component/blog/MainBlog';

// import HeaderBank from './Component/bank/HeaderBank';
// import MainList from './Component/bank/MainList';




{/* <HeaderBank/>
<MainList/> */}
{/* <FramerAdvance/> */}



function App() {
  
  return (
    <div className="App font-ubanto">
      {/* <MainBlog/> */}
      <SideBar/>
     
      <Header/>
      <Main/>
      <Skills/>

      
        <WorkProgress/>
        <Hamburger/>
        <Education/>
    
      

      <ContactMe/>
    </div>
  );
}

export default App;
