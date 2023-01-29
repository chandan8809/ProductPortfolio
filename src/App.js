
import './App.css';
import MainBlog from './Component/blog/MainBlog';
import Tezpos from './Component/blog/Tezpos';
import Consumer from './Component/blog/Consumer';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './pages/Home';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Store from './Component/blog/Store';




function App() {
  
  return (
    <BrowserRouter>
      <div className="App font-ubanto">
       <AnimatePresence>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/product" element={<MainBlog/>}/>
            <Route path="/tezpos" element={<Tezpos/>}/>
            <Route path="/consumer" element={<Consumer/>}/>
            <Route path="/store" element={<Store/>}/>
            {/* <Route path="/tours/tag/:tag" element={<TagTours/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/addTour" element={<PrivateRoute><AddEditTour/></PrivateRoute>}/>
            <Route path="/editTour/:id" element={<PrivateRoute><AddEditTour/></PrivateRoute>}/>
            <Route path="/tour/:id" element={<SingleTour/>}/>
            <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
            <Route path="*" element={<NotFound/>}/> */}
        </Routes>
      </AnimatePresence>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
