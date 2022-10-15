import './App.css';
import { Routes, Route } from 'react-router-dom'
import Projects from './components/Projects';
import Charles from './components/Charles';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index path='/home' element={<Home />} />
        <Route path='/charles' element={<Charles />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
