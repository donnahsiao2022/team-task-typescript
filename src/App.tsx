import { Routes, Route } from 'react-router-dom';
import { Home, Login, NotFound } from './pages';

const App = () => {
  return (
    <>
      <div className="bg-dark text-white">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
