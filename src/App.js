import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from "./page/Home";
import Team from "./page/Team";
import Mint from "./page/Mint";


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/Mint" element={<Mint />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}