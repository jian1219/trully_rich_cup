import React from 'react'
import ComponentsHeader from "./Components/Header"

import { useNavigate } from 'react-router-dom';

function Homepage() {

    const navigate = useNavigate();

    const goToAdminPage = () => {
      navigate('/Trully-Rich-Cup-adminHome');
    };
  return (
    <div>
        <div>
          <ComponentsHeader />
        </div>
        <h1>Home Marie gwapa</h1>

        <div className='header-right'>
           
            <button onClick={goToAdminPage}>admin</button>
        </div>
    </div>
  )
}

export default Homepage
