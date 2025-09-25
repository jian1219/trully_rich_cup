import React from 'react'

import { useNavigate } from 'react-router-dom';

function Homepage() {

    const navigate = useNavigate();

    const goToAnotherPage = () => {
      navigate('/Trully-Rich-Cup-adminHome');
    };
  return (
    <div>
        <h1>Home Marie gwapa</h1>

        <div className='header-right'>
           
            <button onClick={goToAnotherPage}>admin</button>
        </div>
    </div>
  )
}

export default Homepage
