import Home from './components/Home'
import LogIn from './components/LogIn';
import './components/home.css'
import { useState } from 'react';
import ChatHome from './components/ChatHome';
import { AddFriend, NotFound ,NestedRoute} from './pages';
import
{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App()
{

  const [open, setOpen] = useState(0);

  return (

    <Router>
      {/* <Modal createGroup={true}/> */}
      <Routes>
        <Route
          path="/"
          element={<Wrapper open={open} setOpen={setOpen} />}
        ></Route>
        <Route
          path="/chat/*"
          element={<NestedRoute />}
        ></Route>
        <Route path='/addfriend'
               element={<AddFriend/>}>

        </Route>
        <Route path="/*" element={<NotFound />}>
        </Route>

      </Routes>

    </Router>

  );
}

const Wrapper = ({ setOpen, open }) =>
{
  return (
    <>
      <nav className="nav-bar">
        <div className="nav-icon">
          <span>C</span>hat

          <span>V</span>ibe

        </div>

      </nav>
      <Home OnLogin={setOpen} />
      {open && <LogIn open={open} OnLogin={setOpen} />}
    </>
  )
}
export default App
