import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoPage from "./components/NoPage.jsx";
import Home from "./components/Home.jsx";
import Form from "./components/Form.jsx";
import Contact from "./components/Contact.jsx";
import Livres from "./components/Livres.jsx";
import Layout from "./components/Layout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inscription" element={<Form />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/livres" element={<Livres />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
