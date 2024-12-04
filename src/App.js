import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Home/Home";
import SecureRoute from "./components/SecureRoute/SecureRoute";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
    <BrowserRouter>
      <header className="sticky top-0 z-10 shadow">
        <Header/>
      </header>
      <ToastContainer/>
      <main>
        <Routes>
          <Route element={<Login/>} path="/login"/>
          <Route element={<SecureRoute/>}>
            <Route element={<Home/>} path="/" />
          </Route>
        </Routes>
      </main>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
