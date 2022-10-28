import './App.css';
import { Routes, Route } from 'react-router-dom'
import Projects from './components/Pages/Projects';
import Charles from './components/Pages/Charles';
import Contact from './components/Pages/Contact';
import Layout from './components/Layout/Layout';
import Feed from './components/Layout/Feed';
import Home from './components/Pages/Home/Home';
import { useEffect, useState } from 'react';



function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);
  return (
    <>
      {loading ? (
        <div className='preload-container'>
          <div className='preload-background-1'>
            <h4 className='logo-text-1'>CH</h4>
          </div>
        </div>
      ) : (
        <Layout>
          <Feed>
            <Routes>
              <Route path='/home' element={<Home />} />
              <Route path='/charles' element={<Charles />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/contact' element={<Contact />} />
              <Route index path='/*' element={<Home />} />
            </Routes>
          </Feed>
        </Layout>
      )}
    </>
  );
}

export default App;
