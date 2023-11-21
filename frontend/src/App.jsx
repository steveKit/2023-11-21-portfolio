import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Hamburger from "./components/Hamburger";
import LandingPage from "./components/LandingPage";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
const App = () => {

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Hamburger />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
