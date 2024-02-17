import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/home';
import About from './pages/About/about';
import Team from './pages/Team/team';
import NotFound from './pages/NotFound/notfound';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';

function App() {

  return (
    <>
      <div className=" bg-bakground">
      {/* <div>
          <h1 className='bg-neutral z-10'><strong>VOZ</strong></h1>
          </div> */}
        <div>
          <BrowserRouter>
          
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about-us' element={<About />} />
              <Route path='/team' element={<Team />} />
              {/* <Route path='/video-call' element={<VideoCall />} /> */}
              <Route path='*' element={<NotFound />}>
              </Route>
            </Routes>
            <Navbar />
            
            
          </BrowserRouter>
        </div>
      </div>
    </>
  )
}

export default App
