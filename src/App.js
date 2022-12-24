import AllUsers from "./components/allUsers/AllUsers";
import Login from "./components/login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Ragistrations from "./components/Ragistration/ragister";
import NavScrollExample from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Edit from "./components/Edit";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavScrollExample />
        <Routes>
          <Route path="/" element={<Ragistrations />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/showList" element={<AllUsers />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Ragistration /> */}
      {/* < /> */}
      {/* <Login /> */}
      {/* <AllUsers /> */}
    </>
  );
}

export default App;
