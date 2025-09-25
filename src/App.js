import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Homepage"

//import Welcome from "./pages/Welcome";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> 
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

