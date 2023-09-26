import { Routes, Route } from 'react-router-dom';
import BurgerMenu from './Components/burgerMenu';
import S from './app.module.scss';

import Home from './Pages/Home';
import Error from './Pages/Error';
import AboutMe from './Pages/AboutMe';
import Users from './Pages/User';

function App() {
  return (
    <div className={S.root}>
      <BurgerMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="user" element={<Users />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
