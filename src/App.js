import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Homepage"


import AdminHomePage from "./AdminPage/HomePage"

//import Welcome from "./pages/Welcome";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/Trully-Rich-Cup-adminHome" element={<AdminHomePage />} /> 
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

