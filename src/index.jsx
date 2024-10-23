
import ReactDOM from "react-dom/client"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Heart from "./pages/Heart";
import Sins from "./pages/Sins";
import Name from "./pages/Name";
import NoPage from "./pages/NoPage";
import './App.css'

export default function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Heart />} />
          <Route path="blogs" element={<Sins />} />
          <Route path="contact" element={<Name />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
