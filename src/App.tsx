import { Routes, Route } from 'react-router-dom';
import { Home, NotFound } from './pages';

const App = () => {
  return (
    <>
      <div className="bg-dark">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
