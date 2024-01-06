import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavbarLayout from "./layout/NavbarLayout"
import About from "./components/About"
import Contact from "./components/Contact"
import Faq from "./components/Faq"
import Home from "./components/Home"
import Services from "./components/Services"
import NotFound from "./components/NotFound"

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<NavbarLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<Faq />} />
        <Route path='*' element={<NotFound />} />
      </Route>
      
     </Routes>
     </BrowserRouter>

    </>
  )
}

export default App
