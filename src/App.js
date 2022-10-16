import './App.css';
import { Routes, Route } from 'react-router-dom'
import Projects from './components/Projects';
import Charles from './components/Charles';
import Contact from './components/Contact';
import Home from './components/Home';
import Layout from './components/Layout/Layout';
import Feed from './components/Layout/Feed';


function App() {
  return (
    <>
      <Layout>
        <Feed>
          <Routes>
            <Route index path='*' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/charles' element={<Charles />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Feed>
      </Layout>
    </>
  );
}

export default App;
