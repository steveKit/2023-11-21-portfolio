import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Hamburger from "./components/Navigation/Hamburger";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
const App = () => {

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Hamburger />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
