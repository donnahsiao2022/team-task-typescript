import { Routes, Route } from 'react-router-dom';
import MemberLayout from './components/MemberLayout';
import {
  Home,
  Login,
  SignUp,
  Room,
  RoomDetail,
  ReserveRoom,
  ReserveRoomSuccess,
  MemberInfo,
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
          <Route path='/reserve_success' element={<ReserveRoomSuccess />}></Route>
          <Route path='/member' element={<MemberLayout />}>
            <Route index element={<MemberInfo />}></Route>
          </Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
