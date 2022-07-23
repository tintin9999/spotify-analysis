import { useEffect, useRef, useState } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import { scroller, Element } from 'react-scroll';

import './index.css'
import Home from "./pages/Home";
import Callback from "./pages/Callback";
import Error from "./pages/Error";
import Playlists from "./Components/Playlists";

function App() {
  const [accessToken, setAccessToken] = useState<string>('');
  const loc = useLocation();

  useEffect(() => {
    let storageToken = localStorage.getItem('accessToken') ?? '';

    if (loc.state) {
      storageToken = storageToken === '' ? (loc.state as any).accessToken : storageToken;
    }
    
    if (storageToken !== '') {
      setTimeout(() => {
        scroller.scrollTo('playlists', {
          duration: 700,
          smooth: true,
        });
      }, 10);

      setAccessToken(storageToken);
      localStorage.setItem('accessToken', storageToken)  
    }
  }, [])

  return (
    <div className="mx-auto">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/cb" element={<Callback />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Element name="playlists">
        <Playlists accessToken={accessToken} />
      </Element>
    </div>
  )
}

export default App
