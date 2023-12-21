import { Routes, Route } from 'react-router-dom';
import {
  Home,
  Login,
  SignUp,
  Room,
  RoomDetail,
  ReserveRoom,
  NotFound
} from './pages';

const App = () => {
  return (
    <>
      <div className="bg-dark text-white">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/room' element={<Room />}></Route>
          <Route path='/room_detail' element={<RoomDetail />}></Route>
          <Route path='/reserve' element={<ReserveRoom />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
